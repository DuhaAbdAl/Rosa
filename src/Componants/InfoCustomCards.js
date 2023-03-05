import { ImageBackground, StyleSheet, Text, View, Pressable, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

const InfoCards = () => {
    const renderData = () => {
        var keys = Object.keys(found?.info || {});
        return keys.map(key => {
            return (
                <View>
                    <Text style={styles.text2}>{key || "404"}</Text>
                    <ReadMore text={found.info[key] || "404"} />
                </View>
            )
        })
    }
    return(
        <View style={styles.container}>
            {renderData()}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 200,
        height:170,
        borderWidth:2,
    }
})
export default InfoCards;