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
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import filter from "lodash.filter";
import RosaContext from "../../Store/RosaContext";
import { useContext } from "react";

const listData = data;

const SearchList = () => {
    const { isLoading, setIsLoading,
        isData, setIsData,
        error, setError,
        fullData, setFullData,
        searchQuery, setSearchQuery } = useContext(RosaContext);


    useEffect(() => {
        setIsLoading(true)
        fetchData(data)
    }, []);

    const fetchData = (ListData) => {
        try {
            const response = fetch(ListData);
            setIsData(response);

            console.log('setdata', response);

            setFullData(response);
            setIsLoading(false);
        } catch (error) {
            setError(error);

            console.log('error', error);

            setIsLoading(false);
        }
    }

    const handleSearch = (query) => {
        setSearchQuery(query)
        const formattedQuery = query.toLowerCase()
        const filtersData = filter(fullData, (plant) => {
            return contains(plant, formattedQuery)
        })
        setIsData(filtersData)
    }

    const contains = (title, query) => {

        if (
            title.includes(query)
        ) {
            return true;
        }
        return false
    }

    if (isLoading) {
        return (
            <View style={styles.responseContainer}>
                <ActivityIndicator size={'large'} color={'#5500dc'} />
            </View>
        )
    }

    if (error) {
        return (
            <View style={styles.responseContainer}>
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
                value={searchQuery}
                onChangeText={(query) => handleSearch(query)} />
            <FlatList
                data={listData}
                keyExtractor={(item) => item.title}
                // renderItem={({ item }) => (
                //     <View style={styles.itemContainer}>
                //         <Image source={(item.image)} style={styles.image} />
                //         <View>
                //             <Text style={styles.textTitle}>{item.title}</Text>
                //         </View>
                //     </View>
                // )}
            />

        </View>

    )
};



const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20,
    },
    searchBox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf:'center',
        width: '80%',
        height: 50,
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
    },
    responseContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333'
    },

});
export default SearchList;