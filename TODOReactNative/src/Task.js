import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet, Dimensions, Animated } from "react-native";

const AnimatedTouch = Animated.createAnimatedComponent(TouchableOpacity);
export const Task = ({ id, text, handleDeleteTask }) => {
    const [isPressed, setIsPressed] = useState(false);
    const scaleValue = new Animated.Value(1);
    const handlePressIn = () => {
        Animated.timing(scaleValue, {
            toValue: 0.9,
            duration: 200,
            useNativeDriver: true,
        }).start();
        setIsPressed(true);
    };

    const handlePressOut = () => {
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
        setIsPressed(false);
    };

    return (
        <AnimatedTouch
            onLongPress={() => handleDeleteTask(id)}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={[
                styles.container,
                {
                    transform: [{ scale: scaleValue }],
                    backgroundColor: isPressed ? '#4b81bf' : '#a1c3da',
                },
            ]}
        >
            <Text style={styles.text}>{text}</Text>
        </AnimatedTouch>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4b81bf',
        margin: 10,
        borderRadius: 10,
        width: '45%',
        height: 90,
        padding: 7
    },
    text: {
        fontSize: 18,
        color: '#313e43'
    }
})