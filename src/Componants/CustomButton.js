import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = ({text, onPress}) => {
return(
<TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
    </View>

</TouchableOpacity>

    )};
    const styles =StyleSheet.create({
        button:{
            width: 250,
            alignSelf:'center',
            borderWidth: 2,
            borderRadius: 40,
            borderColor: '#000',
            padding: 15,
            margin: 20,
            backgroundColor:'green',
        },
        buttonText:{
            color:'#F1F8E9',
            fontWeight:'bold',
            fontSize:18,
            textTransform:'uppercase',
            textAlign:'center',
        }

    });
    export default CustomButton;
