import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.mainpartstyle}>{props.main}</Text>
            <Text style={styles.despartstyle}>{props.description}</Text>
            <Text style={styles.temppartstyle}>{props.temp}°C</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    mainpartstyle: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center'
    },
    despartstyle:{
        color: 'white',
        fontsize: 20,
        fontStyle: 'italic',
        textAlign: 'center' 
    },
    temppartstyle: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center'
    }
});

