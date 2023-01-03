import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "react-native-vector-icons/Entypo";

const CustomDrawerButton = ({onPress}) => {
    return (
        <TouchableOpacity OnPress={onPress}>
            <View style={styles.button}>
                <Entypo
                    name="menu"
                    color="white"
                    size={18}
                />
            </View>

        </TouchableOpacity>

    )
};
const styles = StyleSheet.create({
    button: {
        width: 100,
        alignSelf: 'flex-start',
        borderWidth: 2,
        borderRadius: 70,
        borderColor: '#000',
        padding: 15,
        margin: 20,
        backgroundColor: 'rgba(10, 10, 10, 0.60)',
    },

});
export default CustomDrawerButton;
