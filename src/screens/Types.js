import { ImageBackground, StyleSheet, FlatList, Animated, View } from "react-native";
import React, { useEffect, useState } from "react";
import Cards from "../assets/Cards";
import { data } from "../mokData/data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomHeader from "../Componants/CustomHeader";
import { useContext } from "react";
import RosaContext from "../../Store/RosaContext";



const Types = (props) => {
    const { categoryName } = props.route.params || {}
    const { favorates, setFavoratis } = useContext(RosaContext);

    const getfav = async () => {
        var favoritsFromStorage = await AsyncStorage.getItem('favorite');

        if (favoritsFromStorage) {
            favoritsFromStorage = await JSON.parse(favoritsFromStorage);
        } else {
            favoritsFromStorage = []
        }

        return favoritsFromStorage;
    }



    const filterData = () => {
        const filterd = data?.filter(plant => {
            return plant.type == categoryName;
        })

        return filterd;
    }

    const checkIsFavorate = (title) => {
        const isFav = favorates.find(item => item.title === title)
        return !!isFav;
    }

    const renderCard = ({ item }) => {
        return <Cards
            Name={item.title}
            image={item.image}
            waterIcon={item.waterIcon}
            tempIcon={item.tempIcon}
            fertIcon={item.fertIcon}
            item={item}
            isFavorate={checkIsFavorate(item.title)}
            favorates={favorates}
        />
    }
    const params = {
        flatList: {
            data: [...filterData()],
            renderItem: renderCard,
            style: styles.flatList,
            numColumns: 2,
            padding: 10,
            paddingTop: 22,
        }
    };
    useEffect(() => {
        getfav().then(res => setFavoratis([...res]))
    }, []);

    return (
        // <View style={styles.img}>
        //     <CustomHeader />
        //     <FlatList {...params.flatList} />
        // </View>
        <ImageBackground style={styles.img} source={require('../assets/images/Types4.jpeg')}>
            <CustomHeader />
            <FlatList {...params.flatList} />
        </ImageBackground>
    )
};
const styles = StyleSheet.create({
    img: {
        flex: 1,
        backgroundColor:'black',
        justifyContent: 'center',
    },

}); export default Types;