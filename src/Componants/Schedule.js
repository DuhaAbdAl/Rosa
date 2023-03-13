import { StyleSheet, View, Pressable, Image, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { Agenda, Calendar, CalendarList, DateData } from "react-native-calendars";
import { useState } from "react";

// const timeToString = (time = Number) => {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
//   };


// const Schedule = React.FC = () => {
//     const [items, setItems] = useState({});
//     const loadItems = (day) => {
//         const items = items || {};

//         setTimeout(() => {
//             for (let i = -15; i < 85; i++) {
//                 const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//                 const strTime = timeToString(time);

//                 if (!items[strTime]) {
//                     items[strTime] = [];

//                     const numItems = Math.floor(Math.random() * 3 + 1);
//                     for (let j = 0; j < numItems; j++) {
//                         items[strTime].push({
//                             name: 'Item for ' + strTime + ' #' + j,
//                             height: Math.max(50, Math.floor(Math.random() * 150)),
//                             day: strTime
//                         });
//                     }
//                 }
//             }
//             const newItems = {};
//             Object.keys(items).forEach(key => {
//               newItems[key] = items[key];
//             });
//            setItems(newItems);
//           }, 1000);
//         }
//             <View style={{flex:1}}>
//                 <Agenda
//                     items={items}
//                     loadItemsForMonth={loadItems}
//                     selected={'2017-05-16'}
//                     // renderItem={this.renderItem}
//                 />
//             </View>
//         }

const Schedule = () => {
    const navigation = useNavigation();
    const drawerNavigation = navigation.getParent('LeftDrawer');
    return (
        <ImageBackground source={require('../assets/images/info2.jpeg')} style={styles.container}>
            <View style={styles.header}>
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
            <CalendarList
                style={styles.list}
            />

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    icon: {
        marginLeft: 15,
        marginTop: 20,
    },
    menu: {
        margin: 10,
        marginTop: 20,
    },
    list: {
        borderRadius: 5,
        marginTop: 40,
        elevation: 5,
        borderWidth: 4,
        borderColor: 'rgba(100, 100, 100, 0.2)',
        width: '100%',
        height: '90%'
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between' 
    },
});
export default Schedule;