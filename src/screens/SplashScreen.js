import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Animatable from 'react-native-animatable';
import { ScreenName } from "../../route/ScreenName";


const SplashScreen = ({navigation}) => {
    return (
            <ImageBackground style={styles.container} 
            source={require('../assets/images/drawer1.jpeg')}
           >
                <View style={styles.header}>
                <Text style={styles.title}>About The App</Text>
                </View>
            <View style={styles.footer}>
                <Text style={styles.FooterTitleText}>This app is here to help you find and keep track of your favorite plants </Text>
                <Text>Sign in</Text>
                <TouchableOpacity onPress={() => navigation.navigate(ScreenName.SignIn)}>
                    <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Let's go</Text>
                        <MaterialIcons
                        name="navigate-next"
                        color={'#fff'}
                        size={20}/> 
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ImageBackground>



    )
}

const { height } = Dimensions.get('screen');
const height_headerImg = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: '100%',
        // backgroundColor: '#009387',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 38,
        borderTopRightRadius: 38,
        paddingVertical: 50,
        paddingHorizontal: 38,
        alignItems: 'center'
    },
    backgroundImage: {
        width: height_headerImg,
        height: height_headerImg,
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    FooterTitleText: {
        color: 'teal',
        fontSize: 20,
        marginTop: 5,
        fontWeight: 'bold',
        alignSelf: 'center',
        lineHeight: 50,
        fontStyle: 'italic'
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: "row",
    },
    textSign: {
        color: '#fff',
        fontWeight: 'bold',
    },

})
export default SplashScreen;