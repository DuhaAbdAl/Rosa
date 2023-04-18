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
       <View>
        
       </View>
    )
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        backgroundColor: '#33691e',
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
        justifyContent: 'space-between',
        backgroundColor:'rgba(52,52,52,0.5)',
        height:65
    },
});
export default Favorite;