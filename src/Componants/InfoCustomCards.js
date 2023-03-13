import { ImageBackground, StyleSheet, Text, View, Pressable, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons"
import { ScrollView } from "react-native";
import { useState } from "react";

const InfoCards = (props) => {
    const { SunExposure, Water, Fertilizer, BloomTime } = props;

    return (
        <View>
            <ScrollView horizontal={true}>
                    <View style={styles.container}>
                        <Ionicons
                            style={styles.icon}
                            name="md-sunny-sharp"
                            color={"#c3ce29"}
                            size={30} />
                       <Text style={styles.text}>{SunExposure}</Text>
                    </View>
                    <View style={styles.container}>
                        <MaterialCommunityIcons
                            style={styles.icon}
                            name="flower-outline"
                            color={"#7f3667"}
                            size={28} />
                        <Text style={styles.text}>{BloomTime}</Text>
                    </View>
                    <View style={styles.container}>
                        <MaterialCommunityIcons
                            style={styles.icon}
                            name="watering-can"
                            color={"teal"}
                            size={30} />
                        <Text style={styles.text}>{Water}</Text>
                    </View>
                    <View style={styles.container}>
                        <FontAwesome5
                            style={styles.icon}
                            name="seedling"
                            color={"green"}
                            size={30} />
                        <Text style={styles.text}> {Fertilizer}</Text>
                    </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 110,
        borderColor: 'green',
        borderWidth: 2,
        marginLeft:15,
        alignItems: 'center',
        borderRadius:15,
        marginBottom:10,
    },
    icon: {
        alignSelf: 'center',
        margin: 8,
    },
    text: {
        fontSize: 14,
        color: "black",
    }
})
export default InfoCards;