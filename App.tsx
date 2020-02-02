import Launch from './src/components/Launch';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Items from './src/containers/Items';

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
});

const App = createAppContainer(AppNavigator);

export default App;
