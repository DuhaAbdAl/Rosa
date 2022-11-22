import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    TextInput,
    FlatList,
} from 'react-native';
import { ScreenName } from '../../route/ScreenName';

const Cards = (props) => {
    const { Name, image } = props;
    const navigation = useNavigation()
    return (
        <View style={styles.card}>
            <Pressable onPress={() => {
                    navigation.navigate(ScreenName.Info , {data:{name:Name}});
                }}>
                
                <Image style={styles.img} source={image} />
                <Text style={styles.text}>{Name}</Text>
                </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 200,
        height: 150,
        marginTop: 20,
    },
    text: {
        color: '#567c12',
        margin: 10,
    }
})



export default Cards; 
