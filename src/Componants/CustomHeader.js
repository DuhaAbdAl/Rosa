import {StyleSheet, Text, View, Pressable, Image, StatusBar, ScrollView } from "react-native";
import React from "react";
import { Window_Hight } from "../assets/Sizes";
import { SafeAreaView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native";


const CustomHeader = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView>
                <View style={styles.upperHeaderPlaceHolder} />
            </SafeAreaView>
            <SafeAreaView style={styles.header}>
                <View style={styles.upperHeader}>
                    <View style={styles.searchContainer}>
                        <AntDesign style={styles.searchIcon}
                            name='search1'
                            color='white' />
                        <TextInput
                            placeholder="Search"
                            placeholderTextColor={'rgba(255,255,255,0.8)'}
                            style={styles.searchInput} />
                    </View>
                    <Image source={require('../assets/images/profile.jpeg')}
                        style={styles.profile} />
                </View>
                <View style={styles.lowerHeader}>
                    <View style={styles.feature}>
                        <Ionicons
                            name="water-outline"
                           style={styles.featureIcons} />
                            <Text style={styles.featureText}>Water</Text>
                        <FontAwesome
                            name='thermometer-3'
                            style={styles.featureIcons} /> 
                             <Text style={styles.featureText}>Tempreature</Text>
                        <Ionicons
                            name='leaf-outline'
                            style={styles.featureIcons} />
                            <Text style={styles.featureText}>Fertilizer</Text>
                    </View>
                </View>
            </SafeAreaView>
            <ScrollView>
                <View style={styles.paddingHeader} />
                <View style={styles.scrollViewcontainer} />

            </ScrollView>

        </View>
    )
};
const upperHeader_Hight = 40;
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
    },
    searchContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    searchIcon: {
        width: 16,
        height: 16,
        marginLeft: 8,
    },
    searchInput: {
        // position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(250,250,250,0.3)',
        color: 'white',
        borderRadius: 4,
        paddingVertical: 4,
        paddingLeft: 32,
    },
    profile: {
        width: 28,
        height: 26,
    },
    lowerHeader: {
        height: lowerHeader_Hight,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        paddingHorizontal:16,
    },
    feature:{
        alignItems:'center',
    },
    featureIcons:{
        width:32,
        height:32,
        color:"white"
    },
    featureText:{
        fontWeight:'bold',
        fontSize:12,
        lineHeight:14,
        color:'white',
        marginTop:12,
    },
    paddingHeader: {
        height: lowerHeader_Hight,
    },
    scrollViewcontainer: {
        height: Window_Hight * 2,
        backgroundColor: "white",
    }
})
export default CustomHeader;