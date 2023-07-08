import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/AntDesign";
import { ScreenName } from "../../route/ScreenName";

const IconContainer = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.iconContainer}>
            <Pressable onPress={() => {
                navigation.navigate(ScreenName.HomePage)
            }}>
                <Icon style={styles.icons}
                    name='home' />
            </Pressable>
            <Pressable onPress={() => {
                navigation.navigate(ScreenName.Favorite);
            }}>
                <Icon style={styles.icons}
                    name='hearto' />
            </Pressable>
            <Pressable onPress={() => {
                navigation.navigate(ScreenName.AddPlants);
            }}>
                <Icon
                    style={styles.icons}
                    name="pluscircleo" />
            </Pressable>
            <Pressable onPress={() => {
                navigation.navigate(ScreenName.SearchHome);
            }}>
                <Icon style={styles.icons}
                    name='search1' />
            </Pressable>
            <Pressable onPress={() => {
                navigation.navigate(ScreenName.UserProfilePage);
            }}>
                <Icon style={styles.icons}
                    name='user' />
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    iconContainer: {
        width: '100%',
        height: 65,
        backgroundColor: '#28463e',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 70,
    },
    icons: {
        padding: 5,
        margin: 15,
        marginRight: 35,
        marginBottom: 5,
        fontSize: 28,
        color: "white",
    },
})
export default IconContainer;