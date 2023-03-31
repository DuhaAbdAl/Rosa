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
            <ScrollView horizontal={true}>
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <Ionicons
                            style={styles.icon}
                            name="md-sunny-sharp"
                            color={"#c3ce29"}
                            size={22} />
                    </View>
                    <View>
                        <Text style={styles.text}>{SunExposure}</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons
                            style={styles.icon}
                            name="flower-outline"
                            color={"#e44b8d"}
                            size={25} />
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
                            color={"#1fbdd2"}
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
                            color={"#8bc34a"}
                            size={20} />
                    </View>
                    <View>
                        <Text style={styles.text}> {Fertilizer}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 110,
        height: 120,
        borderColor: 'green',
        borderWidth: 2,
        marginLeft: 15,
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 10,
        backgroundColor: '#378c80',
        elevation:10
    },
    icon: {
        alignSelf: 'center',
        margin: 8,
    },
    text: {
        fontSize: 14,
        color: "black",
        marginTop:5,
    },
    iconContainer: {
        backgroundColor: "rgba(52,52,52,0.3)",
        alignSelf: 'flex-start',
        borderRadius: 10,
    }
})
export default InfoCards;