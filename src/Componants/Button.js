import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({text, onPress}) => {
    return(
<TouchableOpacity OnPress={onPress}>
    <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
    </View>

</TouchableOpacity>

    )};
    const styles =StyleSheet.create({
        button:{
            width: 250,
            borderWidth: 2,
            borderRadius: 30,
            borderColor: '#000',
            padding: 15,
            margin: 20,
            backgroundColor:'#2E8D36',
        },
        buttonText:{
            color:'white',
            fontWeight:'bold',
            fontSize:18,
            textTransform:'uppercase',
            textAlign:'center',
        }

    });
    export default Button;
