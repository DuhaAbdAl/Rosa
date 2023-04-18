import { ImageBackground, StyleSheet, Text, View, Pressable, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { data } from "../mokData/data";
import * as Animatable from 'react-native-animatable';
import ReadMore from "../Componants/ReadMoreLess";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import { WINDOW_WIDTH } from "../assets/Sizes";
import InfoCards from "../Componants/InfoCustomCards";
import IconContainer from "../Componants/IconContainer";
import { useContext } from "react";
import RosaContext from "../../Store/RosaContext";

const CardInfo = (props) => {
    const {myPlants, setMyPlants} = useContext(RosaContext)
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

    const addBotton = (myPlants) => {
        // setMyPlants([myPlants])
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={styles.headerImage} source={(found.image)}>
                <View style={styles.iconsWrapper}>
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
                    </TouchableOpacity>
                </View>
                <Text style={styles.name}>{found.title}</Text>
            </ImageBackground>
            <ScrollView>
                <View >
                    {renderData()}
                    {renderInfoCard(filterData())}
                    {props.children}
                </View>
            </ScrollView>
            <TouchableOpacity onPress={addBotton}>
                <AntDesign
                    name="pluscircleo"
                    style={styles.plusIcon}
                />
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    headerImage: {
        height: 250,
        width: '100%',
        justifyContent: 'center',
    },
    name: {
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
        alignSelf: 'center',
        backgroundColor: 'rgba(50,50,50,0.3)',
        paddingLeft: 8,
        borderRadius: 10,
    },
    iconsWrapper: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 150,
    },
    plusIcon: {
        color: 'teal',
        alignSelf: 'center',
        marginBottom: 15,
        fontSize: 50
    },
    icon: {
        marginLeft: 15,
        marginTop: 12,
        alignSelf: 'flex-start',
    },
    text2: {
        fontSize: 20,
        color: '#0b626b',
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 10,
        paddingTop: 5,
        paddingLeft: 13,
        height: 40,
        width: 90,
    },

    menu: {
        margin: 10
    }
});

export default CardInfo;
