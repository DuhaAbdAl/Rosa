import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from "react-native";

const SearchList = (props) => {
    const { data, input, setInput } = props;
    return (
        <View>
            <FlatList data={data} renderItem={({ item }) => {
                if (input === "") {
                    return (
                        null
                    )
                }
                if (item.title.toUpperCase().includes(input.toUpperCase())) {
                    return (
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ fontSize: 14, fontWeight: "bold", alignSelf: 'center', marginTop: 45 }}>{item.title}</Text>
                            <Text style={{ borderColor: "gray", borderWidth: 1, height: 1, marginTop: 5 }} />
                        </View>
                    )
                }
            }} />
        </View>
    )
};

const styles = StyleSheet.create({
    // listContainer: {
    //     margin: 10,
    //     height: "85%",
    //     width: "100%",
    // },
    // item: {
    //     margin: 30,
    //     borderBottomWidth: 2,
    //     borderBottomColor: "lightgrey"
    // },
    // title: {
    //     fontSize: 20,
    //     fontWeight: "bold",
    //     marginBottom: 5,
    //     fontStyle: "italic",
    // },
});
export default SearchList;
//   <View
// onStartShouldSetResponder={() => {
//     setClicked(false);
// }}
// > </View>