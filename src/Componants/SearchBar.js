// import { StyleSheet, View, TextInput } from "react-native";
// import React from "react";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import Feather from "react-native-vector-icons/Feather";
// import { SelectList } from "react-native-dropdown-select-list";
// import { useState } from "react";
// import { data } from "../mokData/data";
// import { useContext } from "react";
// import RosaContext from "../../Store/RosaContext";
// import Cards from "../assets/Cards";
// import { useEffect } from "react";
// import { FlatList } from "react-native";
// import { color } from "react-native-reanimated";

// const SearchBar = (props) => {
//     // const RosaContext = useContext(RosaContext);
//     const { searchText, setSearchText } = useContext(RosaContext);
//     const [plants, setPlants] = useState([]);

//     const searchData = data.map((item, index) => {
//         return { key: index, value: item, text: item.title }
//     })

//     searchData.unshift({ key: 999, value: 'all', text: '' })

//     const renderSearchData = () => {
//         const res = filterData.map(filterSearchData =>
//             <Text>
//                 {filterSearchData.title}
//             </Text>
//         )
//         return res;
//     }
//     const renderCards = ({ item }) => {

//         return <Cards {...item} />
//     };
//     useEffect(() => {
//         setPlants(plants);
//     }, [])
//     const onSearchChange = (val) => {
//         setSearchText(val)
//     }
//     const setPageData = () => {
//         if (!searchText || searchText == 'all') {
//             return plants;
//         }
//         // const filterdData = data.find(plant => plant.title === searchText).plant;
//         // return filterdData;
//     };
//     useEffect(() => {
//         setPlants(plants);
//     }, [])

//     return (
//         <View style={styles.container}>
//             <SelectList
//                 setSelected={(val) => props.onSearchChange(val)}
//                 data={searchData || [] }
//                 save="value"
//                 searchicon={ <Feather name="search" color={"white"} size={20} />}
//                 arrowicon={<AntDesign name="down" color={"black"} size={18}/>}
//                 boxStyles={styles.box}
//                 placeholder="Search" 
//                 />
//             <FlatList
//                 data={setPageData()}
//                 renderItem={renderCards}
//                 contentContainerStyle={{ paddingBottom: 30 }}
//             />
//         </View>

//     )
// };

// const styles = StyleSheet.create({
//     container: {
//         width: '70%',
//         marginTop:15,
//         alignSelf:'center'
//     },
//     searchIcon: {
//         marginLeft: 7,
//         marginTop: 15,
//         margin: 5,
//         // position: 'absolute',
//     },
//     searchInput: {
//         marginTop: 12,
//         width: 60,
//         height: 80,
//         backgroundColor: 'rgba(250,250,250,0.5)',
//         color: 'white',
//         borderRadius: 4,
//         paddingVertical: 4,
//         paddingLeft: 32,
//         // zIndex:9999 (ios)
//     },
//     searchGo: {
//         marginLeft: 220,
//     },
//     box:{
//         backgroundColor:"rgba(250,250,250, 0.9)",
//         height:45
//     }
// });
// export default SearchBar;

import { StyleSheet, View, Button, TextInput, ImageBackground, Keyboard } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import LinearGradient from "react-native-linear-gradient";


const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
    return (

        <View style={styles.container}>
            <LinearGradient
             colors={['#08d4c4', '#01ab9d']}
             style={
                clicked ? styles.searchBarClicked : styles.searchBarUnclicked
            }
            >
                    <AntDesign
                        name='search1'
                        color='white'
                        size={25}
                        style={{ marginLeft: 10 }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        value={searchPhrase}
                        onChangeText={setSearchPhrase}
                        onFocus={() => {
                            setClicked(true);
                        }}
                        // keyboardType="numeric"
                    />
                    {clicked && (
                        <Entypo name="cross" size={25} color="black" style={{ marginRight: 10 }} onPress={() => {
                            Keyboard.dismiss() , setSearchPhrase("");
                            setClicked(false); 
                        }} />
                    )}
            </LinearGradient>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        alignSelf: 'center',
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",

    },
    searchBarUnclicked: {
        padding: 10,
        marginLeft: 15,
        marginTop: 20,
        flexDirection: "row",
        width: "95%",
        height: 60,
        // backgroundColor: 'rgba(50,50,50,0.4)',
        borderRadius: 15,
        alignItems: "center",
        borderColor: "#333",
        borderWidth: 1,

    },
    searchBarClicked: {
        padding: 10,
        marginLeft: 15,
        marginTop: 20,
        flexDirection: "row",
        width: "95%",
        // backgroundColor: 'rgba(50,50,50,0.4)',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#333",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 18,
        color: 'white',
        marginLeft: 10,
        marginTop: -10,
        marginBottom: -8,
        width: "90%",
    },

});
export default SearchBar;