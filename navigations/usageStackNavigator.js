import React from 'react';
import { View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import UsageScreen from '../screens/UsageScreen';
import PlansScreen from '../screens/PlansScreen';

import COLORS from '../constants/colors';

const UsageStackNavigator = createStackNavigator(
    {
        UsageHome: {
            screen: UsageScreen,
            navigationOptions: () => ({
                headerLeft: <View style={{ height: 50, width: 100, paddingLeft: 15 }}><Image style={{ height: '100%', width: '100%' }} source={require('../assets/images/logo-horizontal.png')} /></View>,
                headerRight: <View style={{ paddingRight: 15 }}><FontAwesome name="bell-o" size={24} color={COLORS.black} /></View>,
                headerForceInset: true,
                headerStyle: {
                    elevation: 0,
                    zIndex: 0
                }
            }),
            cardShadowEnabled: false
        },
        UsageDetails: PlansScreen
    }
);

export default createAppContainer(UsageStackNavigator);