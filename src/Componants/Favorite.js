import { StyleSheet, Text, View, Button, Pressable, ImageBackground } from "react-native";
import React from "react";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Favorite = (props) => {
    
return(
    <ImageBackground style={styles.image} source={require('../assets/images/favorite1.jpeg')}>
    <View>
        
    </View>
    </ImageBackground>
)}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
});
export default Favorite;