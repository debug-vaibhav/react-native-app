import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import COLORS from '../../constants/colors';

const CheckBox = (props) => {
    const [checked, setChecked] = useState(false);
    return (
        <TouchableOpacity style={styles.outer} onPress={() => setChecked((prevState) => !prevState)}>
            <View style={checked ? styles.checkedStyle : styles.uncheckedStyle}>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    outer: {
        borderColor: COLORS.black,
        borderWidth: 1,
        height: 17,
        width: 17,
        padding: 2
    },
    checkedStyle: {
        backgroundColor: COLORS.black,
        height: '100%',
        width: '100%'
    },
    uncheckedStyle: {
        backgroundColor: COLORS.white,
        height: '100%',
        width: '100%'
    }
});

export default CheckBox
