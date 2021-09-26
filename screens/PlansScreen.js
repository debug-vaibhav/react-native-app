import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import PopularPlan from '../components/PopularPlan';
import Plan from '../components/Plan';
import COLORS from '../constants/colors';

const popularPlansData = [
    {
        id: 1,
        perDay: '15',
        validity: '30',
        cost: 499
    },
    {
        id: 2,
        perDay: '12',
        validity: '30',
        cost: 399
    },
    {
        id: 3,
        perDay: '10',
        validity: '30',
        cost: 299
    },
    {
        id: 4,
        perDay: '5',
        validity: '30',
        cost: 199
    },
    {
        id: 5,
        perDay: '2',
        validity: '30',
        cost: 99
    }
];

const Time = (props) => {
    const { value, unit } = props;
    return (
        <View style={styles.valueUnitWrapper}>
            <Text style={styles.valueText}>{value}</Text>
            <Text style={styles.unitText}> {unit}</Text>
        </View>
    )
}

const DummyData = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white, marginTop: 25, }}>
            <Plan value='2' unit='Mbps' limit='Unlimited' cost='499' />
            <Plan value='4' unit='Mbps' limit='6 GB per day' cost='599' />
            <Plan value='7' unit='Mbps' limit='8 GB per day' cost='699' />
            <Plan value='8' unit='Mbps' limit='Unlimited' cost='899' />
            <Plan value='9' unit='Mbps' limit='Unlimited' cost='1099' />
            <Plan value='10' unit='Mbps' limit='10 GB per day' cost='1299' />
            <Plan value='12' unit='Mbps' limit='Unlimited' cost='1499' />
            <Plan value='15' unit='Mbps' limit='20 GB per day' cost='1699' />
            <Plan value='20' unit='Mbps' limit='Unlimited' cost='1999' />
        </View>
    )
}

const DummyData1 = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white, marginTop: 25, }}>
            <Plan value='6' unit='Mbps' limit='Unlimited' cost='499' />
            <Plan value='8' unit='Mbps' limit='10 GB per day' cost='599' />
            <Plan value='10' unit='Mbps' limit='15 GB per day' cost='699' />
            <Plan value='12' unit='Mbps' limit='Unlimited' cost='899' />
            <Plan value='15' unit='Mbps' limit='Unlimited' cost='1099' />
            <Plan value='20' unit='Mbps' limit='25 GB per day' cost='1299' />
            <Plan value='40' unit='Mbps' limit='Unlimited' cost='1499' />
            <Plan value='80' unit='Mbps' limit='40 GB per day' cost='1699' />
            <Plan value='100' unit='Mbps' limit='Unlimited' cost='1999' />
        </View>
    )
}

const routes = [
    { key: '1', title: '1  Month' },
    { key: '2', title: '2  Months' },
    { key: '3', title: '3  Months' },
    { key: '4', title: '6  Months' },
    { key: '5', title: '9  Month' },
    { key: '6', title: '12  Months' },
    { key: '7', title: '15  Months' },
    { key: '8', title: '18  Months' }
];

const renderTabBar = (props) => (
    <TabBar
        {...props}
        scrollEnabled
        bounces
        indicatorStyle={styles.indicator}
        style={styles.tabBar}
        tabStyle={styles.tab}
        labelStyle={styles.label}
        activeColor={COLORS.primary}
        inactiveColor={COLORS.mediumGray}
    />
);

const renderScene = SceneMap({
    '1': DummyData,
    '2': DummyData1,
    '3': DummyData,
    '4': DummyData1,
    '5': DummyData,
    '6': DummyData1,
    '7': DummyData,
    '8': DummyData1
});

const PlansScreen = (props) => {
    const [index, setIndex] = useState(0);
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.popularPlansContainer}>
                    <Text style={styles.popularPlansHeader}>Popular plans</Text>
                    <View style={styles.popularPlansListWrapper}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.popularPlansList}>
                            {popularPlansData.map((plan) => <PopularPlan key={plan.id} data={plan} />)}
                        </ScrollView>
                    </View>
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
                <View style={styles.plansContainer}>
                    <View style={styles.monthlyPlansWrapper}>
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            renderTabBar={renderTabBar}
                            onIndexChange={setIndex}
                        />
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
    popularPlansContainer: {
        width: '90%',
        marginTop: 15,
        marginBottom: 10
    },
    popularPlansHeader: {
        fontFamily: 'poppins-600',
        fontSize: 15,
        color: COLORS.black
    },
    popularPlansListWrapper: {
        marginTop: 5,
        paddingVertical: 5
    },
    popularPlansList: {
        width: '220%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    newOfferContainer: {
        width: '90%',
        backgroundColor: COLORS.white,
        borderRadius: 5,
        elevation: 2,
        marginVertical: 3,
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
    },
    plansContainer: {
        width: '100%',
        marginTop: 25,
        backgroundColor: COLORS.white,
    },
    monthlyPlansWrapper: {
        width: '100%',
        marginTop: 5,
    },
    tabBar: {
        backgroundColor: COLORS.white,
        elevation: 0,
        zIndex: 0,
    },
    tab: {
        width: 120,
        paddingVertical: -5
    },
    indicator: {
        backgroundColor: COLORS.primary
    },
    label: {
        fontFamily: 'poppins-500',
        color: COLORS.primary,
        textTransform: 'capitalize'
    }
});

export default PlansScreen
