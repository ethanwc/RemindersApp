import Launch from './src/components/Launch/Launch';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Items from './src/containers/Item/Items';
import CreateItem from './src/components/CreateItem';

const AppNavigator = createStackNavigator({
  LaunchScreen: {
    screen: Launch,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  Items: {
    screen: Items,
  },
  CreateItem: {
    screen: CreateItem,
  },
});

const App = createAppContainer(AppNavigator);

export default App;
