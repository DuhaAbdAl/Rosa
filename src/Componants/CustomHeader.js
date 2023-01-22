import { StyleSheet, Text, View, Pressable, Image, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Window_Hight } from "../assets/Sizes";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native";
import { useRef } from "react";
import { Animated } from "react-native";
import { ScreenName } from "../../route/ScreenName";
import { useNavigation } from "@react-navigation/native";


const CustomHeader = (props) => {
    const navigation = useNavigation();
    const drawerNavigation = navigation.getParent('LeftDrawer');
    const animatedValue = useRef(new Animated.Value(0)).current;

    // const searchInputAnimation = {
    //     transform: [
    //         {
    //             scaleX: animatedValue.interpolate({
    //                 inputRange: [0, 50],
    //                 outputRange: [1, 0],
    //                 extrapolate: 'clamp',
    //             }),
    //         },
    //         {
    //             translateX: animatedValue.interpolate({
    //                 inputRange: [0, 25],
    //                 outputRange: [0, -100],
    //                 extrapolate: 'clamp',
    //             }),
    //         },
    //     ],
    //     opacity: animatedValue.interpolate({
    //         inputRange: [0, 25],
    //         outputRange: [1, 0],
    //         extrapolate: 'clamp',
    //     })

    // }
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View>
                <View style={styles.upperHeaderPlaceHolder} />
            </View>
            <View style={styles.header}>
                <View style={styles.upperHeader}>
                    <View>
                        <Pressable onPress={() => {
                            navigation.goBack();
                        }}>
                            <Ionicons
                                name="chevron-back"
                                size={25}
                                color="white"
                                style={{ marginRight: 10, marginTop: 8 }} />
                        </Pressable>
                    </View>
                    <View style={styles.searchContainer}>
                        <AntDesign style={styles.searchIcon}
                            name='search1'
                            color='white'
                            size={20} />
                        <TextInput
                            placeholder="Search"
                            placeholderTextColor={'rgba(255,255,255,0.8)'}
                            style={styles.searchInput} />
                    </View>
                    <TouchableOpacity onPress={() => {
                        drawerNavigation?.openDrawer();
                    }}>
                        <Image source={require('../assets/images/profile.jpeg')}
                            style={styles.profile} />
                    </TouchableOpacity>
                </View>
                <View style={styles.lowerHeader}>
                    <View style={styles.feature}>
                        <Ionicons
                            name="water-outline"
                            size={25}
                            style={styles.featureIcons} />

                        <Text style={styles.featureText}>Water</Text>

                    </View>
                    <View style={styles.feature}>
                        <FontAwesome
                            name='thermometer-3'
                            size={25}
                            style={styles.featureIcons} />

                        <Text style={styles.featureText}>Tempreature</Text>

                    </View>
                    <View style={styles.feature}>
                        <Ionicons
                            name='leaf-outline'
                            size={25}
                            style={styles.featureIcons} />

                        <Text style={styles.featureText}>Fertilizer</Text>
                    </View>
                </View>
            </View>
        </View>
    )
};

const upperHeader_Hight = 75;
const lowerHeader_Hight = 96;
const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    // upperHeaderPlaceHolder: {
    //     height: upperHeader_Hight,
    // },
    header: {
        // height:170, 
        // position:'absolute',
        // top:0,
        // left:0,
        // right:0,
    },
    upperHeader: {
        // position:'absolute',
        // top:0,
        // left:0,
        // right:0,
        height: upperHeader_Hight,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: 'rgba(10, 10, 10, 0.65)'
    },
    searchContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    searchIcon: {
        marginLeft: 7,
        marginTop: 19,
        position:'absolute',
    },
    searchInput: {
        // position: 'absolute',
        marginTop:12,
        width: '100%',
        backgroundColor: 'rgba(250,250,250,0.3)',
        color: 'white',
        borderRadius: 4,
        paddingVertical: 4,
        paddingLeft: 32,
        // zIndex:9999 (ios)
    },
    profile: {
        width: 38,
        height: 38,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,
        margin: 10,
        marginLeft: 60,
        marginTop: 15,
    },
    lowerHeader: {
        // position:'absolute',
        // top:0,
        // left:0,
        // right:0,
        height: lowerHeader_Hight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 8,
        backgroundColor: 'rgba(10, 10, 10, 0.70)'
    },
    feature: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    featureIcons: {
        color: "white",
        alignSelf: 'center',
        marginLeft: 20,
    },
    featureText: {
        fontWeight: 'bold',
        fontSize: 13.5,
        color: 'white',
        marginTop: 10,
        marginLeft: 20,
    },
    paddingHeader: {
        // height: lowerHeader_Hight,
    },
    scrollViewcontainer: {
        height: Window_Hight * 2,
        backgroundColor: "white",
    },
})
export default CustomHeader;