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

const CategoryCard = (props) => {
    const { Name, Image } = props;
    const navigation = useNavigation()
    return (
        <View style={styles.card}>
            {/* <Pressable onPress={() => {
                    navigation.navigate(ScreenName.Types);
                }}>  
                
                <Image style={styles.img} source={Image} />
                <Text style={styles.text}>{Name}</Text>
                </Pressable> */}
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
        width: 250,
        height: 150,
        marginTop: 20,
        marginLeft: 80,
        marginRight: 50,
    },
    text: {
        color: '#567c12',
        margin: 10,
        marginLeft: 100,
    }
});



export default CategoryCard; 
