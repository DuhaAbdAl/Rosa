import { StyleSheet, Text, View, Button, Pressable, ImageBackground } from "react-native";
import React from "react";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Cards from "../assets/Cards";
import { ScreenName } from '../../route/ScreenName';
import { data } from "../mokData/data";

const checkIsFavorate = (title) => {
    const [favList, setFavList] = useState([])
    // const isFav = favList.find(item => item.title === title)
    return !!isFav;
}

const Favorite = (props) => {
    return (
        <ImageBackground style={styles.image} source={require('../assets/images/favorite1.jpeg')}>
          <Cards
            // isFavorate={checkIsFavorate(data.title)}
            />
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