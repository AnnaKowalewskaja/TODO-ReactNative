import React from "react";
import { StyleSheet, Text, View } from 'react-native';
export const Header = ({ title }) => {
    return (
        <View style={styles.header__container}>
            <Text style={styles.header__text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header__container: {

        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#4b81bf',
        height: 90,
        width: '100%',
        paddingBottom: 10
    },
    header__text: {
        color: 'white'
    }
});