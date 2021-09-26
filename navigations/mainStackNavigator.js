import { createStackNavigator, createAppContainer } from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';
import AuthScreen from '../screens/AuthScreen';
import HomeTabNavigator from './homeTabNavigator';

const MainStackNavigator = createStackNavigator(
    {
        Welcome: WelcomeScreen,
        Auth: AuthScreen,
        Home: HomeTabNavigator
    },
    {
        initialRouteName: 'Welcome',
        headerMode: 'none'
    }
);

export default createAppContainer(MainStackNavigator);