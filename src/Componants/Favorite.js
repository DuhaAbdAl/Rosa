import { StyleSheet, Text, View, Button, Pressable, ImageBackground } from "react-native";
import React from "react";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Cards from "../assets/Cards";
const Favorite = (props) => {
    const [favList, setFavList] = useState([])
    return (
        <ImageBackground style={styles.image} source={require('../assets/images/favorite1.jpeg')}>
            <Cards
            //  favList =  {OnClickFavorite()}
             >
            </Cards>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
});
export default Favorite;