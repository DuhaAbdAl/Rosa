import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from 'react-native-animatable';
import { ScreenName } from "../../route/ScreenName";
import { useState } from "react";

const SignUp = ({ navigation }) => {
    const [signData, setSignData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        checkTextInputChange: false,
        secureTextEntry: true,
        ConfirmSecureTextEntry: true,
    });
    const textInputChange = (val) => {
        if (val.length != 0) {
            setSignData({
                ...signData,
                email: val,
                checkTextInputChange: true
            })
        } else {
            setSignData({
                ...signData,
                email: val,
                checkTextInputChange: false
            })
        }
    };
    const handlePasswordChange = (val) => {
        setSignData({
            ...signData,
            password: val
        })
    }
    const handleConfirmPasswordChange = (val) => {
        setSignData({
            ...signData,
            confirmPassword: val
        })
    }
    const updateSecureTextEntry = () => {
        setSignData({
            ...signData,
            secureTextEntry: !signData.secureTextEntry,

        })
    }
    const ConfirmUpdateSecureTextEntry = () => {
        setSignData({
            ...signData,
            ConfirmSecureTextEntry: !signData.ConfirmSecureTextEntry,

        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground style={styles.imageBackground} source={require('../assets/images/types2.jpeg')}>
                    <Text style={styles.textHeader}>Register now</Text>
                </ImageBackground>
            </View>
            <Animatable.View style={styles.footer}
                animation={'fadeInUpBig'}
            // duration={1}
            >
                <ScrollView>
                    <Text style={styles.textFooter}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color={'#05375a'}
                            size={20}
                        />
                        <TextInput
                            placeholder="Email"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                        />
                        {signData.checkTextInputChange ?
                            <Animatable.View
                                animation={'bounceIn'}>
                                <Feather
                                    name="check-circle"
                                    color={'green'}
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>
                    <View style={[styles.footer, { marginTop: 25, marginLeft: -18 }]}>
                        <Text style={styles.textFooter}>Password</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color={'#05375a'}
                                size={20}
                            />
                            <TextInput
                                placeholder="*********"
                                secureTextEntry={signData.secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => handlePasswordChange(val)}
                            />
                            <TouchableOpacity onPress={updateSecureTextEntry}>
                                {signData.secureTextEntry ?
                                    <Feather
                                        name="eye-off"
                                        color={'gray'}
                                        size={20}
                                    />
                                    :
                                    <Feather
                                        name="eye"
                                        color={'gray'}
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.footer, { marginTop: 25, marginLeft: -18, marginRight: -15 }]}>
                            <Text style={styles.textFooter}>Confirm Password</Text>
                            <View style={styles.action}>
                                <FontAwesome
                                    name="user-o"
                                    color={'#05375a'}
                                    size={20}
                                />
                                <TextInput
                                    placeholder="*********"
                                    secureTextEntry={signData.ConfirmSecureTextEntry ? true : false}
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                                />
                                <TouchableOpacity onPress={ConfirmUpdateSecureTextEntry}>
                                    {signData.ConfirmSecureTextEntry ?
                                        <Feather
                                            name="eye-off"
                                            color={'gray'}
                                            size={20}
                                        />
                                        :
                                        <Feather
                                            name="eye"
                                            color={'gray'}
                                            size={20}
                                        />
                                    }
                                </TouchableOpacity>
                            </View>
                            <View style={styles.button}>
                                <TouchableOpacity >
                                    <LinearGradient
                                        colors={['#08d4c4', '#01ab9d']}
                                        style={styles.signIn}>
                                        <Text style={styles.textSign}>sign Up</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate(ScreenName.SignIn)}
                                    style={styles.signUp}>
                                    <Text style={styles.textSignUp}>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    textHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 20
    },
    textFooter: {
        color: "#05375a",
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: '#333',
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: 350,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5,
        },
    signUp: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: "#009387",
        borderWidth: 1,
        marginTop: 15,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    textSignUp: {
        color: '#009387',
        fontSize: 18,
        fontWeight: 'bold',
    },
    imageBackground: {
        width: 500,
        height: 370,
        marginLeft: -20,
        marginBottom: -170,
        justifyContent: 'center',
    }
})
export default SignUp;