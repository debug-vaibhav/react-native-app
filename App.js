import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MainStackNavigator from './navigations/mainStackNavigator';

const loadFonts = () => {
    Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
        'open-sans-semi': require('./assets/fonts/OpenSans-SemiBold.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'poppins-100': require('./assets/fonts/Poppins-Thin.ttf'),
        'poppins-200': require('./assets/fonts/Poppins-ExtraLight.ttf'),
        'poppins-300': require('./assets/fonts/Poppins-Light.ttf'),
        'poppins-400': require('./assets/fonts/Poppins-Regular.ttf'),
        'poppins-500': require('./assets/fonts/Poppins-Medium.ttf'),
        'poppins-600': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'poppins-700': require('./assets/fonts/Poppins-Bold.ttf'),
        'poppins-800': require('./assets/fonts/Poppins-ExtraBold.ttf'),
        'poppins-900': require('./assets/fonts/Poppins-Black.ttf'),
        'oswald-200': require('./assets/fonts/Oswald-ExtraLight.ttf'),
        'oswald-300': require('./assets/fonts/Oswald-Light.ttf'),
        'oswald-400': require('./assets/fonts/Oswald-Medium.ttf'),
        'oswald-500': require('./assets/fonts/Oswald-Regular.ttf'),
        'oswald-600': require('./assets/fonts/Oswald-SemiBold.ttf'),
        'oswald-700': require('./assets/fonts/Oswald-Bold.ttf'),
    });
}

export default function App() {
    const [isFontLoaded, setIsFontLoaded] = useState(false);
    if (!isFontLoaded) {
        return <AppLoading startAsync={loadFonts} onFinish={() => {
            setIsFontLoaded(true);
        }}/>
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor='white'/>
            <MainStackNavigator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});