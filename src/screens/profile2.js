import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";


const EditProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userInfoSecthion}>
                <View>
                    <Avatar.Image
                        style={styles.profileImage}
                        source={require('../assets/images/profile.jpeg')}
                        size={80}
                    />
                </View>
                <View>
                    <Title style={styles.title}>User</Title>
                    <Caption style={styles.caption}>@User</Caption>
                </View>

            </View>
            <View style={styles.userInfoSecthion}>
                <View style={styles.row}>
                    <MaterialCommunityIcons
                        name="map-marker-radius"
                        color={'#777777'}
                        size={20} />
                    <Text style={{ color: '#777777', marginLeft: 20 }}>Israel</Text>
                </View>
            </View>
            <View style={styles.userInfoSecthion}>
                <View style={styles.row}>
                    <MaterialCommunityIcons
                        name="phone"
                        color={'#777777'}
                        size={20} />
                    <Text style={{ color: '#777777', marginLeft: 20 }}>052-2222222</Text>
                </View>
            </View>
            <View style={styles.userInfoSecthion}>
                <View style={styles.row}>
                    <MaterialCommunityIcons
                        name="email"
                        color={'#777777'}
                        size={20} />
                    <Text style={{ color: '#777777', marginLeft: 20 }}>user@email.com</Text>
                </View>
            </View>
            <View style={{ borderWidth: 0.5, borderColor: '#777777' }}></View>
            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons
                            name="heart-outline"
                            color={'#FF6347'}
                            size={25} />
                        <Text style={styles.menuItemText}>My Favorites</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons
                            name="share-outline"
                            color={'#333'}
                            size={25} />
                        <Text style={styles.menuItemText}>Tell your Friends</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons
                            name="account-check-outline"
                            color={'blue'}
                            size={25} />
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Ionicons
                            name="settings-outline"
                            color={'#333'}
                            size={25} />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileImage: {
        marginTop: 15,
    },
    userInfoSecthion: {
        paddingHorizontal: 30,
        marginBottom: 25,
        marginLeft:8,
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft:6,
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
        marginLeft:5,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidht: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 15,
        marginLeft: 10,
    },
    menuItem: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row'

    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
    }
});
export default EditProfile;