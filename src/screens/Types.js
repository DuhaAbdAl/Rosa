import { ImageBackground, StyleSheet, Text, View, Button, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import { ScreenName } from "../../route/ScreenName";
import Cards from "../assets/Cards";

export default function Types() {

    const Arr = [
        {
            name: 'Magnolia',
            image: require('../assets/images/Magnolia.jpeg'),
        },
        {
            name: 'Lamprocapnos spectabilis',
            image: require('../assets/images/bleedigHeart.jpeg'),
        },
        {
            name: 'Iris',
            image: require('../assets/images/IrisPlant.jpeg'),
        },
        {
            name: 'Lily',
            image: require('../assets/images/FlowersPage.jpeg'),
        },
    ]
    
   
    const renderCard = (item) => {
        return Arr.map(item => <Cards Name={item.name} image={item.image} />)
        
    }
    const params = {
        flatList: {
            data: Arr,
            renderItem: data => renderCard(data),
            style: styles.flatList,
             numColumn: 2,
            // keyExtactor:
        },
    };

    return (
        <ImageBackground style={styles.image} source={require('../assets/images/green1.jpeg')}>
            <FlatList {...params.flatList} />
        </ImageBackground>
    )
};
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
})