import React, { useEffect, useRef, useState } from 'react';
import { FlatList, View, useWindowDimensions } from 'react-native';
import MapView from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

const SearchResultsMaps = () => {
  const [isSelectedId, setIsSelectedId] = useState(null);
  const width = useWindowDimensions().width;
  const flatlist = useRef();
  const map = useRef();
  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
  const onviewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setIsSelectedId(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!isSelectedId || !flatlist) {
      return;
    }
    const index = places.findIndex(place => place.id === isSelectedId);
    flatlist.current.scrollToIndex({ index });

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    map.current.animateToRegion(region);
  }, [isSelectedId]);

  return (
    <View>
      <MapView
        ref={map}
        style={{ width: '100%', height: '100%' }}
        initialRegion={{
          latitude: -23.65236,
          longitude: -70.3954,
          latitudeDelta: 0.0285,
          longitudeDelta: 0.0165,
        }}>
        {places.map(item => (
          <CustomMarker
            isSelected={item.id === isSelectedId}
            key={item.id}
            coordinate={item.coordinate}
            price={item.newPrice}
            onPress={() => setIsSelectedId(item.id)}
          />
        ))}
      </MapView>
      <View style={{ position: 'absolute', bottom: 1 }}>
        <FlatList
          ref={flatlist}
          data={places}
          horizontal
          snapToInterval={width - 80}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onviewChanged.current}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
        />
      </View>
    </View>
  );
};

export default SearchResultsMaps;
