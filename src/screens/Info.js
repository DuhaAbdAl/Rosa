import { ImageBackground, StyleSheet, Text, View, Pressable, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { data } from "../mokData/data";
import * as Animatable from 'react-native-animatable';
import ReadMore from "../Componants/ReadMoreLess";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import { WINDOW_WIDTH } from "../assets/Sizes";
import InfoCards from "../Componants/InfoCustomCards";
import IconContainer from "../Componants/IconContainer";

const Info = (props) => {
    const navigation = useNavigation();
    const drawerNavigation = navigation.getParent('LeftDrawer');
    const { name } = props.route.params || {}
    const found = data.find(element => element.title == name);

    const renderData = () => {
        var keys = Object.keys(found?.info || {});
        return keys.map(key => {
            return (
                <View>
                    <Text style={styles.text2}>{key || "404"}</Text>
                    <ReadMore text={found.info[key] || "404"} />
                </View>
            )
        })
    }
    const filterData = () => {
        const filterd = data?.filter(plant => {
            return plant.title == name;
        })
        return filterd[0];
    }
    const renderInfoCard = (item) => {
        return <InfoCards
            SunExposure={item?.SunExposure}
            Water={item?.Water}
            Fertilizer={item?.Fertilizer}
            BloomTime={item?.BloomTime}
        />
    }
    const navImgeTitle = useRef(null)
    const RenderFixedForegroundComponent = () => {
        return (
            <Animatable.View ref={navImgeTitle} style={styles.FixedForeground}>
                <Pressable onPress={() => {
                    navigation.goBack();
                }}>
                    <Ionicons
                        name="chevron-back"
                        size={30}
                        color="white"
                        style={styles.icon} />
                </Pressable>
                <TouchableOpacity onPress={() => {
                    drawerNavigation?.openDrawer();
                }}>
                     <Entypo
                        name="menu"
                        color={'white'}
                        size={30}
                        style={styles.menu}
                    />
                    {/* <Image source={require('../assets/images/profile.jpeg')}
                        style={styles.profile} /> */}
                </TouchableOpacity>
            </Animatable.View>
        )
    }

    const params = {
        ImageHeaderScrollView: {
            maxHeight: MAX_HEIGHT,
            minHeight: MIN_HEIGHT,
            maxOverlayOpacity: 0.6,
            minOverlayOpacity: 0.3,
            fadeOutForeground: true,
            foregroundParallaxRati: 5,
            renderHeader: () => <Image style={styles.image} source={found.image} />,
            renderFixedForeground: () => <RenderFixedForegroundComponent />,
        },

    }//params

    return (
        <View style={{flex:1 }}>
        <ImageHeaderScrollView {...params.ImageHeaderScrollView} >
            <TriggeringView>
                <Text style={styles.name}>{found.title}</Text>
            </TriggeringView>
            {renderData()}
            {renderInfoCard(filterData())}
            {props.children}
        </ImageHeaderScrollView >
        {IconContainer()}
        </View>
    )

}
const MIN_HEIGHT = 80;
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
    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'red',
    },
    image: {
        height: MAX_HEIGHT,
        width: WINDOW_WIDTH,
        alignSelf: 'stretch',
        resizeMode: 'cover',
    },
    text2: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 10,
        paddingTop: 5,
        paddingLeft: 13,
        backgroundColor: '#265323',
        height: 40,
        width: 90,
    },
    FixedForeground: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: MIN_HEIGHT,
        paddingTop: 16,
    },
    titleAnimated: {
        fontSize: 30,
        fontWeight: 'italic',
        color: 'white',
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
    },
    name: {
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'green',
        marginLeft:10,
        alignSelf: 'center'
    },
    profile: {
        alignSelf: 'flex-end',
        width: 48,
        height: 48,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,
        marginRight: 18,
        marginTop: 5,
    },
    menu:{
        margin:10
    }
});

export default Info;
