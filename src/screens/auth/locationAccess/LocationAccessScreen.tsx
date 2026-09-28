import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import MapView, { Region, PROVIDER_DEFAULT } from 'react-native-maps';
import { ScreenWrapper } from '../../../components/layout';
import { PrimaryButton, AppHeader } from '../../../components/common';
import { useGooglePlaces, PlaceSuggestion } from '../../../hooks/useGooglePlaces';
import {
  requestLocationPermission,
  getCurrentLocation,
  reverseGeocodeLocation,
  LocationData,
} from '../../../utils/locationHelper';
import { theme } from '../../../config/theme';
import MapPinBadgeSvg from '../../../assets/icons/mapPinBadge.svg';
import SearchIconSvg from '../../../assets/icons/searchIcon.svg';
import TargetGpsIconSvg from '../../../assets/icons/targetGpsIcon.svg';
import { styles } from './styles';

const INITIAL_MAP_CAMERA_REGION: Region = {
  latitude: 20.5937,
  longitude: 78.9629,
  latitudeDelta: 15,
  longitudeDelta: 15,
};

const DEBOUNCE_MS = 350;

interface LocationAccessScreenProps {
  onConfirmLocation?: (location: LocationData) => void;
  onBack?: () => void;
}

export const LocationAccessScreen: React.FC<LocationAccessScreenProps> = ({
  onConfirmLocation,
  onBack,
}) => {
  const mapRef = useRef<MapView | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isInitialGpsPendingRef = useRef(true);
  const isMapReadyRef = useRef(false);
  const hasInitializedRef = useRef(false);

  const [hasPermission, setHasPermission] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchingFocused, setIsSearchingFocused] = useState(false);
  const [fetchingAddress, setFetchingAddress] = useState(true);

  const [currentLocation, setCurrentLocation] = useState<LocationData>({
    address: 'Detecting location...',
    fullAddress: '',
    latitude: 0,
    longitude: 0,
    city: '',
    state: '',
  });

  const { suggestions, isSearching, searchPlaces, getPlaceDetails, setSuggestions } =
    useGooglePlaces();

  const animateMapToRegion = useCallback((region: Region) => {
    try {
      if (mapRef.current) {
        mapRef.current.animateToRegion(region, 800);
      }
    } catch (err) {
      console.log('animateToRegion error:', err);
    }
  }, []);

  const reverseGeocode = useCallback(async (lat: number, lng: number) => {
    if (!lat || !lng) return;
    setFetchingAddress(true);
    try {
      const locData = await reverseGeocodeLocation(lat, lng);
      setCurrentLocation(locData);
    } catch (e) {
      console.log('reverseGeocode error:', e);
    } finally {
      setFetchingAddress(false);
    }
  }, []);

  const fetchGPS = useCallback(async () => {
    setFetchingAddress(true);
    try {
      const coords = await getCurrentLocation();
      isInitialGpsPendingRef.current = false;
      const newRegion: Region = {
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      animateMapToRegion(newRegion);
      await reverseGeocode(coords.latitude, coords.longitude);
    } catch (err) {
      console.log('fetchGPS error:', err);
      isInitialGpsPendingRef.current = false;
    } finally {
      setFetchingAddress(false);
    }
  }, [animateMapToRegion, reverseGeocode]);

  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    let alive = true;
    (async () => {
      const ok = await requestLocationPermission();
      if (!alive) return;
      if (ok) {
        setHasPermission(true);
        fetchGPS();
      } else {
        setHasPermission(false);
        isInitialGpsPendingRef.current = false;
        reverseGeocode(28.8073, 79.0254);
      }
    })();

    return () => {
      alive = false;
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [fetchGPS, reverseGeocode]);

  const handleRegionChange = useCallback(
    (r: Region, details?: { isGesture?: boolean }) => {
      if (details?.isGesture) {
        isInitialGpsPendingRef.current = false;
      }

      if (isInitialGpsPendingRef.current) {
        return;
      }

      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        reverseGeocode(r.latitude, r.longitude);
      }, DEBOUNCE_MS);
    },
    [reverseGeocode]
  );

  const handleSelectPlace = async (item: PlaceSuggestion) => {
    const mainText = item.structured_formatting?.main_text || item.description.split(',')[0];
    const details = await getPlaceDetails(item.place_id, item.description, mainText);
    if (details) {
      isInitialGpsPendingRef.current = false;
      const loc: LocationData = {
        address: details.name || details.address.split(',')[0],
        fullAddress: details.address,
        latitude: details.latitude,
        longitude: details.longitude,
        city: details.city || '',
        state: details.state || '',
        pincode: details.pincode || '',
      };
      setCurrentLocation(loc);
      setSearchQuery('');
      setSuggestions([]);
      setIsSearchingFocused(false);

      animateMapToRegion({
        latitude: details.latitude,
        longitude: details.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  };

  const handleConfirm = () => {
    if (!currentLocation || !currentLocation.latitude || currentLocation.latitude === 0) {
      Alert.alert(
        'Invalid Location',
        'Valid address is not selected. Please search your location or select on map.'
      );
      return;
    }
    if (onConfirmLocation) {
      onConfirmLocation(currentLocation);
    }
  };

  return (
    <ScreenWrapper backgroundColor={theme.colors.headerCream}>
      <View style={styles.container}>
        <AppHeader
          title="Location access"
          showBack={Boolean(onBack)}
          onBackPress={onBack}
          backgroundColor="transparent"
        />

        <View style={styles.mapWrapper}>
          <MapView
            ref={mapRef}
            provider={PROVIDER_DEFAULT}
            style={StyleSheet.absoluteFill}
            initialRegion={INITIAL_MAP_CAMERA_REGION}
            onMapReady={() => {
              isMapReadyRef.current = true;
            }}
            onRegionChangeComplete={handleRegionChange}
            showsUserLocation={hasPermission}
            showsMyLocationButton={false}
            showsCompass={false}
            rotateEnabled={false}
            pitchEnabled={false}
            moveOnMarkerPress={false}
            toolbarEnabled={false}
          />

          <View pointerEvents="none" style={styles.pinAnchor}>
            <View style={styles.pinBadge}>
              <MapPinBadgeSvg width={28} height={28} color={theme.colors.purple} />
            </View>
          </View>

          <View style={styles.searchOverlayContainer}>
            <View style={styles.searchInputWrapper}>
              <SearchIconSvg width={18} height={18} color={theme.colors.gray} style={{ marginRight: 10 }} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search location or village"
                placeholderTextColor={theme.colors.slateGray}
                value={searchQuery}
                onChangeText={(text) => {
                  setSearchQuery(text);
                  searchPlaces(text);
                }}
                onFocus={() => setIsSearchingFocused(true)}
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity onPress={() => setSearchQuery('')}>
                  <Text style={styles.clearText}>✕</Text>
                </TouchableOpacity>
              )}
            </View>

            {isSearchingFocused && searchQuery.trim().length > 0 && (
              <View style={styles.suggestionsCard}>
                {isSearching ? (
                  <ActivityIndicator size="small" color={theme.colors.purple} style={{ padding: 16 }} />
                ) : (
                  <FlatList
                    data={suggestions}
                    keyExtractor={(item) => item.place_id}
                    keyboardShouldPersistTaps="handled"
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.suggestionItem}
                        onPress={() => handleSelectPlace(item)}
                      >
                        <Text style={styles.suggestionMainText}>
                          {item.structured_formatting?.main_text || item.description}
                        </Text>
                        {item.structured_formatting?.secondary_text && (
                          <Text style={styles.suggestionSubText}>
                            {item.structured_formatting.secondary_text}
                          </Text>
                        )}
                      </TouchableOpacity>
                    )}
                  />
                )}
              </View>
            )}
          </View>

          <TouchableOpacity
            style={styles.myLocationFab}
            activeOpacity={0.8}
            onPress={fetchGPS}
          >
            <TargetGpsIconSvg width={22} height={22} color={theme.colors.purple} />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomCard}>
          <View style={styles.greenIconCircle}>
            <MapPinBadgeSvg width={24} height={24} color={theme.colors.vibrantGreen} />
          </View>

          <Text style={styles.locationTitle} numberOfLines={1}>
            {currentLocation.address}
          </Text>
          <Text style={styles.locationSubtitle}>
            {fetchingAddress ? 'Updating location...' : currentLocation.fullAddress || 'Selected service location'}
          </Text>

          <PrimaryButton
            title="CONFIRM LOCATION"
            onPress={handleConfirm}
            style={styles.confirmButton}
          />

          <TouchableOpacity
            style={styles.adjustPinRow}
            activeOpacity={0.7}
            onPress={fetchGPS}
          >
            <Text style={styles.adjustPinText}>Move Map to Adjust Pin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};
