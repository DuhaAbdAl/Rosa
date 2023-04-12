import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
    Image
} from "react-native";
import { data } from "../mokData/data";
import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import filter from "lodash.filter";

const listData = data;

const SearchList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isData, setIsData] = useState([]);
    const [error, setError] = useState(null);
    const [fullData, setFullData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setIsLoading(true)
            // fetchData(data)
    }, []);

    // const fetchData = async (listData) => {
    //     try {
    //         const response = await fetch(listData);
    //         const json = await response.json();
    //         setIsData(json.results);

    //         console.log('setgata',json.results);

    //         setFullData(json.results);
    //         setIsLoading(false);
    //     } catch (error) {
    //         setError(error);
    //         console.log('error',error);
    //         setIsLoading(false);
    //     }
    // };

    const handleSearch = (query) => {
        setSearchQuery(query)
        const formattedQuery = query.toLowerCase()
        const filtersData = filter(fullData, (plant) => {
            return contains(plant, formattedQuery);
        })
        setIsData(filtersData)
    };

    const contains = (title , query) => {

        if (
            title.includes(query)
        ){
            return true;
        }
        return false
    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} color={'#5500dc'} />
            </View>
        )
    };

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>not found</Text>
            </View>
        )

    };

    return (
        <View style={styles.searchContainer}>
            <TextInput
                placeholder="Search"
                placeholderTextColor={'black'}
                clearButtonMode="always"
                style={styles.searchBox}
                autoCapitalize="none"
                autoCorrect={false}
                value={searchQuery}
                onChangeText={(query) => handleSearch(query)} />
            <FlatList
                data={listData}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source = {(item.image)} style={styles.image}/>
                        <View>
                            <Text style={styles.textTitle}>{item.title}</Text>
                        </View>
                    </View>
                )}
            />

        </View>

    )
};



const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        marginHorizontal: 20,
        backgroundColor:'red'
    },
    searchBox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: 'green',
        // alignSelf:'center',
        height: 80,
        width: '100%',
        marginTop: 100,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10, 
        marginTop: 10,
    },
    image: {
        width: 50, 
        height: 50,
    },
    textTitle: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: '600'
    }

});
export default SearchList;