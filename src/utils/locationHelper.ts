import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export interface LocationData {
  address: string;
  fullAddress: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  pincode?: string;
  addressLine?: string;
}

const GOOGLE_MAPS_API_KEY = 'AIzaSyDddo3JkZylnN2xgSAoLXo1wtuAPps9n2w';

export const requestLocationPermission = async (): Promise<boolean> => {
  try {
    if (Platform.OS === 'ios') {
      const status = await Geolocation.requestAuthorization('whenInUse');
      return status === 'granted';
    }
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);
      return (
        result['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED ||
        result['android.permission.ACCESS_COARSE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED
      );
    }
    return true;
  } catch (err) {
    console.warn('Location permission request failed:', err);
    return false;
  }
};

export const getCurrentLocation = (): Promise<{
  latitude: number;
  longitude: number;
}> => {
  return new Promise((resolve) => {
    try {
      Geolocation.getCurrentPosition(
        ({ coords }) => {
          if (coords && coords.latitude && coords.longitude) {
            resolve({ latitude: coords.latitude, longitude: coords.longitude });
          } else {
            resolve({ latitude: 28.8073, longitude: 79.0254 });
          }
        },
        (err1) => {
          console.warn('High accuracy GPS failed, trying low accuracy...', err1);
          try {
            Geolocation.getCurrentPosition(
              ({ coords }) => {
                if (coords && coords.latitude && coords.longitude) {
                  resolve({ latitude: coords.latitude, longitude: coords.longitude });
                } else {
                  resolve({ latitude: 28.8073, longitude: 79.0254 });
                }
              },
              (err2) => {
                console.warn('Low accuracy GPS failed, trying IP geolocation...', err2);
                fetch('https://ipapi.co/json/')
                  .then((res) => res.json())
                  .then((data) => {
                    if (data && data.latitude && data.longitude) {
                      resolve({ latitude: parseFloat(data.latitude), longitude: parseFloat(data.longitude) });
                    } else {
                      resolve({ latitude: 28.8073, longitude: 79.0254 });
                    }
                  })
                  .catch(() => resolve({ latitude: 28.8073, longitude: 79.0254 }));
              },
              {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 60000,
              }
            );
          } catch {
            resolve({ latitude: 28.8073, longitude: 79.0254 });
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 10000,
          showLocationDialog: true,
          forceRequestLocation: true,
        }
      );
    } catch (e) {
      console.warn('Geolocation native error, falling back:', e);
      fetch('https://ipapi.co/json/')
        .then((res) => res.json())
        .then((data) => {
          if (data && data.latitude && data.longitude) {
            resolve({ latitude: parseFloat(data.latitude), longitude: parseFloat(data.longitude) });
          } else {
            resolve({ latitude: 28.8073, longitude: 79.0254 });
          }
        })
        .catch(() => resolve({ latitude: 28.8073, longitude: 79.0254 }));
    }
  });
};

export const reverseGeocodeLocation = async (
  latitude: number,
  longitude: number,
  signal?: AbortSignal
): Promise<LocationData> => {
  const fallbackLocation: LocationData = {
    address: 'Village Road, Rampur',
    fullAddress: 'Village Road, Rampur, Uttar Pradesh 244901',
    latitude: latitude || 28.8073,
    longitude: longitude || 79.0254,
    city: 'Rampur',
    state: 'Uttar Pradesh',
    pincode: '244901',
  };

  if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
    return fallbackLocation;
  }

  try {
    const googleRes = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`,
      { signal }
    );
    const googleData = await googleRes.json();

    if (googleData.status === 'OK' && googleData.results?.length > 0) {
      const firstResult = googleData.results[0];
      const addressComponents = firstResult.address_components || [];

      const getComponent = (types: string[]) => {
        const comp = addressComponents.find((c: any) =>
          types.some((t) => c.types.includes(t))
        );
        return comp ? comp.long_name : '';
      };

      const city =
        getComponent(['locality', 'sublocality_level_1', 'administrative_area_level_3']) ||
        getComponent(['administrative_area_level_2']) ||
        '';
      const state = getComponent(['administrative_area_level_1']) || '';
      const pincode = getComponent(['postal_code']) || '';

      const sublocality = getComponent(['sublocality_level_1', 'sublocality', 'neighborhood']);
      const routeName = getComponent(['route', 'street_number']);
      const addressLine =
        [routeName, sublocality].filter(Boolean).join(', ') ||
        firstResult.formatted_address.split(',')[0];
      const shortAddress = [sublocality || addressLine, city].filter(Boolean).join(', ');

      return {
        address: shortAddress || firstResult.formatted_address.split(',')[0],
        fullAddress: firstResult.formatted_address,
        latitude,
        longitude,
        city,
        state,
        pincode,
        addressLine: addressLine || shortAddress,
      };
    }
  } catch (e: any) {
    if (e?.name === 'AbortError') throw e;
  }

  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
      {
        headers: {
          'User-Agent': 'WelzaaApp/1.0',
          'Accept-Language': 'en',
        },
        signal,
      }
    );
    const data = await res.json();

    if (data?.address) {
      const a = data.address;
      const parts = [
        a.amenity,
        a.road || a.pedestrian || a.footway,
        a.neighbourhood || a.suburb || a.village || a.town,
        a.city || a.county,
      ].filter(Boolean);

      const shortAddress = parts.slice(0, 2).join(', ') || a.state || 'Selected location';
      const city = a.city || a.town || a.village || '';
      const state = a.state || '';
      const pincode = a.postcode || '';

      return {
        address: shortAddress,
        fullAddress: data.display_name || '',
        latitude,
        longitude,
        city,
        state,
        pincode,
      };
    }
  } catch (e: any) {
    if (e?.name === 'AbortError') throw e;
  }

  return fallbackLocation;
};
