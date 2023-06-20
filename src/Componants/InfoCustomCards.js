import { ImageBackground, StyleSheet, Text, View, Pressable, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { ScrollView } from "react-native";
import { useState } from "react";

//#c3ce29=yellow
const InfoCards = (props) => {
    const { SunExposure, Water, Fertilizer, BloomTime } = props;

    return (
        <View style={styles.tipsWrapper}>
            <ScrollView>
                <View style={styles.tipCard}>
                        <Text style={styles.tipsTitle}> Sun Exposure </Text>
                        <Text style={styles.tipContext}>{SunExposure}</Text>
                    <Fontisto
                        name="sun"
                        size={90}
                        color={"#ffbd58"}
                    />
                    <View style={{marginTop:30, marginLeft: 20}}>
                    </View>
                </View>
                <Text style={styles.line}>_________________________________________________</Text>

                <View style={styles.tipCard}>
                    <Ionicons
                        name="water"
                        size={160}
                        color={"#63c9e5"}
                    />
                    <View style={{marginTop:30, marginLeft: 20}}>
                        <Text style={styles.tipsTitle}> Watering </Text>
                        <Text style={styles.tipContext}>{Water}</Text>
                    </View>
                </View>
                <Text style={styles.line}>_________________________________________________</Text>

                <View style={styles.tipCard}>
                    <FontAwesome5
                        name="seedling"
                        size={130}
                        color={"#7dbd07"}
                        style={{marginLeft:23}}
                    />
                    <View style={{marginTop:30, marginLeft: 20}}>
                        <Text style={styles.tipsTitle}> Fertilizer </Text>
                        <Text style={styles.tipContext}>{Fertilizer}</Text>
                    </View>
                </View>
                <Text style={styles.line}>_________________________________________________</Text>

                <View style={styles.tipCard}>
                    <Ionicons
                        name="flower"
                        size={140}
                        color={"#ef7995"}
                        style={{marginLeft:20}}
                    />
                    <View style={{marginTop:30, marginLeft: 20}}>
                        <Text style={styles.tipsTitle}> Blooming </Text>
                        <Text style={styles.tipContext}>{BloomTime}</Text>
                    </View>
                </View>
                <Text style={styles.line}>_________________________________________________</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    tipsWrapper: {
        width: '95%',
        alignSelf:'center',
        alignItems: 'center',
        // backgroundColor: "rgba(200,210,252,0.5)"  
    },
    tipsTitle: {
        color: '#333',
        fontSize: 18,
        marginBottom:15,
    },
    tipContext: {
        color: "#333",
        fontSize: 15,
        lineHeight: 25,
        // marginLeft: 10,
    },
    tipCard:{
        flexDirection: 'row',
        elevation:10
    },
    line:{
        color:"#333",
    },
    container: {
        width: 130,
        height: 170,
        // borderColor: '#0b626b',
        borderColor: "gray",
        borderWidth: 1,
        marginLeft: 15,
        borderRadius: 15,
        marginBottom: 10,
        backgroundColor: '#378c80',
        // backgroundColor:"#0b626b",
        opacity: 1,
        // elevation:10,
    },
    icon: {
        alignSelf: 'center',
        margin: 8,
        color: "#fff"
    },
    text: {
        fontSize: 14,
        color: "white",
        marginTop: 60,
        // alignSelf:'center'
    },
    iconContainer: {
        backgroundColor: "rgba(250,250,250,0.2)",
        alignSelf: 'flex-start',
        // alignSelf:"center",
        borderRadius: 10,
        marginLeft: 8,
        marginTop: 5
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
{/* <View style={styles.tipsWrapper}>
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
                   
                </View> */}