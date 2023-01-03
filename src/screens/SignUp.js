import React from "react";
import { Component } from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground, Pressable } from "react-native";
import { useState } from "react";
import { BlurView } from "@react-native-community/blur";
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from "../Componants/CustomButton";
import { ScreenName } from "../../route/ScreenName";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

const SignUp = (props) => {
    const { email, setEmail } = useState(email);
    const { password, setPassword } = useState(password);
    return (
        <ImageBackground style={styles.container} source={require('../assets/images/drawer3.jpeg')}>
            {/* <BlurView
                style={styles.blur}
                blurType="light"
                blurAmount={10}> */}
            <View style={styles.card}>
                <TextInput
                    placeholderTextColor={'#fff'}
                    style={styles.input}
                    placeholder="@User name"
                // onChangeText={(val) => setEmail(val)}
                />
                <TextInput
                    placeholderTextColor={'#fff'}
                    style={styles.input}
                    placeholder="example@gmail.com"
                // onChangeText={(val) => setEmail(val)}
                />
                <View style={styles.input}>
                    <TextInput
                        placeholderTextColor={'#fff'}
                        // style={styles.input}
                        secureTextEntry={true}
                        placeholder="**************"
                    // onChangeText={(val) => setPassword(val)}
                    />
                    <Ionicons
                        style={styles.passwerdIcon}
                        name="eye-off-outline"
                        size={24}
                        color='#fff'
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        placeholderTextColor={'#fff'}
                        // style={styles.input}
                        placeholder="confirm password"
                        secureTextEntry={true}
                    // onChangeText={(val) => setEmail(val)}
                    />
                    <Ionicons
                        style={styles.passwerdIcon}
                        name="eye-off-outline"
                        size={24}
                        color='#fff'
                    />
                </View>
                <CustomButton text='Sign Up'onPress={() => {
                        props.navigation.navigate(ScreenName.SignIn);
                    }}/>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.texeOr}>_____________or_____________</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon
                            style={styles.iconStyle}
                            name="facebook-square"
                            color={'#3681AB'}
                            size={40} />
                        <Icon
                            style={styles.iconStyle}
                            name="instagram"
                            color={'#d26a9d'}
                            size={40} />
                        <Icon
                            style={styles.iconStyle}
                            name="google"
                            color={'green'}
                            size={40} />
                    </View>
                </View>
                <View style={styles.uptext}>
                    <Text>already have an account ?</Text>
                    <Pressable onPress={() => {
                        props.navigation.navigate(ScreenName.SignIn);
                    }}>
                        <Text style={styles.pressText}> Sign In</Text>
                    </Pressable>
                </View>
            </View>
            {/* </BlurView> */}
        </ImageBackground>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 350,
        height: 700,
        alignSelf: 'center',
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        alignItems: 'center',
        justifyContent: 'center',

    },
    input: {
        width: 250,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#fff',
        padding: 8,
        margin: 20,
        flexDirection: 'row',
        alignContent: 'space-between',
    },
    blur: {
        width: 350,
        height: 400,
        alignSelf: 'center',
        borderRadius: 30,
        borderWidth: 1,
    },
    uptext: {
        flexDirection: 'row',
    },
    pressText: {
        color: '#2E8D36',
        fontSize: 15,
    },
    texeOr: {
        fontSize: 17,
        paddingBottom: 10,
    },
    iconStyle: {
        padding: 10,
    },
    passwerdIcon: {
        marginLeft: 70,
        marginTop: 10,
        marginBottom: 10,
        alignSelf:'flex-end'
    }


});
export default SignUp;