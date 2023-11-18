import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { images } from '../mokData/data';
import DropdownComponent from '../Componants/DropDown';
import { addMyPlant } from '../../API/Api';
// import { data, images } from '../mokData/data';


const AddPlants = () => {
    const [MyPlant, setMyPlant] = useState([])
    const [loding, setLoading] = useState(false)
    // var Array = [];
    //     plants.forEach(item => {
    //         Array.push(item.Category)
    //     })
    //     console.log(Array)

    // const categoryData = images
    const addMyPlantFromApi = () => {
        setLoading(true)
        addMyPlant().then(res => {
            setLoading(false)
            console.log("res: ", res);
            res &&
                setMyPlant(res?.all)
        })
    }

    useEffect(() => {
        addMyPlantFromApi()
    }, [])


    if (loding) {
        return <ActivityIndicator size={'large'} style={{ flex: 1 }} />
    }
    return (
        <View style={styles.container}>

            <Image style={styles.image} source={require('../assets/images/BellaGomez.jpeg')} />
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
            <DropdownComponent />
            <TouchableOpacity style={styles.addButton} onPress={()=> {(addMyPlant())}}>
                <Text style={styles.buttonText}>Add plant</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333'
    },
    textInput: {
        color: '#fff',
        margin: 10,
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