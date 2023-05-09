import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { data, data } from "../mokData/data";


const List = () => {
    const data = data;
    const filterData = data.filter( (item) =>{
        return item.title.toLowerCase()
    })
}

