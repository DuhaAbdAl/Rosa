import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from "react-native";
import { data } from "../src/mokData/data";

const Item = ({ name, details }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.details}>{details}</Text>
    </View>
);

const List = ({ searchPhrase, setCLicked}) => {
    const renderItem = ({ item }) => {
        if (searchPhrase === "") {
            return <Item name={item.title} />;
        }
        if (item.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return <Item name={item.name} details={item.details} />;
        }
    //     if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
    //         return <Item name={item.name} details={item.details} />;
    //     }
    };

    return (
        <View style={styles.listContainer}>
            <View
                onStartShouldSetResponder={() => {
                    setCLicked(false);
                }}
            >
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        margin: 10,
        height: "85%",
        width: "100%",
    },
    item: {
        margin: 30,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        fontStyle: "italic",
    },
});
export default List;