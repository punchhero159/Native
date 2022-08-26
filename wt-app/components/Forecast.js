import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.message}>{props.main}</Text>
            <Text style={styles.message2}>{props.description}</Text>
            <Text style={styles.message}>{props.temp}°C</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    message: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center'
    },
    message2:{
        color: 'white',
        fontsize: 20,
        textAlign: 'center' 
    }
});

