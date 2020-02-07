import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {StyleSheet, View} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 600,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: 39.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}></MapView>
  </View>
);

// import Launch from './src/components/Launch/Launch';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import Items from './src/containers/Item/Items';
// import CreateItem from './src/components/CreateItem';
// import {Text, Alert, Button} from 'react-native';
// import React from 'react';

// const AppNavigator = createStackNavigator({
//   LaunchScreen: {
//     screen: Launch,
//     navigationOptions: {
//       gesturesEnabled: false,
//       header: null,
//       title: 'Test title',
//     },
//   },
//   Items: {
//     screen: Items,
//     navigationOptions: {
//       title: 'Grocery List',
//       headerRight: () => (
//         <Button
//           onPress={() => Alert.alert('This is a button!')}
//           title="Info"
//           color="red"
//         />
//       ),
//       headerStyle: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignContent: 'center',
//       },
//     },
//   },
//   CreateItem: {
//     screen: CreateItem,
//   },
// });

// const App = createAppContainer(AppNavigator);

// export default App;
