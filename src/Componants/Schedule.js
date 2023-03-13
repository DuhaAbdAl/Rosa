import { StyleSheet, View, Pressable, Image, Text, ImageBackground } from "react-native";
import React from "react";
import { Agenda, Calendar,DateData } from "react-native-calendars";
import { useState } from "react";

const timeToString = (time = Number) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };


const Schedule = React.FC = () => {
    const [items, setItems] = useState({});
    const loadItems = (day) => {
        const items = items || {};

        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);

                if (!items[strTime]) {
                    items[strTime] = [];

                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                            day: strTime
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach(key => {
              newItems[key] = items[key];
            });
           setItems(newItems);
          }, 1000);
        }
            <View style={{flex:1}}>
                <Agenda
                    items={items}
                    loadItemsForMonth={loadItems}
                    selected={'2017-05-16'}
                    // renderItem={this.renderItem}
                />
            </View>
        }
const styles = StyleSheet.create({

        });
        export default Schedule;