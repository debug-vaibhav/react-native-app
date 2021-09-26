import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import COLORS from '../constants/colors';

const Language = (props) => {
    const { title, subTitle, slideDown, fadeOut } = props;
    return (
        <View style={styles.languageWrapper}>
            <TouchableOpacity style={styles.languageOption} onPress={() => { fadeOut(); slideDown();}}>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    languageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    languageOption: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.lightGray,
        borderRadius: 30,
        width: 60,
        height: 60,
    },
    title: {
        color: COLORS.darkGray,
        fontFamily: 'poppins-300',
        fontSize: 15,
        marginTop: 5
    },
    subTitle: {
        color: COLORS.primary,
        fontFamily: 'poppins-600',
        fontSize: 25
    }
});
export default Language
