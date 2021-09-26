import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from './custom/CheckBox';
import COLORS from '../constants/colors';

const Signup = (props) => {
    const { animation, slideDown, fadeOut } = props;
    return (
        <Animated.View style={[styles.container, { height: animation }]}>
            <View style={styles.wrapper}>
                <View style={styles.headerWrapper}>
                    <Text style={styles.header}>Signup</Text>
                    <Text style={styles.subHeader}>Register with Airtel number, to start the account !</Text>
                </View>
                <TextInput style={styles.mobileNumber} placeholder='Mobile number' keyboardType='phone-pad' maxLength={10}/>
                <TextInput style={styles.nicNumber} placeholder='NIC number' keyboardType='number-pad' maxLength={8}/>
                <TextInput style={styles.email} placeholder='Email address' keyboardType='email-address'/>
                <TextInput style={styles.password} placeholder='Password' textContentType='password' secureTextEntry={true} />
                <TextInput style={styles.confirmPassword} placeholder='Confirm password' textContentType='password' secureTextEntry={true} />
                <View style={styles.checkbox}>
                    <CheckBox />
                    <Text style={styles.termsHeader}>Terms and Conditions</Text>
                </View>
                <TouchableOpacity style={styles.signupButton} onPress={() => { fadeOut(); slideDown(animation) }}>
                    <Text style={styles.signupButtonText}>SIGN UP</Text>
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
    nicNumber: {
        fontFamily: 'poppins-400',
        backgroundColor: COLORS.tintBlue,
        borderRadius: 5,
        lineHeight: 40,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 15
    },
    email: {
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
        paddingHorizontal: 20,
        marginBottom: 15
    },
    confirmPassword: {
        fontFamily: 'poppins-400',
        backgroundColor: COLORS.tintBlue,
        borderRadius: 5,
        lineHeight: 40,
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderColor: COLORS.black,
        // borderWidth: 1,
        marginTop: 20
    },
    termsHeader: {
        marginLeft: 5,
        fontFamily: 'poppins-400'
    },
    signupButton: {
        alignItems: "center",
        padding: 15,
        width: '100%',
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        marginTop: 20
    },
    signupButtonText: {
        fontFamily: 'poppins-700',
        color: COLORS.white
    }
});

export default Signup
