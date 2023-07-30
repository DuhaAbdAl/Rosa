import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    ImageBackground,
} from 'react-native';
import { ScreenName } from '../../route/ScreenName';
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import RosaContext from '../../Store/RosaContext';
import LinearGradient from 'react-native-linear-gradient';
import IconContainer from '../Componants/IconContainer';


const Cards = (props) => {
    const { Name, image, isFavorate, fav } = props;
    const [favo, setFavorite] = useState(false)
    const navigation = useNavigation();
    var favoritsFromStorage = fav;


    const checkIfFavorate = () => {
        const isFav = favoritsFromStorage.find(item => item === Name)
        return !!isFav;
    }


    const OnClickFavorite = async () => {
        //     if (!favorite) {
        //         !checkIfFavorate() &&
        //         favoritsFromStorage.push(Name)
        // } else {
        //     favoritsFromStorage = favoritsFromStorage.filter(fav => fav !== Name);
        // }
        // AsyncStorage.setItem('favorite', JSON.stringify(favoritsFromStorage)); 
        setFavorite(!favo)
    }

    // useEffect(() => {
    //     setFavorite(checkIfFavorate())
    // }, [favo])


    return (
        // <View>
           <LinearGradient
                colors={['#276221', '#5bb450']}
                style={styles.card}
            >
             {/* <View style={styles.card} > */}
                <Image style={styles.img} source={image} />
                <Text style={styles.cardText}>{Name}</Text>
                <View style={styles.icons}>
                    <Pressable onPress={OnClickFavorite} >
                        <FontAwesome
                            name={(favo) ? "heart" : "heart-o"}
                            color={(favo) ? "red" : "white"}
                            size={25} />
                    </Pressable>
                    <Pressable onPress={() => {
                        navigation.navigate(ScreenName.CardInfo, { name: Name });
                    }}>
                        <FontAwesome
                            name='long-arrow-right'
                            color={"white"}
                            size={28}
                        />
                    </Pressable>
                </View>
            {/* </View> */}
             </LinearGradient> 

        //     <View>
        //         <IconContainer />
        //     </View>
        //  </View>

    )
}
const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 160,
        flexDirection: "row",
        marginBottom: 10,
        borderBottomLeftRadius: 40,
        borderTopLeftRadius: 40,
        justifyContent: "space-between",
        elevation: 10,
        backgroundColor:"green"
    },
    icons: {
        marginRight: 10,
        marginTop: 10,
        marginBottom: 8,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    cardBackground: {
        backgroundColor: "yellow",
        elevation: 10,
        borderWidth: 1,
        borderColor: 'red',
        margin: 10,
    },
    cardText: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'white',
    },
    img: {
        height: "100%",
        width: "30%",
        borderRadius: 25,
    }
})



export default Cards; 
