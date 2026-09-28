import { useState, useCallback, useRef } from 'react';
import { reverseGeocodeLocation } from '../utils/locationHelper';

const GOOGLE_MAPS_API_KEY = 'AIzaSyDddo3JkZylnN2xgSAoLXo1wtuAPps9n2w';

export interface PlaceSuggestion {
  description: string;
  place_id: string;
  structured_formatting?: {
    main_text: string;
    secondary_text: string;
  };
}

export interface PlaceDetails {
  latitude: number;
  longitude: number;
  address: string;
  name?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

const parseAddressComponents = (components: any[]) => {
  if (!Array.isArray(components)) return { city: '', state: '', pincode: '' };

  const getComp = (types: string[]) => {
    const found = components.find((c: any) =>
      types.some((t: string) => c.types?.includes(t))
    );
    return found ? found.longText || found.long_name || '' : '';
  };

  const city =
    getComp(['locality', 'sublocality_level_1', 'administrative_area_level_3']) ||
    getComp(['administrative_area_level_2']) ||
    '';
  const state = getComp(['administrative_area_level_1']) || '';
  const pincode = getComp(['postal_code']) || '';

  return { city, state, pincode };
};

export const useGooglePlaces = () => {
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const searchPlaces = useCallback(async (query: string) => {
    if (!query || query.trim().length === 0) {
      setSuggestions([]);
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      setIsSearching(true);
      try {
        const response = await fetch('https://places.googleapis.com/v1/places:autocomplete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': GOOGLE_MAPS_API_KEY,
          },
          body: JSON.stringify({
            input: query,
            includedRegionCodes: ['in'],
          }),
        });
        const data = await response.json();

        if (data.suggestions && Array.isArray(data.suggestions)) {
          const parsed: PlaceSuggestion[] = data.suggestions
            .filter((s: any) => s.placePrediction)
            .map((s: any) => ({
              place_id: s.placePrediction.placeId || s.placePrediction.place,
              description: s.placePrediction.text?.text || '',
              structured_formatting: {
                main_text:
                  s.placePrediction.structuredFormat?.mainText?.text ||
                  s.placePrediction.text?.text ||
                  '',
                secondary_text:
                  s.placePrediction.structuredFormat?.secondaryText?.text || '',
              },
            }));
          setSuggestions(parsed);
        } else {
          setSuggestions([]);
        }
      } catch {
        setSuggestions([]);
      } finally {
        setIsSearching(false);
      }
    }, 300);
  }, []);

  const getPlaceDetails = useCallback(
    async (
      placeId: string,
      description?: string,
      mainText?: string
    ): Promise<PlaceDetails | null> => {
      try {
        const cleanPlaceId = placeId.replace(/^places\//, '');
        const response = await fetch(
          `https://places.googleapis.com/v1/places/${cleanPlaceId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-Goog-Api-Key': GOOGLE_MAPS_API_KEY,
              'X-Goog-FieldMask':
                'location,formattedAddress,displayName,addressComponents',
            },
          }
        );
        const data = await response.json();

        if (data?.location?.latitude && data?.location?.longitude) {
          const lat = data.location.latitude;
          const lng = data.location.longitude;
          const formattedAddress = data.formattedAddress || description || '';
          const displayName =
            data.displayName?.text ||
            mainText ||
            (description ? description.split(',')[0].trim() : '');
          let { city, state, pincode } = parseAddressComponents(
            data.addressComponents || []
          );

          if (!city || !state || !pincode) {
            const reverseLocation = await reverseGeocodeLocation(lat, lng);
            city = city || reverseLocation.city;
            state = state || reverseLocation.state;
            pincode = pincode || reverseLocation.pincode || '';
          }

          return {
            latitude: lat,
            longitude: lng,
            address: formattedAddress,
            name: displayName,
            city,
            state,
            pincode,
          };
        }
      } catch (error) {
        console.error('Failed to fetch place details:', error);
      }

      if (description) {
        try {
          const geocodeRes = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
              description
            )}&key=${GOOGLE_MAPS_API_KEY}`
          );
          const geocodeData = await geocodeRes.json();

          if (geocodeData.status === 'OK' && geocodeData.results?.length > 0) {
            const firstResult = geocodeData.results[0];
            const loc = firstResult.geometry.location;
            const { city, state, pincode } = parseAddressComponents(
              firstResult.address_components || []
            );

            return {
              latitude: loc.lat,
              longitude: loc.lng,
              address: firstResult.formatted_address || description,
              name: mainText || description.split(',')[0].trim(),
              city,
              state,
              pincode,
            };
          }
        } catch (e) {
          console.error('Geocoding fallback failed:', e);
        }
      }

      return null;
    },
    []
  );

  return {
    suggestions,
    isSearching,
    searchPlaces,
    getPlaceDetails,
    setSuggestions,
  };
};
