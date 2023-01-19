import { ImageBackground, StyleSheet, Text, View, Pressable, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { data } from "../mokData/data";
import * as Animatable from 'react-native-animatable';
import ReadMore from "../Componants/ReadMoreLess";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";

const Info = (props) => {
    const navigation = useNavigation();
    const drawerNavigation = navigation.getParent('LeftDrawer');
    const { name } = props.route.params || {}
    const found = data.find(element => element.title == name);

    const renderData = () => {
        var keys = Object.keys(found?.info || {});
        return keys.map(key => {
            return (
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>{key || "404"}</Text>
                    <ReadMore style={styles.text} text={found.info[key] || "404"} />
                </View>
            )
        })
    }
    // console.log('found.image', found.image)
    console.log('found.title', found.title)
    const HeaderImage = (props) => {
        const imgeTitle = useRef(null)
        return (
            <ImageHeaderScrollView
                maxHeight={MAX_HEIGHT}
                minHeight={MIN_HEIGHT}
                maxOverlayOpacity={0.6}
                minOverlayOpacity={0.3}
                fadeOutForeground
                renderHeader={() => {
                    return <Image style={styles.image} source={found.image} />
                }}
                renderForeground={() => (
                    <View style={styles.Foreground}>
                        <Text style={styles.titleAnimatedUp}> {found.title} </Text>
                    </View>
                )}
                renderFixedForeground={() => (
                    <Animatable.View ref={imgeTitle} style={styles.FixedForeground}>
                        <Pressable onPress={() => {
                            navigation.goBack();
                        }}>
                            <Ionicons
                                name="chevron-back"
                                size={30}
                                color="white"
                                style={styles.icon} />
                        </Pressable>
                        <Text style={styles.titleAnimated}>{found.title}</Text>
                        <TouchableOpacity onPress={() => {
                            drawerNavigation?.openDrawer();
                        }}>
                            <Image source={require('../assets/images/profile.jpeg')}
                                style={styles.profile} />
                        </TouchableOpacity>
                    </Animatable.View>
                )}
                foregroundParallaxRatio={5}
            // scrollViewBackgroundColor="#ddddff"
            >

                <TriggeringView
                    onHide={() => imgeTitle.current.fadeInUp(200)}
                    onDisplay={() => imgeTitle.current.fadeOut(100)}
                >
                    {/* <Text style={styles.titleText}> */}
                        <Text style={styles.name}>{found.title}</Text> 
                    {/* </Text> */}
                </TriggeringView>
                <ImageBackground
                    style={styles.imageBack}
                    source={require('../assets/images/info10.jpeg')} >
                    {renderData()}
                </ImageBackground>
                {props.children}
            </ImageHeaderScrollView >
        )
    }

    return (
        <HeaderImage style={styles.headerImage} />
    )

}
const MIN_HEIGHT = 350;
const MAX_HEIGHT = 250;

const styles = StyleSheet.create({
    headerImage: {
        flex: 1,
        height: 200,
        width: 200,
    },
    icon: {
        marginLeft: 15,
        marginTop: 12,
        alignSelf: 'flex-start',
    },
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
    },
    imageBack: {
        flex: 1,
    },
    textContainer: {
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        margin: 8,
        borderColor: '#000',
        borderWidth: 0.5,
        backgroundColor: 'rgba(10, 10, 10, 0.55)',
    },
    text: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        // lineHeight: 11,
    },
    text2: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 8,
        paddingTop: 5,
        borderWidth: 2,
        borderColor: '#143409',
        backgroundColor: '#265323',
        height: 40,
        width: '90%',
    },
    FixedForeground: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: MIN_HEIGHT,
        alignItems: 'center',
        paddingTop: 16,
        opacity: 0,
    },
    titleAnimated: {
        fontSize: 30,
        fontWeight: 'italic',
        color: 'white',
        backgroundColor: 'rgba(250, 250, 250, 0.55)',
        // borderRadius: 10,
        // height: 70,
        // padding: 5,
        // textAlign: 'center',
        // marginBottom: 12,
        // marginTop: 15,
        // paddingTop: 5,
    },
    Foreground: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    titleAnimatedUp: {
        fontSize: 30,
        fontWeight: 'italic',
        color: 'green',//transparent
        backgroundColor: 'transparent',
        // textAlign: 'center',
        // marginRight: 170,
        // marginLeft: 165,
        // marginBottom: 10,
        // marginTop: 8,
        // paddingTop: 5,
    },
    // titleText: {
    //     fontSize: 20,
    // },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profile: {
        alignSelf: 'flex-end',
        width: 38,
        height: 38,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,
        margin: 10,
        marginTop: 10,
    },
});

export default Info;
