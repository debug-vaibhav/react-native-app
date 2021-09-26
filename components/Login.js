import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import COLORS from '../constants/colors';

const Login = (props) => {
    const { animation, slideDown, fadeOut } = props;
    return (
        <Animated.View style={[styles.container, { height: animation }]}>
            <View style={styles.wrapper}>
                <View style={styles.headerWrapper}>
                    <Text style={styles.header}>Login</Text>
                    <Text style={styles.subHeader}>Lets get started</Text>
                </View>
                <TextInput style={styles.mobileNumber} placeholder='Mobile number' keyboardType='phone-pad' maxLength={10}/>
                <TextInput style={styles.password} placeholder='Password' textContentType='password' secureTextEntry={true}/>
                <Text style={styles.forgotPassword}>Forgot password ?</Text>
                <TouchableOpacity style={styles.loginButton} onPress={() => { fadeOut(); slideDown(animation); props.navigation.navigate({ routeName: 'Home' }); }}>
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: COLORS.white,
        zIndex: 7,
        elevation: 7
    },
    wrapper: {
        width: '90%',
        height: '100%',
        paddingVertical: 30,
        justifyContent: 'flex-start'
    },
    headerWrapper: {
        marginBottom: 30
    },
    header: {
        fontFamily: 'poppins-600',
        fontSize: 24,
        color: COLORS.primary
    },
    subHeader: {
        fontFamily: 'poppins-400',
        fontSize: 12,
        color: COLORS.black
    },
    mobileNumber: {
        fontFamily: 'poppins-400',
        backgroundColor: COLORS.tintBlue,
        borderRadius: 5,
        lineHeight: 40,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 15
    },
    password: {
        fontFamily: 'poppins-400',
        backgroundColor: COLORS.tintBlue,
        borderRadius: 5,
        lineHeight: 40,
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginTop: 15
    },
    loginButton: {
        alignItems: "center",
        padding: 15,
        width: '100%',
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        marginTop: 40
    },
    loginButtonText: {
        fontFamily: 'poppins-700',
        color: COLORS.white
    }
});

export default Login
