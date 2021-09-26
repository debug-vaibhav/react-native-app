import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

const WelcomeScreen = (props) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            props.navigation.navigate({ routeName: 'Home'});
        }, 2000);
        return () => {
            clearTimeout(timer);
        }
    }, []);
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/images/logo-white.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary
    },
    logo: {
        height: 160,
        width: 160
    }
});

export default WelcomeScreen;
