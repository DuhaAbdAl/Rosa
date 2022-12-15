import { StyleSheet, Text, View, Pressable, ScrollView, Animated, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from "../../route/ScreenName";
import Icon from "react-native-vector-icons/AntDesign";
import { images } from "../mokData/data";

const Categories = (props) => {
    const { title, img } = props;
    const navigation = useNavigation()

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

    const renderImage = () => {
        return images.map((image, imageIndex) => {
            return (

                <Animated.View
                    style={[{ width: windowWidth }, styles.scrollContainer]}
                    key={imageIndex}>
                    <TouchableOpacity style={styles.touch(windowWidth)} onPress={() => { navigation.navigate(ScreenName.Types, { categoryName: image.title }); }}>
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
    },
    normallDots: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
        marginBottom: 20,
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
        width: '100%',
        height: 65,
        backgroundColor: '#28463e',
        flexDirection: 'row',
        justifyContent: 'center',
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