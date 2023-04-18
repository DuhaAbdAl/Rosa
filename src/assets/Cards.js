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
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import RosaContext from '../../Store/RosaContext';


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
        <View >
            <View style={{borderRadius:30}}>
            <Pressable style={styles.card} onPress={() => {
                navigation.navigate(ScreenName.CardInfo, { name: Name });
            }}>
                <ImageBackground style={styles.cardBackground} source={image}>
                        <Pressable onPress={OnClickFavorite} >
                            <View>
                                <Icon
                                    style={styles.favorite}
                                    name={(favo) ? "heart" : "heart-o"}
                                    color={(favo) ? "red" : "white"}
                                    size={20} />
                            </View>
                        </Pressable>
                    <View style={styles.cardName}>
                        <Text style={styles.cardText}>{Name}</Text>
                    </View>
                </ImageBackground>
                </Pressable>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
    },
    favorite: {
        alignSelf: 'flex-end',
        margin:8,
    },
    cardBackground: {
        height: 170,
        width: 180,
        marginLeft: 12,
        marginBottom: 30,
        elevation:15,
        borderWidth:1,
        borderColor:'gray',
    },
    cardName: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        marginTop: 85,
    },
    cardText:{
        fontSize:18,
        alignSelf:'center',
        color:'white',
        marginTop:15,
    }
})



export default Cards; 
