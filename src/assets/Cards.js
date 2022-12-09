import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
} from 'react-native';
import { ScreenName } from '../../route/ScreenName';
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import Favorite from '../Componants/Favorite';

const Cards = (props) => {
    const { Name, image, title } = props;
    const navigation = useNavigation()
    return (
        <View >
            <Pressable style={styles.card} onPress={() => {
                navigation.navigate(ScreenName.Info, { name: Name });
            }}>
                <Image style={styles.imgCard} source={image} />
                <View style={styles.nameCard}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                        <Text style={styles.text}>{Name}</Text>
                            <Icon
                                style={styles.favorite}
                                name='heart-o'
                                color="white"
                                size={20} />
                    </View>
                    <Ionicons style={styles.iconStyle}
                        name="water-outline"
                        color="white"
                        size={18} />
                    <Icon style={styles.iconStyle}
                        name='thermometer-3'
                        color="white"
                        size={18} />
                    <Ionicons style={styles.iconStyle}
                        name='leaf-outline'
                        color="white"
                        size={18} />

                </View>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        // elevation: 100,
        // shadowColor:'#000',
        // shadowOffset:{
        //     width:0,
        //     height:2,
        // },
        // shadowOpacity:10,
        // shadowRadius:10,
    },
    imgCard: {
        width: 150,
        height: 150,
        borderRadius: 30,
        marginRight: 10,
        marginBottom: 15,
    },
    nameCard: {
        width: 235,
        height: 150,
        paddingTop: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        marginBottom: 10,
        borderRadius: 20,
        elevation: 30,
    },
    text: {
        color: 'white',
        fontSize: 15,
        // paddingBottom: 10,
        marginRight: 90,
        marginLeft: 10,
    },
    iconStyle: {
        marginBottom: 10,
        marginTop: 8,
        flexDirection: 'row',
        marginLeft: 10,
    },
    iconView: {
        flexDirection: 'column',
    },
    favorite: {
        alignSelf: 'flex-end',
        // paddingRight:10,
        marginRight: 10,
        marginTop: 5,
    }
})



export default Cards; 
