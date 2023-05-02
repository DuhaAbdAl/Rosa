import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { slides } from '../mokData/data';
import { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import HomePage from './Home page';
import { ScreenName } from '../../route/ScreenName';
import * as Animatable from 'react-native-animatable';


const slidesData = slides;

const IntroSlides = ({ navigation }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* <HomePage/> */}
                <ImageBackground style={styles.container} source={item.image}>
                    <Animatable.Text style={styles.titleStyle} animation={'bounceIn'}>{item.title}</Animatable.Text>
                    <Animatable.Text style={styles.text} animation={'fadeInLeftBig'}>{item.desc}</Animatable.Text>
                </ImageBackground>
            </View>
        )
    }

    const renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Entypo
                    name='chevron-right'
                    size={25}
                    color={'rgba(255,255,255,0.9)'}
                />

            </View>
        )
    }

    const renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Entypo
                    name='check'
                    size={25}
                    color={'rgba(255,255,255,0.9)'}
                />
            </View>
        )
    }

    const onDone = () => {
        navigation.navigate(ScreenName.SignIn)
    }

    return <AppIntroSlider
        data={slidesData}
        renderItem={renderItem}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        onDone={onDone}
        dotStyle={{ backgroundColor: 'white', width: 30, }}
        activeDotStyle={{ backgroundColor: 'green', width: 30, }}
    />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleStyle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 150,
    },
    text: {
        // fontFamily: 'Lobster',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff',
        marginTop: 350,
        backgroundColor: 'rgba(52,52,52,0.2)',
        textAlign: 'center',
        // backgroundColor: 'transparent'
    },
    buttonCircle: {
        width: 50,
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

})
export default IntroSlides;