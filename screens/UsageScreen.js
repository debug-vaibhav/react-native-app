import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Animated, { Easing } from "react-native-reanimated";
import { timing } from 'react-native-redash';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Defs, Stop, Circle } from 'react-native-svg';
import COLORS from '../constants/colors';
import DIMENSIONS from '../constants/dimensions';

const { interpolate, multiply, Clock } = Animated;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const USAGE_CIRCLE_SIZE = DIMENSIONS.SCREEN_WIDTH * 0.35;
const USAGE_CIRCLE_SIZE_WRAPPER = USAGE_CIRCLE_SIZE + 40;
const STROKE_WIDTH = 15;
const RADIUS = (USAGE_CIRCLE_SIZE - STROKE_WIDTH) / 2;
const WRAPPER_RADIUS = USAGE_CIRCLE_SIZE_WRAPPER / 2;
const CIRUMFERENCE = Math.PI * 2 * RADIUS

const clock = new Clock();
const config = {
    duration: 10 * 1000,
    toValue: 1,
    easing: Easing.linear,
};
const a = interpolate(timing(clock, 0, config), {
    inputRange: [0, 1],
    outputRange: [Math.PI * 2, Math.PI * 0.5],
});
const strokeDashoffset = multiply(a, RADIUS);
const Time = (props) => {
    const { value, unit } = props;
    return (
        <View style={styles.valueUnitWrapper}>
            <Text style={styles.valueText}>{value}</Text>
            <Text style={styles.unitText}> {unit}</Text>
        </View>
    )
}

const UsageScreen = (props) => {
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.internetSpeedContainer}>
                    <Text style={styles.speedHeader}>Your internet speed is</Text>
                    <Text style={styles.speedStatus}> Good</Text>
                    <Text style={styles.speedHeader}> now !</Text>
                </View>
                <View style={styles.dataBalanceContainer}>
                    <Svg width={USAGE_CIRCLE_SIZE_WRAPPER} height={USAGE_CIRCLE_SIZE_WRAPPER}>
                        <Circle fill={COLORS.lightGray} cy={USAGE_CIRCLE_SIZE_WRAPPER / 2} cx={USAGE_CIRCLE_SIZE_WRAPPER / 2} r={WRAPPER_RADIUS}/>
                        <AnimatedCircle stroke={COLORS.primary} fill='none' cy={USAGE_CIRCLE_SIZE_WRAPPER / 2} cx={USAGE_CIRCLE_SIZE_WRAPPER / 2} r={RADIUS} strokeWidth={STROKE_WIDTH} strokeDasharray={`${CIRUMFERENCE} ${CIRUMFERENCE}`}  strokeDashoffset={strokeDashoffset}/>
                        <View style={styles.usageDetailsWrapper}>
                            <Text style={styles.usagePercentage}>75%</Text>
                            <Text style={styles.usageHeader}>Data used</Text>
                        </View>
                    </Svg>
                    <Text style={styles.renewalTime}>Renews in 4 Hrs</Text>
                    <Text style={styles.usageDetailsLink}>Tap to view detailed usage details >></Text>
                </View>
                <View style={styles.usageContainer}>
                    <View style={styles.dateSelector}>
                        <Text style={styles.selectedDate}>Thursday, Oct 31 - 5:34 PM</Text>
                        <FontAwesome name="calendar" size={20} color={COLORS.black} />
                    </View>
                    <View style={{ borderBottomColor: COLORS.darkGray, borderBottomWidth: 0.5, width: '100%', marginTop: 10 }} />
                    <View style={styles.usageStats}>
                        <View style={styles.usageDataWrapper}>
                            <Text style={styles.usageDataHeader1}>Total Data</Text>
                            <Text style={styles.usageDataValue1}>10.0 GB</Text>
                        </View>
                        <View style={styles.usageDataWrapper}>
                            <Text style={styles.usageDataHeader2}>Data Used</Text>
                            <Text style={styles.usageDataValue2}>7.5 GB</Text>
                        </View>
                        <View style={styles.usageDataWrapper}>
                            <Text style={styles.usageDataHeader3}>Available Data</Text>
                            <Text style={styles.usageDataValue3}>2.5 GB</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.saleContainer}>
                    <LinearGradient colors={[COLORS.primary, COLORS.primaryLight]} start={[0,0]} end={[1,1]} style={styles.gradient}>
                        <View style={styles.offers}>
                            <View style={styles.offer1}>
                                <Text style={styles.offerText1}>LKR 499 plan</Text>
                                <Text style={styles.offerText2}>expires on 01 Jan 2021</Text>
                                <Text style={styles.offerText3}>10 GB data per day</Text>
                                <Text style={styles.offerText4}>12PM - 2PM unlimited data</Text>
                            </View>
                            <View style={styles.offer2}></View>
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.newOfferContainer}>
                    <View style={styles.newOfferWrapper}>
                        <View style={styles.newOfferImageWrapper}>
                            <Image
                                style={styles.newOfferImage}
                                source={require('../assets/images/offer.jpg')}
                            />
                        </View>
                        <View style={styles.newOfferContentWrapper}>
                            <View style={styles.newOfferHeaderWrapper}>
                                <Text style={styles.header}>New Offers</Text>
                                <Text style={styles.subHeader}>Only for you, Avail it today !</Text>
                            </View>
                            <View style={styles.timeWrapper}>
                                <Time value='02' unit='Hrs'/>
                                <Time value='35' unit='Min'/>
                                <Time value='54' unit='Sec'/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: COLORS.tintBlue,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    internetSpeedContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
        backgroundColor: COLORS.lightGreen,
        paddingVertical: 8,
    },
    speedHeader: {
        fontFamily: 'poppins-500',
        fontSize: 18,
        color: COLORS.black,
    },
    speedStatus: {
        fontFamily: 'poppins-700',
        fontSize: 18,
        color: COLORS.darkGreen,
    },
    dataBalanceContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 5,
        elevation: 2,
        marginVertical: 15,
        marginHorizontal: 3,
        paddingVertical: 25
    },
    usageDetailsWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        borderWidth: 0,
        borderColor: 'white'
    },
    usagePercentage: {
        fontFamily: 'oswald-700',
        fontSize: 20,
        color: COLORS.primary
    },
    usageHeader: {
        fontFamily: 'poppins-600',
        fontSize: 12,
        color: COLORS.black
    },
    renewalTime: {
        fontFamily: 'poppins-500',
        fontSize: 14,
        color: COLORS.black,
        marginTop: 30
    },
    usageDetailsLink: {
        fontFamily: 'poppins-500',
        fontSize: 12,
        color: COLORS.primary,
        marginTop: 5
    },
    usageContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 5,
        elevation: 2,
        marginVertical: 15,
        marginHorizontal: 3,
        paddingVertical: 20
    },
    dateSelector: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    usageStats: {
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    },
    selectedDate: {
        fontFamily: 'poppins-500',
        fontSize: 14,
        color: COLORS.black
    },
    usageDataWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    usageDataHeader1: {
        fontFamily: 'poppins-500',
        fontSize: 12,
        color: COLORS.primary
    },
    usageDataValue1: {
        fontFamily: 'oswald-700',
        fontSize: 20,
        color: COLORS.primary
    },
    usageDataHeader2: {
        fontFamily: 'poppins-500',
        fontSize: 12,
        color: COLORS.blue
    },
    usageDataValue2: {
        fontFamily: 'oswald-700',
        fontSize: 20,
        color: COLORS.blue
    },
    usageDataHeader3: {
        fontFamily: 'poppins-500',
        fontSize: 12,
        color: COLORS.darkGreen
    },
    usageDataValue3: {
        fontFamily: 'oswald-700',
        fontSize: 20,
        color: COLORS.darkGreen
    },
    saleContainer: {
        width: '90%',
        height: 100,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        elevation: 4,
        marginVertical: 15,
        marginHorizontal: 3,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        borderRadius: 5,
        paddingVertical: 8
    },
    offers: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    offer1: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    offerText1: {
        color: COLORS.white,
        fontFamily: 'poppins-500',
        fontSize: 16
    },
    offerText2: {
        color: COLORS.white,
        fontFamily: 'poppins-500',
        fontSize: 12
    },
    offerText3: {
        color: COLORS.white,
        fontFamily: 'poppins-500',
        fontSize: 10
    },
    offerText4: {
        color: COLORS.white,
        fontFamily: 'poppins-500',
        fontSize: 10
    },
    newOfferContainer: {
        width: '90%',
        backgroundColor: COLORS.white,
        borderRadius: 5,
        elevation: 2,
        marginVertical: 15,
        marginHorizontal: 3
    },
    newOfferWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8
    },
    newOfferImageWrapper: {
        flex: 2,
    },
    newOfferImage: {
        width: '100%',
        height: 100
    },
    newOfferContentWrapper: {
        flex: 5,
        marginLeft: 8
    },
    newOfferContentWrapper: {
        flex: 5,
        marginLeft: 8
    },
    newOfferHeaderWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    header: {
        fontFamily: 'poppins-600',
        color: COLORS.black,
        fontSize: 15
    },
    subHeader: {
        fontFamily: 'poppins-400',
        color: COLORS.black,
        fontSize: 11
    },
    timeWrapper: {
        width: '75%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10
    },
    valueUnitWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    valueText: {
        color: COLORS.primary,
        fontFamily: 'oswald-700',
        fontSize: 22
    },
    unitText: {
        color: COLORS.primary,
        fontFamily: 'oswald-400',
        fontSize: 15
    }
});

export default UsageScreen
