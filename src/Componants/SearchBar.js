import { StyleSheet, View, Button, TextInput, Keyboard } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { data } from "../mokData/data";

const SearchBar = (props) => {
    const [selected, setSelected] = React.useState("");
    const searchData = data.map((item, index) => {
        return { key: index, value: item, text: item.title }
    })

    searchData.unshift({ key: 999, value: 'all', text: '' })

    const renderSearchData = () => {
        const res = filterData.map(filterSearchData =>
            <Text>
                {filterSearchData.title}
            </Text>
        )
        return res;
    }
    return (
        <View>
            <View>
                <SelectList
                    setSelected={(val) => props.onSearchChange(val)}
                    data={searchData || []}
                    save="value" />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    },
});
export default SearchBar;