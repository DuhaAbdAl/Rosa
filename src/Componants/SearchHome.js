import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    ActivityIndicator,
    ImageBackground
} from "react-native";
// import SearchList from "./List";
import SearchBar from "./SearchBar";
import { data } from "../mokData/data";

const SearchHome = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [Data, setData] = useState();
    const [input, setInput] = useState("");


    // useEffect(() => {
    //     const getData = async () => {
    //         // const apiResponse = await fetch();
    //         // const data = await apiResponse.json();
    //         setData(Data);
    //     };
    //     getData();
    // }, []);

    return (
        // <ImageBackground style={styles.image} source={require('../assets/images/type4.jpeg')}>
            <View >
                {!clicked}
                <SearchBar style={styles.bar}
                    searchPhrase={searchPhrase}
                    setSearchPhrase={setSearchPhrase}
                    clicked={clicked}
                    setClicked={setClicked}
                />
                {/* {(
                    <SearchList data={data} input={input} setInput={setInput}/>
                )} */}
            </View>
        // </ImageBackground>
    );
};


const styles = StyleSheet.create({
    image: {
        flex: 1,
        // justifyContent: 'center',
    },
    bar:{
        marginBottom:200,
    }
});
export default SearchHome;