import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Favorite = (props) => {
    const [favorite, setFavorite] = useState(false)

    const OnClick = () => {
        setFavorite(!favorite)
    }

    return (
        <Pressable onPress={() => OnClick()} >
           
        </Pressable>


    )
};
const styles = StyleSheet.create({

});
export default Favorite;