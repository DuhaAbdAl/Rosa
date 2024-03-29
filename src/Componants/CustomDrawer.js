import React from "react";
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScreenName } from "../../route/ScreenName";
import MainStack from "../../route/Stack";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";



const CustomDrawer = (props) => {
    const navigation = useNavigation();

    const params = {
        HomePage: {
            name: "MainStack",
            component: MainStack,
        },

    }


    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={{ backgroundColor: 'black' }}>
                <ImageBackground source={require('../assets/images/drawer1.jpeg')} style={{ padding: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate(ScreenName.EditProfile)}>
                        <MaterialCommunityIcons
                            name="account-check"
                            size={23}
                            style={styles.editIcon} />
                    </TouchableOpacity>
                    <Image source={require('../assets/images/profile.jpeg')} style={styles.img} />
                    <Text style={styles.usertext}>User</Text>
                </ImageBackground>
                <View style={styles.drwerlist}>
                    <DrawerItemList {...props} />
                    {/* <DrawerItem
                        label={'Home'}
                        onPress={navigation.navigate(ScreenName.HomePage)}
                        icon={() => (<FontAwesome name="home" size={22} color={'black'} />)
                        } /> */}
                </View>
            </DrawerContentScrollView>
            <View style={styles.margin}>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={styles.outIcon}>
                        <Icon
                            name='logout'
                            size={18}
                            color='#333' />
                        <Text style={styles.outText}> Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    img: {
        height: 100,
        width: 80,
        borderRadius: 40,
        marginBottom: 20,
    },
    usertext: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Roboto-Medium',
    },
    drwerlist: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    },
    margin: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    outText: {
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        marginLeft: 5,
        color: '#333',
    },
    outIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    editIcon: {
        alignSelf: 'flex-end',
        color: 'white',
    }

})
export default CustomDrawer;