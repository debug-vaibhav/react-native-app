import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image, TouchableOpacity, TouchableHighlight, Animated, Dimensions } from 'react-native';
import COLORS from '../constants/colors';

const PopularPlan = (props) => {
    const { data } = props;
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.perDayContainer}>
                    <Text style={styles.perDayNumber}>{data.perDay} GB</Text><Text style={styles.perDayText}>   per day</Text>
                </View>
                <View style={styles.costValidityContainer}>
                    <Text style={styles.cost}>LKR {data.cost}</Text><Text style={styles.validity}> Validity: {data.validity} days</Text>
                </View>
            </View>
            <View style={styles.horizontalDivider} />
            <Text style={styles.viewDetailsLink}>View Details >></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: 5,
        elevation: 2,
        marginVertical: 3,
        marginHorizontal: 3
    },
    wrapper: {
        paddingHorizontal: 10,
        paddingVertical: 8
    },
    perDayContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    perDayNumber: {
        color: COLORS.blue,
        fontFamily: 'oswald-700',
        fontSize: 20
    },
    perDayText: {
        color: COLORS.blue,
        fontFamily: 'poppins-400',
        fontSize: 10
    },
    costValidityContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    cost: {
        fontFamily: 'poppins-600',
        fontSize: 14,
        color: COLORS.black,
    },
    validity: {
        fontFamily: 'poppins-400',
        fontSize: 10,
        color: COLORS.darkGray,
    },
    horizontalDivider: {
        borderBottomColor: COLORS.lightGray,
        borderBottomWidth: 1,
        marginBottom: 10
    },
    viewDetailsLink: {
        fontFamily: 'poppins-500',
        fontSize: 10,
        color: COLORS.primary,
        alignSelf: 'flex-end',
        paddingRight: 10,
        paddingBottom: 5
    }
});

export default PopularPlan
