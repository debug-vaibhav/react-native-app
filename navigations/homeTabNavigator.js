import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import UsageScreen from '../screens/UsageScreen';
import UsageStackNavigator from './usageStackNavigator';
import RechargeScreen from '../screens/RechargeScreen';
import ModemScreen from '../screens/ModemScreen';
import ProfileScreen from '../screens/ProfileScreen';

import COLORS from '../constants/colors';

const tabIconSize = 22;
const HomeTabNavigator = createBottomTabNavigator(
    {
        Usage: {
            screen: UsageStackNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name='ios-pie' size={tabIconSize} color={tabInfo.tintColor} />
                }
            }
        },
        Recharge: {
            screen: RechargeScreen,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <FontAwesome name='battery-half' size={tabIconSize} color={tabInfo.tintColor} />
                }
            }
        },
        Modem: {
            screen: ModemScreen,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <MaterialIcons name='device-hub' size={tabIconSize} color={tabInfo.tintColor} />
                }
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <FontAwesome name='user-circle-o' size={tabIconSize} color={tabInfo.tintColor} />
                }
            }
        }
    },
    {
        initialRouteName: 'Usage',
        tabBarOptions: {
            activeTintColor: COLORS.primary,
            style: {
                height: 55
            },
            labelStyle: {
                fontFamily: 'poppins-500'
            }
        }
    }
);

export default createAppContainer(HomeTabNavigator);