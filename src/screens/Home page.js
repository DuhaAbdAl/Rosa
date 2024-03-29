import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { ScreenName } from "../../route/ScreenName";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const HomePage = (props) => {
    const navigation = useNavigation();
    const drawerNavigation = navigation.getParent('LeftDrawer');
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={styles.image} source={require('../assets/images/HomePage2.jpeg')}>
                <TouchableOpacity onPress={() => {
                    drawerNavigation?.openDrawer();
                }}>
                    <Entypo
                        name="menu"
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <Text style={styles.text2}>Rosa Verde</Text>

                <View style={styles.quoteText}>
                    <Text style={styles.text}>
                        {`Home Is Where\n My Plants Are\n`}
                        <Text style={styles.text1}>
                            {`To Plant A Garden Is\n To Believe In Tomorrow`}
                        </Text>
                    </Text>
                </View>
                {/* <TouchableOpacity onPress={() => {
                    props.navigation.navigate(ScreenName.Categories);
                }}>
                    <View style={styles.buttonCard}>
                        <Text style={styles.buttonText}>
                            Get Started
                        </Text>
                    </View>
                </TouchableOpacity> */}
                {/* <View style={styles.pressContainer}>
                    <Pressable onPress={() => {
                        props.navigation.navigate(ScreenName.SignIn);
                    }}>
                        <Text style={styles.pressText}> Sign In</Text>
                    </Pressable>
                </View> */}
                <TouchableOpacity onPress={() => {props.navigation.navigate(ScreenName.SlideIntroScreens) }}>
                    <View
                        backgroundColor={'rgba(250,250,250,0.1)'}
                        style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcons
                            name="navigate-next"
                            color={'#fff'}
                            size={20} />
                    </View>
                </TouchableOpacity>
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
        lineHeight: 40,
        marginLeft: 35,
        alignSelf: 'baseline',
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: "italic",
        color: 'white',//#C5E1A5
        textAlign: "center",
        lineHeight: 40,
        marginLeft: 50,
    },
    text2: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 35,
        color: '#8bca84',
        textAlign: 'center',
        marginBottom: 200,
        marginTop: 10,
        elevation: 14,
    },
    text3: {
        fontSize: 24,
        color: 'white',
    },
    quoteText: {
        backgroundColor: 'rgba(250,250,250,0.0)',
        height: 270,
        width: 270,
        alignSelf: 'flex-end',
    },
    margin: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    buttonCard: {
        width: 170,
        alignSelf: 'center',
        borderRadius: 70,
        padding: 10,
        // margin: 20,
        marginTop: 110,
        backgroundColor: 'transparent'//'rgba(250,250,250,0.3)',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white',//'#A4B17B'
        alignSelf: 'center',
    },
    icon: {
        marginLeft: 20,
        marginTop: 20,
        fontSize: 30,
        color: "white",
        alignSelf: 'flex-start',
    },
    inText: {
        marginLeft: 180,
        marginBottom: 20,
    },
    pressText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginRight: 30,
    },
    pressContainer: {
        alignSelf: 'center',
        marginTop: 140,
    },
    textSign: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: "row",
        alignSelf:'center',
        marginTop: 140,
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