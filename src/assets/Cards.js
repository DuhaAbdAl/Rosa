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
    const { Name, image, favorates } = props;
    // const [favorite, setFavorite] = useState(false)
    const { favorite, setFavoratis } = useContext(RosaContext);
    const navigation = useNavigation();
    var favoritsFromStorage = favorates;


    const checkIfFavorate = () => {
        const isFav = favoritsFromStorage.find(item => item === Name)
        return !!isFav;
    }

    const OnClickFavorite = async () => {
        if (!favorite) {
            !checkIfFavorate() &&
                favoritsFromStorage.push(Name)
        } else {
            favoritsFromStorage = favoritsFromStorage.filter(fav => fav !== Name);
        }

        AsyncStorage.setItem('favorite', JSON.stringify(favoritsFromStorage));

        setFavorite(!favorite)
    }

    useEffect(() => {
        // setFavoratis(checkIfFavorate())
    }, [favorates])


    return (
        <View >
            <View style={{borderRadius:30}}>
            <Pressable style={styles.card} onPress={() => {
                navigation.navigate(ScreenName.Info, { name: Name });
            }}>
                <ImageBackground style={styles.cardBackground} source={image}>
                        <Pressable onPress={OnClickFavorite} >
                            <View>
                                <Icon
                                    style={styles.favorite}
                                    name={(favorite) ? "heart" : "heart-o"}
                                    color={(favorite) ? "red" : "white"}
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
    imgCard: {
        width: 150,
        height: 150,
        borderRadius: 30,
        marginRight: 10,
        marginBottom: 15,
    },
    nameCard: {
        width: 237,
        height: 150,
        paddingTop: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        marginBottom: 10,
        borderRadius: 20,
        elevation: 30,
    },
    text: {
        color: 'white',
        fontSize: 15,
        marginRight: 90,
        marginLeft: 10,
    },
    iconStyle: {
        marginBottom: 10,
        marginTop: 7,
        flexDirection: 'row',
        marginLeft: 10,
    },
    iconView: {
        flexDirection: 'row',
    },
    iconText: {
        marginTop: 7,
        marginLeft: 5,
        color: 'white',
    },
    favorite: {
        alignSelf: 'flex-end',
        margin:8,
    },
    cardBackground: {
        height: 170,
        width: 180,
        marginLeft: 12,
        borderRadius: 20,
        marginBottom: 30,
        
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
