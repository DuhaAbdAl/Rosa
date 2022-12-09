import { StyleSheet, Text, View, Pressable, ScrollView, Animated, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from "../../route/ScreenName";
import Icon from "react-native-vector-icons/AntDesign";
import { images } from "../mokData/data";

const Categories = (props) => {
    const{title,img} = props;
    const navigation = useNavigation()
    // const renderCards = ({ item }) => {
    //     return <CategoryCard Name={item.title} Image={item.img} />
    // };
    // const found = data.filter(element => element.title == name);

    // const renderData = () => {
    //     var keys = Object.keys(?.info || {});
    //     return keys.map(key => {
    //         return (
    //             <View>
    //                 <Text style={styles.text}>{key || "404"}</Text>
    //                 <Text style={styles.text}>{found.info[key] || "404"}</Text>
    //             </View>
    //         )
    //     })}
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
                                outputRange: [-500, -50, 0]
                            })
                        }
                    ]
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

    const renderImage = () => {
        return images.map((image, imageIndex) => {
            return (

                <Animated.View
                    style={[{ width: windowWidth }, styles.scrollContainer]}
                    key={imageIndex}>
                    <TouchableOpacity style={styles.touch(windowWidth)} onPress={() => { navigation.navigate(ScreenName.Types , {categoryName: image.title}); }}>
                        <Image source={image.img} style={styles.card} />
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

    return (
        <View style={styles.container}>

            <View style={styles.nametext}>
                {renderText()}
            </View>

            <View style={[styles.scrollContainer, { height: windowHeight }]}>
                <ScrollView
                    horizontal={true}
                    // style={styles.scrollStyle}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scroll } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={16}
                >
                    {renderImage()}
                </ScrollView>
            </View>
            <View style={styles.dots}>
                {renderDots()}
            </View>
            <View style={styles.iconContainer}>
                <Icon style={styles.icons}
                    name='home' />
                <Icon style={styles.icons}
                    name='hearto' />
                <Icon style={styles.icons}
                    name='calendar' />
                <Icon style={styles.icons}
                    name='user' />
            </View>
        </View>

    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollStyle: {
        flex: 1,
    },
    scrollContainer: {
        // shadowColor: '#6A6C6E',
        //elevation: 15,
        // marginBottom: 10,
        // marginVertical: 10,
        // marginHorizontal:5,
        // backgroundColor: '#6A6C6E',
        elevation: 10,
        // shadowColor:'#fff',
        // shadowOffset:{
        //     width:'100%',
        //     height:'100%',
        // },
        // shadowOpacity:10,
        // shadowRadius:3.84,
    },
    card: {
        flex: 1,
        marginVertical: 10,
        width: 350,
        overflow: 'hidden',
        alignSelf: 'center',
        elevation:10,
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    normallDots: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    nametext: {
        width: '100%',
        marginBottom: 10,
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
        width: '80%',
        height: 65,
        backgroundColor: '#28463e',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
        alignSelf:'center',
    },
    icons: {
        margin: 20,
        fontSize: 25,
        color: "white",
    },
    touch: (windowWidth) => ({
        // borderWidth: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        // width: windowWidth
        flex: 1
    })
});
export default Categories;