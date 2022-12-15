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
            <View style={styles.fillView}>
                <Icon
                    style={styles.favorite}
                    name={(favorite==true)? "heart" : "heart-o"}
                    color={(favorite==true)? "red" : "white"}
                    size={20} />
            </View>
        </Pressable>


    )
};
const styles = StyleSheet.create({
    fillView: {
        position: 'absolute',
        width: 10,
        height: 10,
        top: 40,
        left: 90,
        backgroundColor: 'red'
    }
});
export default Favorite;