import { ImageBackground, StyleSheet, Text, View, Pressable, Image, ScrollView, } from "react-native";
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
    const { name, image } = props.route.params || {}
    const found = data.find(element => element.title == name);
    const foundImg = data.find(element => element.title == image);
    // const itemData = route.params.data;

    const renderData = () => {
        var keys = Object.keys(found?.info || {});
        return keys.map(key => {
            return (
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>{key || "404"}</Text>
                    {/* <Text style={styles.text}>{found.info[key] || "404"}</Text> */}
                    <ReadMore style={styles.text} text={found.info[key] || "404"} />
                </View>
            )
        })
    }
    // const MinHight = Platform.OS == 55;
    // const MaxHight = 350;
    // const itemDetail = () =>{
    //     const imgData = data.find(element => element.image==image)
    // }
    const HeaderImage = (props) => {
        const imgeTitle = useRef(null)
        return (
            <ImageHeaderScrollView
                maxHeight={250}
                minHeight={55}
                maxOverlayOpacity={0.6}
                minOverlayOpacity={0.3}
                headerImage={require('../assets/images/info2.jpeg')}
                renderHeader={() => {
                    // <Image source={foundImg} />
                }}
                renderForeground={() => (
                    <View>
                        {/* <Text style={{ color: "red" }}> {found} </Text> */}
                    </View>
                )}
                renderFixedForeground={() => (
                    <Animatable.View ref={imgeTitle}>
                        <Text style={styles.test1}>title</Text>
                    </Animatable.View>
                )}
            >

                <TriggeringView
                    onHide={() => imgeTitle.current.fadeInUp(200)}
                    onDisplay={() => imgeTitle.current.fadeOut(100)}>
                </TriggeringView>
                {props.children}
            </ImageHeaderScrollView>
        )
    }

    return (
        <HeaderImage style={styles.headerImage}>
            <View>
                <Pressable onPress={() => {
                    navigation.goBack();
                }}>
                    <Ionicons
                        name="chevron-back"
                        size={25}
                        color="white"
                        style={{ marginRight: 10, marginTop: 8, alignSelf: 'flex-start' }} />
                </Pressable>
            </View>

            <ImageBackground
                style={styles.imageBack}
                source={require('../assets/images/info10.jpeg')}>
                {/* <ScrollView> */}
                {renderData()}
                {/* </ScrollView> */}
            </ImageBackground>
        </HeaderImage>
    )

}
const styles = StyleSheet.create({
    headerImage: {
        flex: 1,
        // height: 200,
        // width: 200,
        // backgroundColor: 'red'
    },
    image: {
        height: 55,
        width: '100%',
        alignSelf: 'center',
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
    test1: {
        fontSize: 20,
        color: 'blue',
        textAlign: 'center',
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 8,
        paddingTop: 5,
    },
});

export default Info;
