import { ImageBackground, StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { ScreenName } from "../../route/ScreenName";
import Icon from "react-native-vector-icons/AntDesign";
import Button from "../Componants/Button";
import CustomDrawerButton from "../Componants/CostomDrawerButton";
import { Entypo } from "react-native-vector-icons/Entypo";

const HomePage = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={styles.image} source={require('../assets/images/GreenRose2.jpeg')}>
                {/* <CustomDrawerButton onPress={() => {
            props.navigation.navigate(ScreenName.CustomDrawer);
        }} /> */}
                {/* <TouchableOpacity >
                    <View style={styles.button}>
                        <Entypo name="menu" size={18} color="white" onPress={() => {
                            props.navigation.navigate(ScreenName.CustomDrawer);
                        }}
                        />
                    </View>

                </TouchableOpacity> */}
                <Text style={styles.text2}>Rosa Verde</Text>

                <Text style={styles.text}>
                    {`Home Is Where\n 

          My Plants Are.\n
    
            `}
                    <Text style={styles.text1}>
                        {`To Plant A Garden Is\n   
      To Believe In Tomorrow`}
                    </Text>
                </Text>
                <Button
                    text="Get Started"
                    onPress={() => {
                        props.navigation.navigate(ScreenName.Categories);
                    }} />
            </ImageBackground>

        </View>
    )
};
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: "center",
        paddingTop: 20,
        marginBottom: 200,
        lineHeight: 13,
        marginRight: 20,
        marginLeft: 50,
        alignSelf: 'baseline',
    },
    text1: {
        fontSize: 18,
        color: 'white',//#C5E1A5
        textAlign: "center",
        lineHeight: 13,
        marginTop: 15,
    },
    text2: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 35,
        color: '#7dac66',
        textAlign: 'center',
        marginBottom: 250,
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
    button: {
        width: 100,
        alignSelf: 'flex-start',
        borderWidth: 2,
        borderRadius: 70,
        borderColor: '#000',
        padding: 15,
        margin: 20,
        backgroundColor: 'rgba(10, 10, 10, 0.60)',
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