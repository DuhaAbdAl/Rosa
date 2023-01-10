import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    ActivityIndicator,
    ImageBackground
} from "react-native";
import List from "./List";
import SearchBar from "./SearchBar";
// import { data } from "../mokData/data";

const SearchHome = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [Data, setData] = useState();

    useEffect(() => {
        const getData = async () => {
            const apiResponse = await fetch();
            const data = await apiResponse.json();
            setData(Data);
        };
        getData();
    }, []);

    return (
        <ImageBackground style={styles.image} source={require('../assets/images/type4.jpeg')}>
            <View >
                {!clicked}
                <SearchBar
                    searchPhrase={searchPhrase}
                    setSearchPhrase={setSearchPhrase}
                    clicked={clicked}
                    setClicked={setClicked}
                />
                {/* {(
                    <List
                        searchPhrase={searchPhrase}
                        data={Data}
                        setClicked={setClicked}
                    />
                )} */}
            </View>
        </ImageBackground>
    );
};


const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    root: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        width: "100%",
        marginTop: 20,
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: "10%",
    },
});
export default SearchHome;