import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { StyleSheet, Animated } from 'react-native';

export const HintText = (props) => {
    const [fadeAnim] = useState(new Animated.Value(1));
    useEffect(() => {
        startAnimation();
    }, []);
    const startAnimation = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 4000,
            useNativeDriver: true,
        }).start();
    };
    return (
        <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
            <Text style={styles.text}>Please, write you Todo</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 30,
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex:1
    },
    text: {
        color: 'red',
        fontSize: 12
    }
})