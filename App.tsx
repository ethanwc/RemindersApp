import Launch from './src/components/Launch/Launch';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Items from './src/containers/Item/Items';
import CreateItem from './src/components/CreateItem';
import {Alert, Button} from 'react-native';
import React from 'react';
import Map from './src/components/Map/Map';

const AppNavigator = createStackNavigator({
  LaunchScreen: {
    screen: Launch,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
      title: 'Test title',
    },
  },
  Items: {
    screen: Items,
    navigationOptions: {
      title: 'Grocery List',
      headerRight: () => (
        <Button
          onPress={() => Alert.alert('This is a button!')}
          title="Info"
          color="red"
        />
      ),
      headerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      },
    },
  },
  CreateItem: {
    screen: CreateItem,
  },
  Map: {
    screen: Map,
  },
});

const App = createAppContainer(AppNavigator);

export default App;
