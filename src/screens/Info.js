import { ImageBackground, StyleSheet, Text, View, Button, Image, ScrollView, } from "react-native";
import React from "react";
import { ScreenName } from "../../route/ScreenName";
import Cards from "../assets/Cards";
import { data } from "../mokData/data";

const Info = (props) => {
    const { name } = props.route.params?.data
    const found = data.find(element => element.title == name);

    const renderData = () => {
        var keys = Object.keys(data?.info || {});
        return keys.map(key => {
            return (
                <View>
                    <Text style={styles.text}>{key || "404"}</Text>
                    <Text style={styles.text}>{found.info[key] || "404"}</Text>
                </View>
            )
        })
    }

    return (
        <ImageBackground style={styles.image} source={require('../assets/images/Background.jpeg')}>
            <ScrollView>
            {renderData()}
            </ScrollView>
        </ImageBackground>
    )

}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black',
        textAlign: "center",

    },

});

export default Info;
