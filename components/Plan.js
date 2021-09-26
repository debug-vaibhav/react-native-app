import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image, TouchableOpacity, TouchableHighlight, Animated, Dimensions } from 'react-native';
import COLORS from '../constants/colors';

const Plan = (props) => {
    const { value, unit, limit, cost} = props;
    return (
        <View style={styles.container}>
            <View style={styles.speedContainer}>
                <Text style={styles.value}>{value}</Text>
                <Text style={styles.unit}>{unit}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.limit}>{limit}</Text>
                <Text style={styles.cost}>LKR {cost}</Text>
            </View>
            <View style={styles.linkContainer}>
                <Text style={styles.buyNowLink}>Buy Now >></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        marginBottom: 20
    },
    speedContainer: {
        flex: 1,
        backgroundColor: COLORS.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 5
    },
    value: {
        fontFamily: 'poppins-700',
        fontSize: 15,
        color: COLORS.blue
    },
    unit: {
        fontFamily: 'poppins-600',
        fontSize: 10,
        color: COLORS.blue
    },
    detailsContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 15
    },
    limit: {
        fontSize: 14,
        fontFamily: 'oswald-700',
        color: COLORS.lightBlack
    },
    cost: {
        fontSize: 14,
        fontFamily: 'poppins-700',
        color: COLORS.lightBlack
    },
    linkContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buyNowLink: {
        fontFamily: 'poppins-600',
        fontSize: 10,
        color: COLORS.black
    }
});

export default Plan
