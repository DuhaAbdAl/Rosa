import { StyleSheet, View, Pressable, Image, Text,  } from "react-native";
import React, { useState } from "react";
import { getAllMyPlant } from "../../API/Api";

const MyPlants = () => {
    const [myPlants, setMyPlants] = useState([]);
    const [images, setImages] = useState([])
    const [loding, setLoading] = useState(false)
    // var Array = [];
    //     plants.forEach(item => {
    //         Array.push(item.Category)
    //     })
    //     console.log(Array)

    // const categoryData = images
    const getAllMyPlantFromApi = () => {
        setLoading(true)
        getAllMyPlant().then(res => {
            setLoading(false)
            console.log("res: ", res);
            res &&
                setImages(res?.all)
        })
    }

    useEffect(() => {
        getAllMyPlantFromApi()
    }, [])


    if (loding) {
        return <ActivityIndicator size={'large'} style={{ flex: 1 }} />
    }
     
    <View style={styles.container}>
        
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    
});
export default MyPlants;