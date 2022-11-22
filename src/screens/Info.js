import { ImageBackground, StyleSheet, Text, View, Button, Image, FlatList } from "react-native";
import React from "react";
import { ScreenName } from "../../route/ScreenName";
import Cards from "../assets/Cards";
import { data } from "../mokData/data";

const  Info = (props) =>  {
    const {name} = props.route.params?.data
    const found = data.find(element => element > name);                                                                                         
    

    return(
        <ImageBackground style={styles.image} source={require('../assets/images/Background.jpeg')}>
            <Text style={styles.text}>{name}</Text>
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

export default Info ;
