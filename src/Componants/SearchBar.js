import { StyleSheet, View, Button, TextInput, ImageBackground } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";


const SearchBar = (props) => {
    const { clicked, setClicked, searchPhrase, setSearchPhrase } = props;
    return (
        <View style={styles.container}>
            <View
                style={
                    props.clicked
                        ? styles.searchBarClicked : styles.searchBarUnclicked
                }>
                <AntDesign
                    name='search1'
                    color='white'
                    size={20}
                    style={{ marginLeft: 1 }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />
                {clicked && (
                    <Entypo name="cross" size={28} color="black" style={{ padding: 1 }} onPress={() => {
                        setSearchPhrase("")
                    }} />
                )}
            </View>
            {/* {clicked && (
                <View>
                    <Button
                        title="Cancel"
                        onPress={() => {
                            Keyboard.dismiss();
                            setClicked(false);
                        }}
                    ></Button>
                </View>
            )} */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",

    },
    searchBarUnclicked: {
        padding: 10,
        marginLeft: 15,
        marginTop: 40,
        flexDirection: "row",
        width: "98%",
        backgroundColor: "#4E653D",
        elevation:25,
        borderColor:"#20331B",
        borderRadius: 15,
        alignItems: "center",
    },
    searchBarClicked: {
        padding: 10,
        marginLeft: 15,
        marginTop: 40,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#4E653D",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 18,
        color: 'white',
        marginLeft: 10,
        width: "90%",
    },

});
export default SearchBar;