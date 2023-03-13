import { StyleSheet, View, Pressable, Image, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
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
            <TouchableOpacity onPress={() => {
                drawerNavigation?.openDrawer();
            }}>
                 <Entypo
                        name="menu"
                        style={styles.icon}
                    />
                {/* <Image source={require('../assets/images/profile.jpeg')}
                    style={styles.profile} /> */}
            </TouchableOpacity>
                    {/* <SearchBar /> */}
        </View>
    )
};
const CustomHeader = () => {
    return (
        // #8db9b2
        <View style={{ backgroundColor: "transparent" }}>

            <UpperHeader />

        </View>

        // <ImageBackground source={require('../assets/images/drawer1.jpeg')}>
        //  </ImageBackground>

    )
};

const upperHeader_Hight = 70;
const styles = StyleSheet.create({
    upperHeader: {
        height: upperHeader_Hight,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent:"space-between"
    },
    profile: {
        width: 43,
        height: 43,
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
    },
    icon: {
        fontSize: 30,
        color: "white",
    },
})
export default CustomHeader;