import { Text, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'
import React, { useState,useEffect } from 'react'


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
})

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=d49581ca391fd35d3e182af30f6fdeb5`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
            });
            })
        .catch((error) => {
            console.warn(error);
        });
        }
    }, [props.zipCode])
    
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
        color: 'black',
        fontSize: 20,
        textAlign: 'center', 
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 5,
        backgroundColor: 'white'
    }

});
     