import React from 'react';
import { View, StyleSheet, Animated, PanResponder, Dimensions } from 'react-native';
import COLORS from '../constants/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

const RechargeScreen = () => {
    const position = new Animated.ValueXY(0, 0);
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
            position.setValue({ x: gesture.dx, y: 0 });
        },
        onPanResponderRelease: () => {
            Animated.spring(position, {
                toValue: { x: 0, y: 0 },
                duration: 100
            }).start();
        }
    })
    const getStyle = (position) => {
        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH*1.5, 0, SCREEN_WIDTH*1.5],
            outputRange: ['-120deg', '0deg', '120deg']
        })
        return {
            ...position.getLayout(),
            transform: [{ rotate }]
        }
    }
    return (
        <View style={styles.container}>
            <Animated.View style={getStyle(position)}>
                <View style={styles.ball} {...panResponder.panHandlers}></View>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ball: {
        width: 200,
        height: 200,
        borderRadius: 20,
        backgroundColor: COLORS.primary
    }
});
export default RechargeScreen
