import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    TouchableOpacity,
} from 'react-native';
import { ScreenName } from '../../route/ScreenName';
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import Favorite from '../Componants/Favorite';
import { data } from "../mokData/data";
import Types from '../screens/Types';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Cards = (props) => {
    const { Name, image, waterIcon, tempIcon, fertIcon, item , isFavorate } = props;
    const [favorite, setFavorite] = useState(false)
    const navigation = useNavigation()


    const OnClickFavorite = async () => {

        var favoritsFromStorage = await AsyncStorage.getItem('favorite');
        favoritsFromStorage = favoritsFromStorage ? await JSON.parse(favoritsFromStorage) : []

        if (!favorite) {
            !favoritsFromStorage?.find(fav => fav.title === Name) &&
                favoritsFromStorage.push(item)
        } else {
            favoritsFromStorage = favoritsFromStorage.filter(fav => fav.title !== Name);
        }

        AsyncStorage.setItem('favorite' , JSON.stringify(favoritsFromStorage));

        setFavorite(!favorite)
    }

    return (
        <View >
            <Pressable style={styles.card} onPress={() => {
                navigation.navigate(ScreenName.Info, { name: Name });
            }}>
                <Image style={styles.imgCard} source={image} />
                <View style={styles.nameCard}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                        <Text style={styles.text}>{Name}</Text>
                        <Pressable onPress={() => OnClickFavorite()} >
                            <View>
                                <Icon
                                    style={styles.favorite}
                                    name={(favorite == true) ? "heart" : "heart-o"}
                                    color={(favorite == true) ? "red" : "white"}
                                    size={20} />
                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.iconView}>
                        <Ionicons style={styles.iconStyle}
                            name="water-outline"
                            color="white"
                            size={18} />
                        <Text style={styles.iconText}> {waterIcon} </Text>
                    </View>
                    <View style={styles.iconView}>
                        <Icon style={styles.iconStyle}
                            name='thermometer-3'
                            color="white"
                            size={18} />
                        <Text style={styles.iconText}> {tempIcon} </Text>
                    </View>
                    <View style={styles.iconView}>
                        <Ionicons style={styles.iconStyle}
                            name='leaf-outline'
                            color="white"
                            size={18} />
                        <Text style={styles.iconText}> {fertIcon} </Text>
                    </View>
                </View>
            </Pressable>
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
        marginRight: 10,
        marginTop: 5,

    }
})



export default Cards; 
