import { StyleSheet, Text, View, TouchableOpacity, Pressable, ImageBackground } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

// const checkIsFavorate = (title) => {
//     const [favList, setFavList] = useState([])
//     // const isFav = favList.find(item => item.title === title)
//     return !!isFav;
// }

const Favorite = (props) => {
    const navigation = useNavigation();
    const drawerNavigation = navigation.getParent('LeftDrawer');
    return (
        <ImageBackground style={styles.image} source={require('../assets/images/info2.jpeg')}>
            <View style={styles.header}>
                <Pressable onPress={() => {
                    navigation.goBack();
                }}>
                    <Ionicons
                        name="chevron-back"
                        size={30}
                        color="white"
                        style={styles.icon} />
                </Pressable>
                <TouchableOpacity onPress={() => {
                    drawerNavigation?.openDrawer();
                }}>
                    <Entypo
                        name="menu"
                        color={'white'}
                        size={30}
                        style={styles.menu}
                    />
                </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
                <ImageBackground source={require('../assets/images/LilyBackground2.jpeg')} style={styles.img}>
                    <View style={styles.cardName}>
                        <Text style={styles.cardText}>Lilum</Text>
                    </View>
                </ImageBackground>
                <ImageBackground source={require('../assets/images/BleedingHeartBackground.jpeg')} style={styles.img}>
                    <View style={styles.cardName}>
                        <Text style={styles.cardText}>Bleeding Heart</Text>
                    </View>
                </ImageBackground>

                <ImageBackground source={require('../assets/images/MagnoliaBackground.jpeg')} style={styles.img}>
                    <View style={styles.cardName}>
                        <Text style={styles.cardText}>Magnolia</Text>
                    </View>
                </ImageBackground>
                <ImageBackground source={require('../assets/images/IrisBackground.jpeg')} style={styles.img}>
                    <View style={styles.cardName}>
                        <Text style={styles.cardText}>Iris</Text>
                    </View>
                </ImageBackground>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        
    },
    img: {
        width: 250,
        height: 150,
        margin: 15,
    },
    cardName: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        marginTop: 100,
    },
    cardText: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'white',
        marginTop: 15,
    },
    icon: {
        marginLeft: 15,
        marginTop: 20,
    },
    menu: {
        margin: 10,
        marginTop: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});
export default Favorite;