import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

const Icons = () =>{
    return(
<AntDesign
    name='search1'
    color='white'/>
    
 
)}
    // "@react-native-community/blur": "^4.3.0",
    // "@react-navigation/native": "^5.8.10",
    // "react": "16.13.1",
    // "react-native": "0.63.4",
    // "react-native-gesture-handler": "^2.8.0",
    // "react-native-safe-area-context": "^4.4.1",
    // "react-native-screens": "^2.15.0",
    // "react-native-vector-icons": "^7.1.0",

// import { StyleSheet, Text, View, Pressable, Image, StatusBar, ScrollView, TouchableOpacity } from "react-native";
// import React from "react";
// import { Window_Hight } from "../assets/Sizes";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import { TextInput } from "react-native";
// import { useRef } from "react";
// import { Animated } from "react-native";

// const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

// const CustomHeader = (props) => {
//     const animatedValue = useRef(new Animated.Value(0)).current;
//     // const scrollViewRef = useRef < ScrollView > (null);
//     // const lastOffSetY = useRef(0);
//     // // const scroallDirection = useRef();

//     const searchInputAnimation = {
//         transform: [
//             {
//                 scaleX: animatedValue.interpolate({
//                     inputRange: [0, 50],
//                     outputRange: [1, 0],
//                     extrapolate: 'clamp',
//                 }),
//             },
//             {
//                 translateX: animatedValue.interpolate({
//                     inputRange: [0, 25],
//                     outputRange: [0, -100],
//                     extrapolate: 'clamp',
//                 }),
//             },
//         ],
//         opacity: animatedValue.interpolate({
//             inputRange: [0, 25],
//             outputRange: [1, 0],
//             extrapolate: 'clamp',
//         })

//     }
//     const featureTextAnimation = {
//         transform: [
//             {
//                 scale: animatedValue.interpolate({
//                     inputRange: [0, 30],
//                     outputRange: [1, 0],
//                     extrapolate: 'clamp',
//                 }),
//             },
//         ],
//         opacity: animatedValue.interpolate({
//             inputRange: [0, 30],
//             outputRange: [1, 0],
//             extrapolate: 'clamp',
//         })
//     }
//     const waterViewAnimation = {
//         transform: [
//             {
//                 translateX: animatedValue.interpolate({
//                     inputRange: [0, 80],
//                     outputRange: [0, 36],
//                     extrapolate: 'clamp',
//                 }),
//             },
//         ],
//         translateY: animatedValue.interpolate({
//             inputRange: [0, 100],
//             outputRange: [0, -50],
//             extrapolate: 'clamp',
//         })
//     }
//     const tempViewAnimation = {
//         transform: [
//             {
//                 translateX: animatedValue.interpolate({
//                     inputRange: [0, 80],
//                     outputRange: [0, 36],
//                     extrapolate: 'clamp',
//                 }),
//             },
//         ],
//         translateY: animatedValue.interpolate({
//             inputRange: [0, 100],
//             outputRange: [0, -50],
//             extrapolate: 'clamp',
//         })
//     }
//     const leafViewAnimation = {
//         transform: [
//             {
//                 translateX: animatedValue.interpolate({
//                     inputRange: [0, 80],
//                     outputRange: [0, 36],
//                     extrapolate: 'clamp',
//                 }),
//             },
//         ],
//         translateY: animatedValue.interpolate({
//             inputRange: [0, 100],
//             outputRange: [0, -50],
//             extrapolate: 'clamp',
//         })
//     }

//     const featureIconsAnimated = {
//         opacity: animatedValue.interpolate({
//             inputRange: [0, 25],
//             outputRange: [1, 0],
//             extrapolate: 'clamp',
//         })
//     }
//     const featureUpIconsAnimated = {
//         opacity: animatedValue.interpolate({
//             inputRange: [0, 50],
//             outputRange: [0, 1],
//             extrapolate: 'clamp',
//         })
//     }
//     return (
//         <View style={styles.container}>
//             <StatusBar barStyle={'light-content'} />
//             <View>
//                 <View style={styles.upperHeaderPlaceHolder} />
//             </View>
//             <View style={styles.header}>
//                 <View style={styles.upperHeader}>
//                     <View>
//                         <Pressable onPress={() => {
//                             props.navigation.goBack();
//                         }} >
//                             <Ionicons
//                                 name="chevron-back"
//                                 size={25}
//                                 color="white"
//                                 style={{ marginRight: 10, marginTop: 17 }} />
//                         </Pressable>
//                     </View>
//                     <View style={styles.searchContainer}>
//                         <AntDesign style={styles.searchIcon}
//                             name='search1'
//                             color='white'
//                             size={20} />
//                         <AnimatedTextInput
//                             placeholder="Search"
//                             placeholderTextColor={'rgba(255,255,255,0.8)'}
//                             style={[styles.searchInput, searchInputAnimation]} />
//                     </View>
//                     <TouchableOpacity onPress={() => {
//                         props.navigation.openDrawer();
//                     }}>
//                         <Image source={require('../assets/images/profile.jpeg')}
//                             style={styles.profile} />
//                     </TouchableOpacity>
//                 </View>
//                 <View style={styles.lowerHeader}>
//                     <Animated.View style={[styles.feature, waterViewAnimation]}>
//                         <Ionicons
//                             name="water-outline"
//                             size={25}
//                             style={[styles.featureIcons, featureIconsAnimated]} />
//                         <Ionicons
//                             name="md-water-sharp"
//                             size={25}
//                             style={[styles.featureIconUp, featureUpIconsAnimated]} />
//                         <Animated.Text style={[styles.featureText, featureTextAnimation]}>Water</Animated.Text>

//                     </Animated.View>
//                     <Animated.View style={[styles.feature, tempViewAnimation]}>
//                         <FontAwesome
//                             name='thermometer-3'
//                             size={25}
//                             style={[styles.featureIcons, featureIconsAnimated]} />
//                         <FontAwesome
//                             name='thermometer-empty'
//                             size={25}
//                             style={[styles.featureIconUp, featureUpIconsAnimated]} />
//                         <Animated.Text style={[styles.featureText, featureTextAnimation]}>Tempreature</Animated.Text>

//                     </Animated.View>
//                     <Animated.View style={[styles.feature, leafViewAnimation]}>
//                         <Ionicons
//                             name='leaf-outline'
//                             size={25}
//                             style={[styles.featureIcons, featureIconsAnimated]} />
//                         <Ionicons
//                             name='leaf-sharp'
//                             size={25}
//                             style={[styles.featureIconUp, featureUpIconsAnimated]} />
//                         <Animated.Text style={[styles.featureText, featureTextAnimation]}>Fertilizer</Animated.Text>
//                     </Animated.View>
//                 </View>
//             </View>
//             <ScrollView
//                 onScroll={e => {
//                     const offsetY = e.nativeEvent.contentOffset.y;
//                     animatedValue.setValue(offsetY);
//                 }}
//                 scrollEventThrottle={16}>
//                 <View style={styles.paddingHeader} />
//                 <View style={styles.scrollViewcontainer} />

//             </ScrollView>

//         </View>
//     )
// };
// //ref={scrollViewRef}
// // onScroll={e => {
// //     const offsetY = e.nativeEvent.contentOffset.y;
// //     offsetY - lastOffSetY.current > 0 ? 'down' : 'up';
// //     lastOffSetY.current = offsetY;
// //     animatedValue.setValue(offsetY);
// // }}
// // onScrollEndDrag={() =>{
// //     scrollViewRef.current?.ScrollTo({
// //         // y: scroallDirection.current === 'down' ? 100 : 0,
// //         animated: true,
// //     });
// // }}

// const upperHeader_Hight = 75;
// const lowerHeader_Hight = 96;
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     upperHeaderPlaceHolder: {
//         height: upperHeader_Hight,
//     },
//     header: {
//         position: 'absolute',
//         width: '100%',
//         backgroundColor: 'rgba(250,250,250,0.2)'
//     },
//     upperHeader: {
//         height: upperHeader_Hight,
//         flexDirection: "row",
//         alignItems: 'center',
//         paddingHorizontal: 16,
//         // backgroundColor: "green",
//     },
//     searchContainer: {
//         flex: 1,
//         justifyContent: 'flex-start',
//     },
//     searchIcon: {
//         marginLeft: 7,
//         marginTop: 24,
//     },
//     searchInput: {
//         position: 'absolute',
//         width: '100%',
//         backgroundColor: 'rgba(250,250,250,0.3)',
//         color: 'white',
//         borderRadius: 4,
//         paddingVertical: 4,
//         paddingLeft: 32,
//         // marginLeft:20,
//         marginTop: 17,
//     },
//     profile: {
//         width: 38,
//         height: 38,
//         borderRadius: 20,
//         borderColor: 'white',
//         borderWidth: 1,
//         margin: 10,
//         marginLeft: 60,
//         marginTop: 30,
//     },
//     lowerHeader: {
//         height: lowerHeader_Hight,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         width: '100%',
//         paddingHorizontal: 10,
//     },
//     feature: {
//         alignItems: 'center',
//         flexDirection: 'row',
//     },
//     featureIcons: {
//         color: "white",
//         marginLeft: 50,
//     },
//     featureIconUp: {
//         // position: 'absolute',
//         top: 8,
//     },
//     featureText: {
//         fontWeight: 'bold',
//         fontSize: 13.5,
//         color: 'white',
//         marginTop: 65,
//     },
//     paddingHeader: {
//         height: lowerHeader_Hight,
//     },
//     scrollViewcontainer: {
//         height: Window_Hight * 2,
//         // backgroundColor: "white",
//     },
// })
// export default CustomHeader;