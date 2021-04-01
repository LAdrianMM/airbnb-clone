import React, { useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import feed from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';

const SearchResultsMaps = () => {
  const [isSelectedId, setIsSelectedId] = useState(null);

  return (
    <View>
      <MapView
        style={{ width: '100%', height: '100%' }}
        initialRegion={{
          latitude: -23.65236,
          longitude: -70.3954,
          latitudeDelta: 0.0285,
          longitudeDelta: 0.0165,
        }}>
        {feed.map(item => (
          <CustomMarker
            isSelected={item.id === isSelectedId}
            key={item.id}
            coordinate={item.coordinate}
            price={item.newPrice}
            onPress={() => setIsSelectedId(item.id)}
          />
        ))}
      </MapView>
    </View>
  );
};

export default SearchResultsMaps;
