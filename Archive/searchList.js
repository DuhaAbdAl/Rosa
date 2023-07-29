// import React from "react";
// import {
//     StyleSheet,
//     Text,
//     View,
//     FlatList,
// } from "react-native";
// import { data } from "../src/mokData/data";

// const Item = ({ name, details }) => (
//     <View style={styles.item}>
//         <Text style={styles.title}>{name}</Text>
//         <Text style={styles.details}>{details}</Text>
//     </View>
// );

// const List = ({ searchPhrase, setCLicked}) => {
//     const renderItem = ({ item }) => {
//         if (searchPhrase === "") {
//             return <Item name={item.title} />;
//         }
//         if (item.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
//             return <Item name={item.name} details={item.details} />;
//         }
//     //     if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
//     //         return <Item name={item.name} details={item.details} />;
//     //     }
//     };

//     return (
//         <View style={styles.listContainer}>
//             <View
//                 onStartShouldSetResponder={() => {
//                     setCLicked(false);
//                 }}
//             >
//                 <FlatList
//                     data={data}
//                     renderItem={renderItem}
//                     keyExtractor={(item) => item.id}
//                 />
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     listContainer: {
//         margin: 10,
//         height: "85%",
//         width: "100%",
//     },
//     item: {
//         margin: 30,
//         borderBottomWidth: 2,
//         borderBottomColor: "lightgrey"
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: "bold",
//         marginBottom: 5,
//         fontStyle: "italic",
//     },
// });
// export default List;

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { data } from "../src/mokData/data";
import { ScreenName } from "../route/ScreenName";



const searchData = data;
// definition of the Item, which will be rendered in the FlatList
const Item = ({ title, image }) => (
  <View style={styles.item}>
    <Image style={styles.img} source={image} />
    <Text style={styles.title}> {title} </Text>
  </View>
);

// the filter
const List = ({ searchPhrase, setClicked, data }) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return (
        <Pressable onPress={() => { navigation.navigate(ScreenName.CardInfo, { name: item.title }) }}>
          <Item image={item.image} title={item.title} />
        </Pressable>
      )
    }
    // filter of the name
    if (item.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return (
        <Pressable onPress={() => { navigation.navigate(ScreenName.CardInfo, { name: item.title }) }}>
          <Item title={item.title} image={item.image} />
        </Pressable>
      )
    }
    // filter of the description
    // if (item.image.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
    //   return <Item title={item.title} image={item.image} />;
    // } 
  };

  // const renderList = ({ item }) => {
  //   return <searchNav item={item} />;
  // };

  return (
    <View style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
        <FlatList
          data={searchData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",

  },
  item: {
    margin: 20,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
    flexDirection: "row"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#333",
    marginTop: 15,
  },
  img: {
    height: 70,
    width: 75,
    marginRight: 10,
  },
});