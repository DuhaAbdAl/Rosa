import { ImageBackground, StyleSheet, Text, View, Button, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import Cards from "../assets/Cards";
import { data, plantTypes } from "../mokData/data";



const Types = (props) => {


    const {categoryName } = props.route.params || {}

    const filterData = () => {
        const filterd = data?.filter(plant => {
            return plant.type == categoryName ; 
        })

        return filterd ; 
    }

    // const typefilter =  plantTypes.filter(typeName => { 
    //     return typeName.type == images.title;
    //     }) 
    

    const renderCard = ({ item }) => {
        return <Cards Name={item.title} image={item.image} />
    }
    const params = {
        flatList: {
            data: filterData(),
            renderItem: renderCard,
            style: styles.flatList,
            numColumns: 1,
            padding: 10,
            paddingTop: 22,

        },
    };

    return (
        <ImageBackground style={styles.img} source={require('../assets/images/types2.jpeg')}>
            <FlatList {...params.flatList} />
        </ImageBackground>
    )
};
const styles = StyleSheet.create({
    img: {
        flex: 1,
        justifyContent: 'center',
    },
    cards: {
        marginRight: 170,
        marginLeft: 20,
    },
}); export default Types;