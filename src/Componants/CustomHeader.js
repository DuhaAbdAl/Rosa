import { StyleSheet, Text, View, Pressable, Image, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Window_Hight } from "../assets/Sizes";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native";
import { useRef } from "react";
import { Animated } from "react-native";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const CustomHeader = (props) => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    const searchInputAnimation ={
        transform:[
            {
                scaleX: animatedValue.interpolate({
                    inputRange: [0, 50],
                    outputRange:[1, 0],
                    extrapolate:'clamp',
                }),
            },
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 25],
                    outputRange:[0, -100],
                    extrapolate:'clamp',
                }),
            },
        ],
            opacity: animatedValue.interpolate({
                inputRange: [0, 25],
                outputRange:[1, 0],
                extrapolate:'clamp',
            })
        
    }
    const featureTextAnimation ={
        transform:[
            {
                scale: animatedValue.interpolate({
                    inputRange: [0, 30],
                    outputRange:[1, 0],
                    extrapolate:'clamp',
                }),
            },
        ],
            opacity: animatedValue.interpolate({
                inputRange: [0, 30],
                outputRange:[1, 0],
                extrapolate:'clamp',
            })
        
    }
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
                        props.navigation.goBack();
                    }} >
                    <Ionicons
                    name="chevron-back"
                    size={25}
                    color="white"
                    style={{ marginRight:10, marginTop:17 }}/>
                    </Pressable>
                    </View>
                    <View style={styles.searchContainer}>
                        <AntDesign style={styles.searchIcon}
                            name='search1'
                            color='white'
                            size={20} />
                        <AnimatedTextInput
                            placeholder="Search"
                            placeholderTextColor={'rgba(255,255,255,0.8)'}
                            style={[styles.searchInput, searchInputAnimation]} />
                    </View>
                    <TouchableOpacity onPress={() => {
                        props.navigation.openDrawer();
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
                        <Animated.Text style={styles.featureText}>Water</Animated.Text>
                        <FontAwesome
                            name='thermometer-3'
                            size={25}
                            style={styles.featureIcons} />
                        <Animated.Text style={styles.featureText}>Tempreature</Animated.Text>
                        <Ionicons
                            name='leaf-outline'
                            size={25}
                            style={styles.featureIcons} />
                        <Animated.Text style={styles.featureText}>Fertilizer</Animated.Text>
                    </View>
                </View>
            </View>
            <ScrollView 
            onScroll={e => {
                const offsetY = e.nativeEvent.contentOffset.y;
                animatedValue.setValue(offsetY);
            }}
            scrollEventThrottle={16}>
                <View style={styles.paddingHeader} />
                <View style={styles.scrollViewcontainer} />

            </ScrollView>

        </View>
    )
};
const upperHeader_Hight = 75;
const lowerHeader_Hight = 96;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperHeaderPlaceHolder: {
        height: upperHeader_Hight,
    },
    header: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(250,250,250,0.2)'
    },
    upperHeader: {
        height: upperHeader_Hight,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: "green",
    },
    searchContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        // alignItems: 'center',
        // backgroundColor:'white',
    },
    searchIcon: {
        marginLeft: 7,
        marginTop: 24,
    },
    searchInput: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(250,250,250,0.3)',
        color: 'white',
        borderRadius: 4,
        paddingVertical: 4,
        paddingLeft: 32,
        // marginLeft:20,
        marginTop:17,
    },
    profile: {
        width: 38,
        height: 38,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,
        margin: 10,
        marginLeft: 60,
        marginTop: 30,
    },
    lowerHeader: {
        height: lowerHeader_Hight,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        // backgroundColor:'white',
    },
    feature: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    featureIcons: {
        color: "white",
        marginLeft: 50,
    },
    // featureTextContainer: {
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     flexDirection: 'row',
    //     // marginLeft:30,
    // },
    featureText: {
        fontWeight: 'bold',
        fontSize: 13.5,
        color: 'white',
        marginTop: 65,
        // marginRight: 30,
        // padding:20,
    },
    paddingHeader: {
        height: lowerHeader_Hight,
    },
    scrollViewcontainer: {
        height: Window_Hight * 2,
        backgroundColor: "white",
    },
})
export default CustomHeader;