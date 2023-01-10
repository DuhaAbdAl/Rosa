import { ImageBackground, StyleSheet, Text, View, Button, Image, ScrollView, } from "react-native";
import React from "react";
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { data } from "../mokData/data";
import { Platform } from "react-native";
import * as Animatable from 'react-native-animatable';
import ReadMore from "../Componants/ReadMoreLess";
import { useRef } from "react";

const Info = (props) => {
    const { name, image } = props.route.params || {}
    const found = data.find(element => element.title == name);
    const foundImg = data.find(element => element.title == image);

    const renderData = () => {
        var keys = Object.keys(found?.info || {});
        return keys.map(key => {
            return (
                <View style={styles.textContainer}>
                    <Text style={styles.text2}>{key || "404"}</Text>
                    {/* <Text style={styles.text}>{found.info[key] || "404"}</Text> */}
                    <ReadMore style={{ color: "white" }} text={found.info[key] || "404"} />
                </View>
            )
        })
    }
    const renderImage = () => {
        var keys = Object.keys(foundImg?.image || {});
        return keys.map(key => {
            return (
                <View>
                    <Image source={foundImg.image[key] || "404"} />
                </View>
            )
        })
    }
    // const MinHight = Platform.OS == 55;
    // const MaxHight = 350;

    const HeaderImage = (props) => {
        const imgeTitle = useRef(null)

        return (
            <ImageHeaderScrollView
                maxHeight={250}
                minHeight={55}
                maxOverlayOpacity={0.6}
                minOverlayOpacity={0.3}
                // headerImage={require('../assets/images/info2.jpeg')}
                renderHeader={() => {
                    <Image source={renderImage()} />
                }}
                renderForeground={() => (
                    <View>
                        <Text style={{ color: "red" }}> Hello </Text>
                    </View>
                )}
                renderFixedForeground={() => (
                    <Animatable.View ref={imgeTitle}>
                        <Text style={{ color: "blue", alignSelf: 'center' }}>Welcom</Text>
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
        <HeaderImage>
            <ImageBackground
                style={styles.imageBack}
                source={require('../assets/images/info1.jpeg')}
            >
                {/* {HeaderImage()} */}

                {/* <View style={styles.headerImage}></View> */}
                {/* <ScrollView style={{flex:1}}> */}
                {renderData()}
                {/* </ScrollView> */}

            </ImageBackground>
        </HeaderImage>
    )

}
const styles = StyleSheet.create({
    headerImage: {
        // flex: 1,
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
        padding: 10,
        margin: 8,
        marginLeft: 20,
        marginRight: 150,
        borderColor: '#000',
        borderWidth: 0.5,
        backgroundColor: 'rgba(10, 10, 10, 0.55)',
    },
    text: {
        fontSize: 16,
        color: '#fff',
        lineHeight: 11,
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
    test1:{
        fontSize: 20,
        
    }
});

export default Info;
