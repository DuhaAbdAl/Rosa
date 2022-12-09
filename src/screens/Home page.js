import { ImageBackground, StyleSheet, Text, View, Pressable,TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { ScreenName } from "../../route/ScreenName";
import  Icon  from "react-native-vector-icons/AntDesign";
//import {Ionicons} from "react-native-vector-icons/Ionicons"


const HomePage = (props) => {

    // useEffect(()=>{
    //     props.navigation.toggleDrawer()
    // },[])

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={styles.image} source={require('../assets/images/GreenRose2.jpeg')}>

            <Pressable style={styles.button} onPress={() => {
                    props.navigation.navigate(ScreenName.Categories);
                }}>
                    <Text>
                        <Icon
                            size={30}
                            color="white"
                            name='rightcircleo' />
                    </Text>
                </Pressable>
                <Text style={styles.text2}>Rosa Verde</Text>

                <Text style={styles.text}>{`
                   "There is a language, 'little known'\n,
                    Lovers claim it as their own.\n
                    Its symbols smile upon the land,\n
                    Wrought by Natures wonderous hand;\n
                    And in their silent beauty speak,\n
                     Of life and joy,\n
                    to those who seek\n
                    For Love Divine and sunny hours\n
                    In the language of the flowers".\n

                -The language of flowers london 1875`}
                </Text>
                {/* <View style={styles.margin}>
                <TouchableOpacity onPress={() => {}} style={{paddingVertical:10}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Icon
                name='login'
                size={20}
                color='white'/>
                <Text>

                </Text>
                </View>
                </TouchableOpacity>
                </View> */}
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
        fontSize: 16,
        color: 'white',
        textAlign: "left",
        paddingTop: 30,
        marginBottom: 300,
        lineHeight: 13,
        marginRight:20,
    },
    text2: {
        fontWeight: 'bold',
        fontSize: 30,
       // padding: 10,
        color: 'green',
        textAlign: 'center',
        marginBottom: 150,
        marginTop:20,
    },
    text3: {
        fontSize: 24,
        color: 'white',
    },
    button: { 
        marginTop:90,
       // marginRight:10,
        paddingHorizontal: 40,
        alignSelf: 'flex-end',
        backgroundColor: 'transparent'
    },
    margin:{
        padding:20,
        borderTopWidth:1,
        borderTopColor:'#ccc',
    },
}); export default HomePage;