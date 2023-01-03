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
            width: 200,
            alignSelf:'center',
            borderWidth: 2,
            borderRadius: 40,
            borderColor: '#000',
            padding: 15,
            margin: 20,
            backgroundColor:'rgba(10, 10, 10, 0.60)',
        },
        buttonText:{
            color:'#F1F8E9',
            fontWeight:'bold',
            fontSize:18,
            textTransform:'uppercase',
            textAlign:'center',
        }

    });
    export default Button;
