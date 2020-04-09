import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
	Login: LoginScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Monsters Shopping Mart'
    }
  }
);

export default createAppContainer(navigator);
