import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { slides } from '../mokData/data';
import { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import HomePage from '../screens/Home page';
import { ScreenName } from '../../route/ScreenName';
import * as Animatable from 'react-native-animatable';


const slidesData = slides;

const IntroSlides = ({ navigation }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.pageLayout}>
                {/* <ImageBackground style={styles.container} source={item.image}> */}
                <Animatable.Text style={styles.titleStyle} animation={'bounceIn'}>{item.title}</Animatable.Text>
                <Image style={styles.img} source={item.image}/>
                <Animatable.Text style={styles.text} animation={'fadeInLeftBig'}>{item.desc}</Animatable.Text>
                {/* </ImageBackground> */}
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
   const onSkip = () => {
        navigation.navigate(ScreenName.SignIn)
    }

    return <AppIntroSlider
        data={slidesData}
        renderItem={renderItem}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        onDone={onDone}
        onSkip={onSkip}
        showSkipButton={true}
        dotStyle={{ backgroundColor: 'white', width: 30, }}
        activeDotStyle={{ backgroundColor: 'green', width: 30, }}
    />
}

const styles = StyleSheet.create({
    pageLayout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black",
        alignItems: 'center',
        justifyContent: "space-evenly"
    },
    titleStyle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff',
    },
    text: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
    },
    buttonCircle: {
        width: 50,
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        alignSelf: "center",
        height: 250,
        width: 250,
        borderRadius: 150,
    },

})
export default IntroSlides;