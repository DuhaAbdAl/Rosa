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


// const QueryList = ({searchPhrase, setClicked, data}) => {
//     const [list, setList] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState(null);

const listData = data;
// console.log('List', listData)

const SearchList = () => {
    const {
        list, setList,
        searchText, setSearchText,
        isLoading, setIsLoading,
        isData, setIsData,
        error, setError,
        fullData, setFullData,
        searchQuery, setSearchQuery } = useContext(RosaContext);


    // useEffect(() => {
    //     setIsLoading(true)
    //     fetchData(listData)
    // }, []);



    // const fetchData = async () => {
    //     try {
    //         const response = listData;
    //         const json = await response.json();
    //         setIsData(json);

    //         console.log('setdata', response);

    //         setFullData(response);
    //         setIsLoading(false);
    //     } catch (error) {
    //         setError(error);

    //         console.log('error', error);

    //         setIsLoading(false);
    //     }
    // }


    const handleSearch = (plant) => {
        let plantList = data.filter(a => {
            (a.data.includes(plant.title) &&
                a.title
                    .toUpperCase()
                    .includes(searchText.toUpperCase().trim().replace(/\s/g, ''))) ||
                a.title
                    .toUpperCase()
                    .includes(searchText.toUpperCase().trim().replace(/\s/g, ''));
        });

        setList(plantList);
        setSelectedCategory(plant);
    }

    useEffect(() => {
        check();
    }, [searchText]);

    const check = () => {
        if (searchText == '') {
            setList([]);
            return;
        }
        let titleList = data.filter(val => {
            return (
                val.title
                    .toUpperCase()
                    .includes(searchText.toUpperCase().trim().replace(/\s/g, ''))
            );
        });
        console.log('title list ', titleList);
        setList(titleList);
    };

    const renderList = ({ item }) => {
        return ;
    };
    // console.log("item", item)


    // // setSearchQuery(query)
    // const formattedQuery = query.toLowerCase()
    // const filtersData = listData.filter((item) => {
    //     return item.title.toLowerCase().match(formattedQuery)
    // })
    // setIsData(filtersData)

    // if ( !formattedQuery || formattedQuery === '') {
    //     setIsData(data)
    // }


    // if (isLoading) {
    //     return (
    //         <View style={styles.responseContainer}>
    //             <ActivityIndicator size={'small'} color={'#5500dc'} />
    //         </View>
    //     )
    // }

    // if (error) {
    //     return (
    //         <View style={styles.responseContainer}>
    //             <Text>not found</Text>
    //         </View>
    //     )
    // };
    // setError(error)

    // if(data.isData(filtersData)) {
    //     setIsData({
    //       data: filtersData,
    //     });
    //   }
    // }
    const renderItem = (item) => {
        <View style={styles.itemContainer}>
            <Image source={item.item.image} style={styles.image} />
            <View>
                <Text style={styles.textTitle}>{item.item.title}</Text>
            </View>
        </View>
        // console.log('img', item.item.image)
        // console.log('title', item.item.title)
        // console.log('item', item)
    }
    const params = {
        Flatlist: {
            data: data,
            renderItem: renderList,
            keyExtractor: item => item.title,
            extraData: data,
            keyboardShouldPersistTaps: 'handled',
        },
    }

    return (
        <View style={styles.searchContainer}
            onStartShouldSetResponder={() => {
                setClicked(false);
            }}>
            <TextInput
                placeholder="Search"
                placeholderTextColor={'black'}
                clearButtonMode="always"
                style={styles.searchBox}
                autoCapitalize="none"
                value={searchQuery}
                onChangeText={(query) => handleSearch(query)} />
            <FlatList {...params.Flatlist} />

            {/* <FlatList
                data={listData}
                keyExtractor={(item) => item.title}
                renderItem={renderItem}
            /> */}
        </View>

    )
};



const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        minHeight: 150,
        minWidth: 50,
    },
    searchBox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: 'center',
        width: '80%',
        height: 50,
        backgroundColor: 'rgba(252,252,252,0.9)',
        marginTop: 30,
        color: "#333"
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