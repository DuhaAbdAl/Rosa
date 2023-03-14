import { StyleSheet, View, Pressable, Text, TouchableOpacity, ImageBackground } from "react-native";
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
        <ImageBackground source={require('../assets/images/types3.jpeg')} style={styles.container}>
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
            <View style={styles.agenda}>
                <Agenda
                    selected="2023-03-14"
                    items={{
                        '2023-03-14': [{ name: 'Recycling' }, { name: 'Planted' }, { name: 'Watering' }],
                        '2023-03-15': [{ name: 'Fertilizing' }]
                    }}
                    renderItem={(item) => (
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.itemText}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    theme={{
                        calendarBackground: '#19362d',
                        dayTextColor: '#fff',
                        textDisabledColor: '#444',
                        monthTextColor: '#fff',
                        dayTextAtIndex6: {
                            color: 'green'
                        }
                    }}
                />
            </View>
            {/* <Calendar
                style={styles.list}
                theme={{
                    calendarBackground: '#077086',
                    dayTextColor: '#fff',
                    textDisabledColor: '#444',
                    monthTextColor: '#fff',
                    dayTextAtIndex6: {
                        color: 'green'
                      }
                  }}
            /> */}

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
        borderRadius: 10,
        marginTop: 120,
        elevation: 5,
        borderWidth: 4,
        borderColor: 'rgba(250, 250, 250, 0.2)',
        width: '90%',
        height: '70%',
        alignSelf: 'center',
        paddingTop: 45
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
        width: '90%'
    },
    itemText: {
        color: '#888',
        fontSize: 16,
    },
    agenda: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 25,
        borderRadius: 10,
        elevation: 5,
        borderWidth: 3,
        borderColor: 'rgba(250, 250, 250, 0.2)',
        width: '95%',
    },
});
export default Schedule;