// import React from "react";
// import { Component } from "react";
// import { View, Text, TextInput, StyleSheet, ImageBackground, Pressable, TouchableOpacity } from "react-native";
// import { useState } from "react";
// import { BlurView } from "@react-native-community/blur";
// import LinearGradient from 'react-native-linear-gradient';
// import CustomButton from "../src/Componants/CustomButton";
// import { ScreenName } from "../route/ScreenName";


// const SignIn = (props) => {
//     const [email, setEmail] = useState(email);
//     const [password, setPassword] = useState(password);
//     return (
//         <ImageBackground style={styles.container} source={require('../assets/images/drawer3.jpeg')}>
//             <Text style={styles.Title}>Welcome Back</Text>
//             <View style={styles.card}>
//                 <TextInput
//                     placeholderTextColor={'#fff'}
//                     style={styles.input}
//                     placeholder="example@gmail.com"
//                 // onChangeText={(val) => setEmail(val)} 
//                 />
//                 <TextInput
//                     placeholderTextColor={'#fff'}
//                     style={styles.input}
//                     secureTextEntry={true}
//                     placeholder="**************"
//                 // onChangeText={(val) => setPassword(val)}
//                 />
//                 <CustomButton text='Sign In'
//                     onPress={() => {
//                         props.navigation.navigate(ScreenName.Categories);
//                     }} />
//                 <View style={styles.uptext}>
//                     <Text>Forgot Password ?</Text>
//                     <Pressable onPress={() => {
//                         props.navigation.navigate(ScreenName.SignUp);
//                     }}>
//                         <Text style={styles.pressText}> Sign Up</Text>
//                     </Pressable>
//                 </View>
//             </View>
//         </ImageBackground>
//     )
// };
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // justifyContent: 'center',
//         alignItems: 'center',
//     },
//     card: {
//         width: 350,
//         height: 400,
//         alignSelf: 'center',
//         borderRadius: 30,
//         borderWidth: 1,
//         backgroundColor: 'rgba(0, 0, 0, 0.4)',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     input: {
//         width: 250,
//         borderWidth: 2,
//         borderRadius: 30,
//         borderColor: '#fff',
//         padding: 15,
//         margin: 20,
//     },
//     uptext: {
//         flexDirection: 'row',
//     },
//     pressText: {
//         // color: '#2E8D36',
//         color: 'white',
//         fontSize: 15,
//     },
//     Title:{
//         color:'white',
//         fontSize:35,
//         fontWeight:'bold',
//         marginBottom:110,
//         marginTop:60,
//         fontStyle:"italic",
//         elevation:15,
//         borderColor:'green',
//     }

// });
// export default SignIn;