import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, ScrollView } from 'react-native';
import Language from "./Language";
import COLORS from '../constants/colors';

const languages = [
    {
        id: 'hindi',
        title: 'हिन्दी',
        subTitle: 'हि'
    },
    {
        id: 'english',
        title: 'English',
        subTitle: 'E'
    },
    {
        id: 'bengali',
        title: 'বাঙ্গালী',
        subTitle: 'বা'
    },
    {
        id: 'marathi',
        title: 'मराठी',
        subTitle: 'म'
    },
    {
        id: 'telugu',
        title: 'తెలుగు',
        subTitle: 'తే'
    },
    {
        id: 'tamil',
        title: 'தமிழ்',
        subTitle: 'த'
    },
    {
        id: 'gujarati',
        title: 'ગુજરાતી',
        subTitle: 'ગુ'
    },
    {
        id: 'kannada',
        title: 'ಕನ್ನಡ',
        subTitle: 'ಕ'
    },
    {
        id: 'punjabi',
        title: 'ਪੰਜਾਬੀ',
        subTitle: 'ਪਾ'
    }
];

const Localization = (props) => {
    const { animation, slideDown, fadeOut } = props;
    return (
        <Animated.View style={[styles.languageContainer, { height: animation }]}>
            <Text style={styles.languageHeader}>Select Language</Text>
            <View style={styles.languageListWrapper}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.languageList}>
                    {languages.map((language) => <Language key={language.id} title={language.title} subTitle={language.subTitle} slideDown={() => slideDown(animation)} fadeOut={fadeOut}/>)}
                </ScrollView>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    languageContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: COLORS.white,
        height: Dimensions.get('window').height * 0.25,
        zIndex: 7,
        elevation: 7
    },
    languageHeader: {
        fontFamily: 'poppins-600',
        color: COLORS.black,
        fontSize: 15,
        textAlign: 'center',
        marginTop: 5
    },
    languageListWrapper: {
        width: '90%',
        marginTop: 20
    },
    languageList: {
        width: '300%',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

export default Localization
