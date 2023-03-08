import { ImageBackground, StyleSheet, Text, View, Pressable, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons"

const InfoCards = (props) => {
    const {SunExposure, Water, Fertilizer, BloomTime } = props;

        return (
            <View>
            <View style={styles.cardContainer} >
                <View style={styles.container}>
                    <Ionicons
                    style={styles.icon}
                    name="md-sunny-sharp"
                    color={"#c3ce29"}
                    size={40} />
                    <Text style={styles.text}>{SunExposure}</Text>
                </View>
                <View style={styles.container}>
                    <MaterialCommunityIcons 
                    style={styles.icon}
                    name="flower-outline"
                    color={"#7f3667"}
                    size={45} />
                    <Text style={styles.text}>{BloomTime}</Text>
                </View>
                </View>
                <View style={styles.cardContainer}>
                <View style={styles.container}>
                    <MaterialCommunityIcons
                    style={styles.icon}
                    name="watering-can"
                    color={"teal"}
                    size={45} />
                    <Text style={styles.text}>{Water}</Text>
                </View>
                <View style={styles.container}>
                    <FontAwesome5
                    style={styles.icon}
                    name="seedling"
                    color={"green"}
                    size={40} />
                    <Text style={styles.text}> {Fertilizer}</Text>
                </View>
            </View>
            </View>
        )
    }   

const styles = StyleSheet.create({
    container: {
        width: 190,
        height: 170,
        borderColor:'green',
        borderWidth: 2,
        margin:4,
        alignItems:'center'
    },
    icon:{
        alignSelf:'center',
        margin:10,
        // color:'green'
    },
    cardContainer:{
        flexDirection:"row",
        margin:10,
    },
    text:{
        fontSize:20,
        color:"black",
        marginTop:15,
    }
})
export default InfoCards;