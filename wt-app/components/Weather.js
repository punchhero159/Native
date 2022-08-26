import { Text, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'
import React, { useState } from 'react'


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
})
    
    return (
        <ImageBackground source={require('../onepiece1.jpg')} style={styles.backdrop}>
            <Text style={styles.zip}>Zip Code is {props.zipCode}</Text>
            <Forecast {...forecastInfo} />
        </ImageBackground>
    );
}
  
const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    zip: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center', 
    }

});
     