import { StyleSheet, View, TouchableOpacity, Image, Text, ImageBackground, ScrollView, Pressable } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Schedule from "../Componants/Schedule";
import Countdown from "../Componants/Timer";
import CountDownCircle from "../Componants/CountDownCircle";


const UserProfilePage = () => {
    const navigation = useNavigation();
    const drawerNavigation = navigation.getParent('LeftDrawer');
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={styles.imageBackground} source={require('../assets/images/drawer1.jpeg')}>
                <View style={{ flexDirection: 'row' }}>
                    <Pressable onPress={() => {
                        navigation.goBack();
                    }}>
                        <Ionicons
                            style={styles.backArrow}
                            name="chevron-back"
                            color={'white'}
                            size={30} />
                    </Pressable>
                    <TouchableOpacity onPress={() => {
                        drawerNavigation?.openDrawer();
                    }}>
                        <Ionicons
                            style={styles.menu}
                            name="menu-sharp"
                            color={'white'}
                            size={30} />
                    </TouchableOpacity>
                </View>
                <Image source={require('../assets/images/profile.jpeg')} style={styles.Profileimg} />
                <Text style={styles.usertext}>User</Text>
            </ImageBackground>

            <View>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialCommunityIcons
                        style={styles.flowerIcon}
                        name="flower-tulip"
                        size={30}
                        color='green'
                    />
                    <Text style={styles.titleText}>My Plants :</Text>
                </View>
                <ScrollView horizontal={true} style={styles.cardImg}>
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

                </ScrollView>
            </View>
            <View >
                <View style={styles.alerts}>
                    <FontAwesome
                        style={styles.bellIcon}
                        name="bell"
                        color={'green'}
                        size={25} />
                    <Text style={styles.bellText}>Alerts :</Text>
                </View>
                {/* <CountDownCircle/> */}
                <View>
                    {/* <ScrollView horizontal={true}>
                        

                        <View style={styles.CountConainer}>
                            <View style={styles.CountdownWater}>
                                <MaterialCommunityIcons
                                    style={styles.icon}
                                    name="watering-can"
                                    color={"blue"}
                                    size={33} />
                                <Text style={styles.countTextWater}>3 days</Text>
                            </View>
                                <Text style={styles.nextText}>Lilum</Text>
                            <View style={styles.CountdownFert}>
                                <FontAwesome5
                                    style={styles.icon}
                                    name="seedling"
                                    color={"green"}
                                    size={28} />
                                <Text style={styles.countTextFert}>6 days</Text>
                            </View>
                        </View>


                        <View style={styles.CountConainer}>
                            <View style={styles.CountdownWater}>
                                <MaterialCommunityIcons
                                    style={styles.icon}
                                    name="watering-can"
                                    color={"blue"}
                                    size={33} />
                                <Text style={styles.countTextWater}>3 days</Text>
                            </View>
                        <Text style={styles.nextText}>Iris</Text>
                            <View style={styles.CountdownFert}>
                                <FontAwesome5
                                    style={styles.icon}
                                    name="seedling"
                                    color={"green"}
                                    size={28} />
                                <Text style={styles.countTextFert}>4 days</Text>
                            </View>
                        </View>
                    </ScrollView> */}
                    
                </View>
                {/* <View style={styles.calendar}>
                <Schedule/>
                {Countdown()}
            </View> */}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: 250,
    },
    backArrow: {
        margin: 10,
    },
    menu: {
        marginLeft: 315,
        margin: 10,
    },
    Profileimg: {
        height: 150,
        width: 160,
        borderRadius: 20,
        marginBottom: 10,
        alignSelf: 'center'
    },
    usertext: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Roboto-Medium',
        alignSelf: 'center'
    },
    calendar: {
        flex: 1,
    },
    CountConainer: {
        flexDirection: 'row',
        paddingBottom: 15,
        justifyContent: 'space-between',
        // padding:20,
        // paddingLeft:20,
    },
    CountdownWater: {
        borderRadius: 100,
        borderWidth: 8,
        height: 150,
        width: 150,
        marginTop: 60,
        alignSelf: 'flex-end',
        marginRight: 10,
        borderRightColor: '#3f54be',
        borderBottomColor: '#3f54be',
        transform: [{ rotate: '90deg' }],
        marginLeft: 10
    },
    CountdownFert: {
        borderRadius: 100,
        borderWidth: 8,
        height: 150,
        width: 150,
        marginTop: 60,
        alignSelf: 'flex-start',
        borderRightColor: 'green',
        borderBottomColor: 'green',
        transform: [{ rotate: '90deg' }],
        marginRight: 100,

    },
    countTextWater: {
        color: '#3f54be',
        alignSelf: 'center',
        marginTop: 0,
        marginBottom: 100,
        fontSize: 22,
        transform: [{ rotate: '-90deg' }],
    },
    countTextFert: {
        color: 'green',
        alignSelf: 'center',
        marginTop: 0,
        marginBottom: 100,
        fontSize: 22,
        transform: [{ rotate: '-90deg' }]
    },
    icon: {
        transform: [{ rotate: '-90deg' }],
        marginRight: 50,
        marginTop: 25,
    },
    titleText: {
        color: '#0d5b28',
        fontSize: 20,
        fontStyle: 'italic',
        margin: 10,
        fontWeight: 'bold',
    },
    img: {
        width: 150,
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
    bellIcon: {
        alignSelf: 'flex-start',
        marginTop: 10,
        marginLeft: 10,
    },
    bellText: {
        color: '#0d5b28',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10,
    },
    alerts: {
        flexDirection: 'row',
        borderTopWidth: 2,
        marginTop: 20,
    },
    flowerIcon: {
        marginTop: 10,
        marginLeft: 10,
    },
    nextText: {
        color: "green",
        fontSize: 25,
        alignSelf: 'flex-start'
        // margin: 10,
        // marginLeft:90,
    },

});
export default UserProfilePage;