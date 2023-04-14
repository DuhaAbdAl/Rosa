import { ImageBackground, StyleSheet, Text, View, Pressable, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons"
import { ScrollView } from "react-native";
import { useState } from "react";

//#c3ce29=yellow
const InfoCards = (props) => {
    const { SunExposure, Water, Fertilizer, BloomTime } = props;

    return (
        <View>
            <ScrollView>
                <View style={styles.tipsWrapper}>
                    <TouchableOpacity>
                    <Text style={styles.tipsTitle}> Sun Exposure </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={styles.tipsTitle}> Watering </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={styles.tipsTitle}> Fertilizer </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={styles.tipsTitle}> BloomTime </Text>
                    </TouchableOpacity>
                   
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    tipsWrapper: {
        width: '100%',
        height: 50,
        backgroundColor: 'teal',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center'
    },
    tipsTitle: {
        color: '#fff',

    },
    container: {
        width: 130,
        height: 170,
        // borderColor: '#0b626b',
        borderColor:"gray",
        borderWidth: 1,
        marginLeft: 15,
        borderRadius: 15,
        marginBottom: 10,
        backgroundColor: '#378c80',
        // backgroundColor:"#0b626b",
        opacity:1,
        // elevation:10,
    },
    icon: {
        alignSelf: 'center',
        margin: 8,
        color:"#fff"
    },
    text: {
        fontSize: 14,
        color: "white",
        marginTop:60,
        // alignSelf:'center'
    },
    iconContainer: {
        backgroundColor: "rgba(250,250,250,0.2)",
        alignSelf: 'flex-start',
        // alignSelf:"center",
        borderRadius: 10,
        marginLeft:8,
        marginTop:5
    }
})
export default InfoCards;
{/* <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <Fontisto
                            style={styles.icon}
                            name="day-sunny"
                            // color={"#c3ce29"}
                            // color={'white'}
                            size={20} />
                    </View>
                    <View>
                        <Text style={styles.text}>{SunExposure}</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons
                            style={styles.icon}
                            name="flower-tulip-outline"
                            // color={"#e44b8d"}
                            size={20} />
                    </View>
                    <View>
                        <Text style={styles.text}>{BloomTime}</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons
                            style={styles.icon}
                            name="watering-can"
                            // color={"#1fbdd2"}
                            size={25} />
                    </View>
                    <View>
                        <Text style={styles.text}>{Water}</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <FontAwesome5
                            style={styles.icon}
                            name="seedling"
                            // color={"#8bc34a"}
                            size={20} />
                    </View>
                    <View>
                        <Text style={styles.text}> {Fertilizer}</Text>
                    </View>
                </View> */}