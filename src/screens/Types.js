import { ImageBackground, StyleSheet, Text, View, Button, Image, ScrollView, FlatList, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Cards from "../assets/Cards";
import { data } from "../mokData/data";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchBar from "../Componants/SearchBar";
import CustomHeader from "../Componants/CustomHeader";



const Types = (props) => {
    const { categoryName } = props.route.params || {}
    // const { name } = props.route.params || {};
    const [favorates, setFavoratis] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState("");



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
        // console.log('title: ', title, 'isfave: ', isFav, 'res: ', !!isFav);
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
            data: filterData(),
            renderItem: renderCard,
            style: styles.flatList,
            numColumns: 1,
            padding: 10,
            paddingTop: 22,

        },
    };
    useEffect(() => {
        getfav().then(res => setFavoratis([...res]))
    }, []);


    return (
        <ImageBackground style={styles.img} source={require('../assets/images/type4.jpeg')}>
            <CustomHeader />
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
    search: {
        padding: 10,
        alignSelf: 'flex-start',
    },
    searchContainer: {
        height: 45,
        width: 150,
        margin: 10,
        marginTop: 20,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 'white',
        alignSelf: 'center',
        flexDirection: 'row',
    }
}); export default Types;
 {/* {!clicked}
<SearchBar {... props}
searchPhrase={searchPhrase}
setSearchPhrase={setSearchPhrase}
clicked={clicked}
setClicked={setClicked}
/> */}