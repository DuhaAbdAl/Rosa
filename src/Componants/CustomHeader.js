import { StyleSheet, Text, View, Pressable, Image, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Window_Hight } from "../assets/Sizes";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { TextInput } from "react-native";
import { useRef } from "react";
import { Animated } from "react-native";
import { ScreenName } from "../../route/ScreenName";
import { useNavigation } from "@react-navigation/native";
import { Keyboard } from "react-native";
import SearchList from "./List";
import { useState } from "react";
import { data } from "../mokData/data";
import { getFeatureViewAnimation } from "../assets/Utils";
import RosaContext from "../../Store/RosaContext";
import { useContext } from "react";


const scrollY = new Animated.Value(0)
const diffClamp = Animated.diffClamp(scrollY, 0, 90)
const translateY = diffClamp.interpolate({
    inputRange: [0, 90],
    outputRange: [0, -90]
})


const UpperHeader = (props) => {
    const { clicked, setClicked } = props;
    const navigation = useNavigation();
    const drawerNavigation = navigation.getParent('LeftDrawer');
    const {input, setInput} = useContext(RosaContext);

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
                        style={{ marginRight: 10, marginTop: 8 }} />
                </Pressable>
            </View>
            <View style={styles.searchContainer}>
                <View
                    style={
                        clicked
                            ? styles.searchBarClicked : styles.searchBarUnclicked

                    }
                >
                    <AntDesign style={styles.searchIcon}
                        name='search1'
                        color='white'
                        size={20} />
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor={'rgba(255,255,255,0.8)'}
                        value={input}
                        onChangeText={(text) => setInput(text)}
                        onFocus={() => {
                            setClicked?.(true);
                        }}
                        style={styles.searchInput} />
                    {clicked && (
                        <Entypo name="cross" size={20} color="white" onPress={() => {
                            setSearchPhrase("") && Keyboard.dismiss()
                        }} />
                    )}
                    <Entypo
                    name="chevron-small-right"
                    color={'white'}
                    size={45}
                    style={{marginTop:8}}
                        />
                </View>
            </View>
            <View style={styles.listContainer}>
                <SearchList data={data} input={input} setInput={setInput} />
            </View>
            <TouchableOpacity onPress={() => {
                drawerNavigation?.openDrawer();
            }}>
                <Image source={require('../assets/images/profile.jpeg')}
                    style={styles.profile} />
            </TouchableOpacity>
        </View>
    )
};

const LowerHeader = () => {
    return (
        <Animated.View
            style={{
                transform: [
                    { translateY: translateY }
                ],
            }}
        >
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
                        name='leaf-sharp'
                        size={25}
                        style={styles.featureIcons} />
                    <Text style={styles.featureText}>Fertilizer</Text>
                </View>
            </View>
            <ScrollView
                onScroll={(e) => {
                    scrollY.setValue(e.nativeEvent.contentOffset.y)
                }}>
            </ScrollView>
        </Animated.View>
    )
}
const CustomHeader = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            {/* <View>
                <View style={styles.upperHeaderPlaceholder} />
            </View> */}
            <UpperHeader />
            {/* <LowerHeader /> */}

        </View>

    )
};

const UPPER_HEADER_PADDING_TOP = 1;
const upperHeader_Hight = 95;
const lowerHeader_Hight = 96;
const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    // upperHeaderPlaceHolder: {
    //     height: upperHeader_Hight,
    // },
    header: {
        width: '100%',
        height: 165,
    },
    upperHeaderPlaceholder: {
        height: upperHeader_Hight,
        // paddingTop: UPPER_HEADER_PADDING_TOP,
    },
    upperHeader: {
        // paddingTop: UPPER_HEADER_PADDING_TOP,
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
    searchBarUnclicked: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    searchBarClicked: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    searchIcon: {
        marginLeft: 7,
        marginTop: 19,
        position: 'absolute',
    },
    searchInput: {
        marginTop: 12,
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
        // marginTop:10,
        width: '100%',
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
        height: lowerHeader_Hight,
    },
    scrollViewcontainer: {
        height: 1000,//Window_Hight * 2,
        backgroundColor: "white",
    },
    listContainer: {

    }
})
export default CustomHeader;