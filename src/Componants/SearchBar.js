import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { data } from "../mokData/data";
import { useContext } from "react";
import RosaContext from "../../Store/RosaContext";
import Cards from "../assets/Cards";
import { useEffect } from "react";
import { FlatList } from "react-native";
import { color } from "react-native-reanimated";

const SearchBar = (props) => {
    // const RosaContext = useContext(RosaContext);
    const { searchText, setSearchText } = useContext(RosaContext);
    const [plants, setPlants] = useState([]);

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
        // const filterdData = data.find(plant => plant.title === searchText).plant;
        // return filterdData;
    };
    useEffect(() => {
        setPlants(plants);
    }, [])

    return (
        <View style={styles.container}>
            <SelectList
                setSelected={(val) => props.onSearchChange(val)}
                data={searchData || []}
                save="value"
                searchicon={ <Feather name="search" color={"white"} size={20} />}
                arrowicon={<AntDesign name="down" color={"white"} size={18}/>}
                boxStyles={styles.box}
                // boxStyles={{backgroundColor:"rgba(250,250,250,0.45)", height:45,}}
                placeholder="Search"
                />
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
        width: '70%',
        marginTop:15,
        alignSelf:'center'
    },
    searchIcon: {
        marginLeft: 7,
        marginTop: 15,
        margin: 5,
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
    },
    box:{
        backgroundColor:"rgba(250,250,250,0.45)",
        height:45
    }
});
export default SearchBar;