import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { ScreenName } from "../../route/ScreenName";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";


const HomePage = (props) => {
    const navigation = useNavigation();
    const drawerNavigation = navigation.getParent('LeftDrawer');
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={styles.image} source={require('../assets/images/GreenRose2.jpeg')}>
                <TouchableOpacity onPress={() => {
                    drawerNavigation?.openDrawer();
                }}>
                    <Entypo
                        name="menu"
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <Text style={styles.text2}>Rosa Verde</Text>

                <Text style={styles.text}>
                    {`Home Is Where\n My Plants Are\n`}
                    <Text style={styles.text1}>
                        {`To Plant A Garden Is\n To Believe In Tomorrow`}
                    </Text>
                </Text>
                <View style={styles.pressContainer}>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate(ScreenName.Categories);
                    }}>
                        <View style={styles.buttonCard}>
                            <Text style={styles.buttonText}>
                                Get Started
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.inText}>
                        <Pressable onPress={() => {
                            props.navigation.navigate(ScreenName.SignIn);
                        }}>
                            <Text style={styles.pressText}> Sign In</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>

        </View>
    )
};
const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: "center",
        paddingTop: 30,
        marginBottom: 100,
        lineHeight: 40,
        marginLeft: 150,
        alignSelf: 'baseline',
    },
    text1: {
        fontSize: 18,
        fontStyle: "italic",
        color: 'white',//#C5E1A5
        textAlign: "center",
        lineHeight: 40,
        marginTop: 15,
    },
    text2: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 35,
        color: '#7dac66',
        textAlign: 'center',
        marginBottom: 200,
        marginTop: 20,
    },
    text3: {
        fontSize: 24,
        color: 'white',
    },
    margin: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    buttonCard: {
        width: 200,
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 70,
        borderColor: '#000',
        padding: 15,
        margin: 20,
        marginTop: 60,
        marginLeft: 110,
        // marginBottom: 100,
        backgroundColor: 'rgba(10, 10, 10, 0.60)',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white',//'#A4B17B'
    },
    icon: {
        marginLeft: 20,
        marginTop: 20,
        fontSize: 30,
        color: "white",
        alignSelf: 'flex-start',
    },
    inText: {
        marginLeft:180,
        marginBottom:20,
        // marginTop:120,
        // marginRight: 30,
    },
    pressText: {
        color: '#2E8D36',
        fontSize: 20,
    },
    pressContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
    },
}); export default HomePage;

//  `
// "There is a language, 'little known'\n,
// Lovers claim it as their own.\n
// Its symbols smile upon the land,\n
// Wrought by Natures wonderous hand;\n
// And in their silent beauty speak,\n
//  Of life and joy,\n
// to those who seek\n
// For Love Divine and sunny hours\n
// In the language of the flowers".\n

// -The language of flowers london 1875`