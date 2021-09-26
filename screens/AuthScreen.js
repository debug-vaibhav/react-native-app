import React, { useRef } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, TouchableHighlight, Animated, Dimensions } from 'react-native';
import Localization from '../components/Localization';
import Login from '../components/Login';
import Signup from '../components/Signup';
import COLORS from '../constants/colors';

const AuthScreen = (props) => {
    const slideAnimationForLocalization = useRef(new Animated.Value(0)).current;
    const slideAnimationForLogin = useRef(new Animated.Value(0)).current;
    const slideAnimationForSignup = useRef(new Animated.Value(0)).current;
    const fadeAnimation = useRef(new Animated.Value(0)).current;
    const slideUp = (animation, scaleFactor) => {
        Animated.timing(animation, {
            toValue: Dimensions.get('window').height * scaleFactor,
            duration: 200
        }).start();
    };
    const slideDown = (animation) => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 200
        }).start();
    };
    const fadeIn = () => {
        Animated.timing(fadeAnimation, {
            toValue: Dimensions.get('window').height,
            duration: 1
        }).start();
    };
    const fadeOut = () => {
        Animated.timing(fadeAnimation, {
            toValue: 0,
            duration: 1
        }).start();
    };
    return (
        <>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/images/logo-white.png')}
                    />
                </View>
                <View style={styles.authContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Welcome</Text>
                        <Text style={styles.subHeader}>Enjoy the worlds fastest and best network</Text>
                    </View>
                    <View style={styles.authButtonContainer}>
                        <TouchableOpacity style={styles.signupButton} onPress={() => { fadeIn(); slideUp(slideAnimationForSignup, 0.8);}}>
                            <Text style={styles.signupButtonText}>SIGN UP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginButton} onPress={() => { fadeIn(); slideUp(slideAnimationForLogin, 0.55);}}>
                            <Text style={styles.loginButtonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.localizationContainer}>
                    <Text style={styles.localizationHeader}>Language</Text>
                    <TouchableOpacity style={styles.localizationSelector} onPress={() => { fadeIn(); slideUp(slideAnimationForLocalization, 0.20);}}>
                        <Text style={styles.selectedLanguage}>English</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Animated.View style={[styles.overlayContainer, { height: fadeAnimation }]}></Animated.View>
            <Localization animation={slideAnimationForLocalization} slideDown={slideDown} fadeOut={fadeOut} navigation={props.navigation}/>
            <Login animation={slideAnimationForLogin} slideDown={slideDown} fadeOut={fadeOut} navigation={props.navigation}/>
            <Signup animation={slideAnimationForSignup} slideDown={slideDown} fadeOut={fadeOut} navigation={props.navigation}/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        zIndex: 5,
        elevation: 5
    },
    overlayContainer: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.black,
        opacity: 0.4,
        zIndex: 6,
        elevation: 6
    },
    logoContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 160,
        width: 160
    },
    authContainer: {
        flex: 4,
        width: '90%'
    },
    headerContainer: {
        flex: 1,
    },
    authButtonContainer: {
        flex: 4,
        justifyContent: 'center'
    },
    header: {
        fontFamily: 'poppins-600',
        color: COLORS.white,
        fontSize: 27,
        textAlign: 'center'
    },
    subHeader: {
        fontFamily: 'poppins-500',
        color: COLORS.white,
        fontSize: 15,
        textAlign: 'center'
    },
    signupButton: {
        alignItems: "center",
        padding: 15,
        width: '100%',
        backgroundColor: COLORS.primary,
        borderColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 5,
    },
    loginButton: {
        alignItems: "center",
        padding: 15,
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 5,
        marginTop: 20
    },
    signupButtonText: {
        fontFamily: 'poppins-700',
        color: COLORS.white
    },
    loginButtonText: {
        fontFamily: 'poppins-700',
        color: COLORS.primary
    },
    localizationContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    localizationHeader: {
        fontFamily: 'poppins-400',
        color: COLORS.white,
        fontSize: 10
    },
    localizationSelector: {
        marginLeft: 10
    },
    selectedLanguage: {
        fontFamily: 'poppins-400',
        color: COLORS.white,
        paddingHorizontal: 10,
        paddingVertical: 2,
        fontSize: 14,
        backgroundColor: COLORS.primary,
        borderRadius: 25,
        borderColor: COLORS.white,
        borderWidth: 0.5
    }
});

export default AuthScreen;
