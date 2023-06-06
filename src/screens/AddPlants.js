import React from 'react';
import { StyleSheet, View, Text, Image, Button, TextInput, TouchableOpacity } from 'react-native';


const AddPlants = () => {
    return (
        <View style={styles.container}>
            
            <Image style={styles.image} source={require('../assets/images/BellaGomez.jpeg')}/>
            <TextInput
             placeholder="Name"
             placeholderTextColor={"#fff"}
             underlineColorAndroid={"#c5e1a5"}
             style={styles.textInput}             
            />
             <TextInput
             placeholder="Birthday"
             keyboardType='numeric'
             placeholderTextColor={"#fff"}
             underlineColorAndroid={"#c5e1a5"}
             style={styles.textInput}             
            />
             <TextInput
             placeholder="Species"
             placeholderTextColor={"#fff"}
             underlineColorAndroid={"#c5e1a5"}
             style={styles.textInput}             
            />
           <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>Add plant</Text>
           </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#333'
    },
    textInput: {
        color: '#fff',
        margin:10,
    },
    image: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: 15,
        borderWidth: 2,
        borderColor: '#fff',
        elevation: 15,
    },
    addButton: {
        height: 40,
        width: 90,
        backgroundColor: "#c5e1a5",
        justifyContent: 'center',
        alignSelf: "flex-end",
        marginTop: 80,
        padding: 10,
    },
    buttonText: {
        color: "#333"
    }
});

export default AddPlants;