import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { data } from "../mokData/data";
import { useContext } from "react";
import RosaContext from "../../Store/RosaContext";
import Cards from "../assets/Cards";
import { useEffect } from "react";
import { FlatList } from "react-native";

const SearchBar = (props) => {
    // const RosaContext = useContext(RosaContext);
    const { searchText, setSearchText } = useContext(RosaContext);
    const [plants, setPlants] = useState('');

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
    const renderCards = ({ item }) => {

        return <Cards {...item} />
    };
    useEffect(() => {
        setPlants(plants);
    }, [])
    const onSearchChange = (val) => {
        setSearchText(val)
    }
    const setPageData = () => {
        if (!searchText || searchText == 'all') {
            return plants;
        }
        const filterdData = data.find(product => product.title === searchText).products;
        return filterdData;
    };
    useEffect(() => {
        setPlants(plants);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
               
            </View>
            <SelectList
                setSelected={(val) => props.onSearchChange(val)}
                data={searchData || []}
                save="value"
                searchicon={ <AntDesign style={styles.searchIcon}
                name='search1'
                color='white'
                size={20} />} />
            <FlatList
                data={setPageData()}
                renderItem={renderCards}
                contentContainerStyle={{ paddingBottom: 30 }}
            />
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'rgba(250,250,250,0.5)',
        width: '70%',
        // position:'absolute',
        // height:70,
        // height: '100%',
    },
    searchContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 30,
    },
    searchIcon: {
        // marginLeft: 7,
        // marginTop: 15,
        // margin: 5,
        // position: 'absolute',
    },
    searchInput: {
        marginTop: 12,
        width: 60,
        height: 80,
        backgroundColor: 'rgba(250,250,250,0.5)',
        color: 'white',
        borderRadius: 4,
        paddingVertical: 4,
        paddingLeft: 32,
        // zIndex:9999 (ios)
    },
    searchGo: {
        marginLeft: 220,
        // marginBottom:30,
        // marginTop:8,
    }
});
export default SearchBar;