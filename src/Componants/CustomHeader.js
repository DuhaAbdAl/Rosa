import { StyleSheet, View, Pressable, Image, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScreenName } from "../../route/ScreenName";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "./SearchBar";


const UpperHeader = (props) => {
    const navigation = useNavigation();
    const drawerNavigation = navigation.getParent('LeftDrawer');

    return (
        <View style={styles.upperHeader}>
            <View>
                <Pressable onPress={() => {
                    navigation.goBack();
                }}>
                    <Ionicons
                        name="chevron-back"
                        size={25}
                        color="white"
                        style={styles.BackArrow} />
                </Pressable>
            </View>
            <SearchBar />
            <TouchableOpacity onPress={() => {
                drawerNavigation?.openDrawer();
            }}>
                <Image source={require('../assets/images/profile.jpeg')}
                    style={styles.profile} />
            </TouchableOpacity>
        </View>
    )
};
const CustomHeader = () => {
    return (
        <ImageBackground source={require('../assets/images/Types4.jpeg')}>

            <UpperHeader />

        </ImageBackground>

    )
};

const upperHeader_Hight = 100;
const styles = StyleSheet.create({
    upperHeader: {
        height: upperHeader_Hight,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    profile: {
        width: 38,
        height: 38,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,
        margin: 10,
        marginLeft: 40,
        marginTop: 15,
    },
    BackArrow: {
        marginRight: 10,
        marginTop: 8,
    }
})
export default CustomHeader;