import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {StyleSheet, View, Button, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const Map = () => {
  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

  const getLoc = () => {
    Geolocation.getCurrentPosition(info => Alert.alert(JSON.stringify(info)));
  };

  return (
    <View style={{flex: 1}}>
    <View style={{flex: 1}}>

      <Button title="loc" onPress={() => getLoc()} />
      </View>

      <View style={{flex: 10}}>

      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>

    </View>
  );
};

Map.propTypes = {};

export default Map;
