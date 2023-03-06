import { ImageBackground, StyleSheet, Text, View, Pressable, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import Fontisto from "react-native-ionicons";
import MaterialCommunityIcons from "react-native-ionicons";
import FontAwesome5 from "react-native-ionicons";

const InfoCards = (props) => {
    const { description, SunExposure, Water, Fertilizer, BloomTime } = props;

        return (
            <View >
                <View style={styles.container}>
                    <Fontisto
                    style={styles.icon}
                    name="day-sunny"
                    color="black"
                    size={20} />
                    <Text style={{color:"red"}}>{SunExposure}</Text>
                </View>
                <View style={styles.container}>
                    <MaterialCommunityIcons 
                    style={styles.icon}
                    name="flower-outline"
                    color="black"
                    size={20} />
                    <Text>{BloomTime}</Text>
                </View>
                <View style={styles.container}>
                    <MaterialCommunityIcons
                    style={styles.icon}
                    name="watering-can"
                    color="black"
                    size={20} />
                    <Text>{Water}</Text>
                </View>
                <View style={styles.container}>
                    <FontAwesome5
                    style={styles.icon}
                    name="seedling"
                    color="black"
                    size={20} />
                    <Text>{Fertilizer}</Text>
                </View>
            </View>
        )
    }
   

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 170,
        borderColor:'black',
        borderWidth: 2,
        margin:10,
    },
    icon:{
        alignSelf:'center',
        margin:10,
    }
})
export default InfoCards;