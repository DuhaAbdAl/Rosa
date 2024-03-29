import { StyleSheet, Text, View, Pressable, ScrollView, Animated, Image, useWindowDimensions, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from "../../route/ScreenName";
import Icon from "react-native-vector-icons/AntDesign";
// import { images } from "../mokData/data";
import { getAllCategory } from "../../API/Api";
import IconContainer from "../Componants/IconContainer";

const Categories = (props) => {
    // const { title, img } = props;
    const navigation = useNavigation()
    const [images, setImages] = useState([])
    const [loding, setLoading] = useState(false)

    const scroll = useRef(new Animated.Value(0)).current
    let { width: windowWidth, height: windowHeight } = useWindowDimensions();
    windowHeight = windowHeight - 300;

    const renderText = () => {
        return images.map((image, imageIndex) => {
            const inputRange = [
                windowWidth * (imageIndex - 1),
                windowWidth * (imageIndex),
                windowWidth * (imageIndex + 1),
            ];
            return (
                <Animated.Text style={[styles.textView, {
                    transform: [
                        {
                            translateY: scroll.interpolate({
                                inputRange,
                                outputRange: [-250, 50, 200]
                            })
                        }]
                }, {
                    opacity: scroll.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0]
                    })
                }, {
                    color: 'green',
                }]}>
                    {image.title}
                </Animated.Text>
            );
        })
    }

    const onCategoryPress = (title) => { navigation.navigate(ScreenName.Types, { categoryName: title }); }

    const renderImage = () => {
        return images.map((image, imageIndex) => {
            console.log("image: ", image.img);
            return (
                <Animated.View
                    style={[{ width: windowWidth }, styles.scrollContainer]}
                    key={imageIndex}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.touch(windowWidth)} onPress={() => onCategoryPress(image.title)}>
                        <Image source={{ uri: image.img }} style={styles.card} />
                    </TouchableOpacity>

                </Animated.View >

            )
        })
    }

    const renderDots = () => {
        return images.map((image, imageIndex) => {
            const width = scroll.interpolate({
                inputRange: [
                    windowWidth * (imageIndex - 1),
                    windowWidth * (imageIndex),
                    windowWidth * (imageIndex + 1),
                ],
                outputRange: [8, 16, 8],
                extrapolate: 'clamp',
            })
            return (
                <Animated.View style={[styles.normallDots, { width }, { backgroundColor: 'green' }]} />
            );
        }
        )
    }

    const getCategoreisFromApi = () => {
        setLoading(true)
        getAllCategory().then(res => {
            setLoading(false)
            console.log("res: ", res);
            res &&
                setImages(res?.all)
        })
    }

    useEffect(() => {
        getCategoreisFromApi()
    }, [])


    if(loding) {
        return <ActivityIndicator size={'large'} style={{flex:1}} />
    }

    return (
        <View style={styles.container}>

            <View style={styles.nametext}>
                {renderText()}
            </View>

            <View style={[styles.scrollContainer]}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scroll } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={15}
                >
                    {renderImage()}
                </ScrollView>
            </View>
            <View style={styles.dots}>
                {renderDots()}
            </View>
            <IconContainer />
        </View>

    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    scrollStyle: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1
    },
    card: {
        flex: 1,
        width: 350,
        overflow: 'hidden',
        alignSelf: 'center',
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18,
    },
    normallDots: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
        marginBottom: 20,
    },
    nametext: {
        height: 100,
        width: '100%',
        marginBottom: 10,
        // borderWidth:1 , 
    },
    textView: {
        position: 'absolute',
        fontSize: 24,
        fontFamily: 'Avenir',
        fontWeight: '600',
        textAlign: 'center',
        width: '100%',
    },
    iconContainer: {
        width: '100%',
        height: 65,
        backgroundColor: '#28463e',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 70,
        alignSelf: 'center',

    },
    icons: {
        margin: 20,
        fontSize: 25,
        color: "white",
    },
    touch: () => ({
        backgroundColor: 'rgba(1,0,0,0)',
        flex: 1,
        elevation: 14,
        width: 350,
        alignSelf: 'center',
        marginVertical: 20,
    }),
});
export default Categories;