import { 
     StyleSheet,
     FlatList, 
     View 
    } from "react-native";
import React, { useEffect, useState } from "react";
import Cards from "../assets/Cards";
import { data } from "../mokData/data";
import CustomHeader from "../Componants/CustomHeader";
import { getAllPlant } from "../../API/Api";
import IconContainer from "../Componants/IconContainer";


const Types = (props) => {
    const { categoryName } = props.route.params || {};
    const [fav, setFavoratis] = useState([]);
    const [images, setImages] = useState([])
    const [loding, setLoading] = useState(false)


    // const getfav = async () => {
    //     var favoritsFromStorage = await AsyncStorage.getItem('fav');

    //     if (favoritsFromStorage) {
    //         favoritsFromStorage = await JSON.parse(favoritsFromStorage);
    //     } else {
    //         favoritsFromStorage = []
    //     }

    //     return favoritsFromStorage;
    // }

    // const filterData = () => {
    //     const filterd = data?.filter(plant => {
    //         return plant.type == categoryName;
    //     })

    //     return filterd;
    // }

    const checkIsFavorate = (title) => {
        const isFav = fav.find(item => item.title === title)
        return !!isFav;
    }

    const getAllPlantFromApi = () => {
        setLoading(true)
        getAllPlant().then(res => {
            setLoading(false)
            console.log("res: ", res);
            res &&
                setImages(res?.all)
        })
    }

    useEffect(() => {
        getAllPlantFromApi()
    }, [])


    if(loding) {
        return <ActivityIndicator size={'large'} style={{flex:1}} />
    }
    const renderCard = ({ item }) => {
        return <Cards
            Name={url.title}
            image={url.images}
            // waterIcon={url.WaterIcon}
            // tempIcon={url.TempIcon}
            // fertIcon={url.FertIcon}
            // item={item}
            // isFavorate={checkIsFavorate(item.title)}
            favorates={fav}
        />
    }
    const params = {
        flatList: {
            data: [...getAllPlantFromApi()],
            renderItem: renderCard,
            style: styles.flatList,
            // numColumns: 2,
            padding: 10,
            paddingTop: 22,
        }
    };
    // useEffect(() => {
    //     getfav().then(res => setFavoratis([...res]))
    // }, []);

    return (
        <View style={styles.container}> 
            <CustomHeader />
            <FlatList {...params.flatList} />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
});
export default Types;