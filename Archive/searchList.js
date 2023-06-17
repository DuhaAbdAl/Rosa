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
  SafeAreaView,
} from "react-native";
import { data } from "../src/mokData/data";


const searchData = data;
// definition of the Item, which will be rendered in the FlatList
const Item = ({ title, image }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.img}>{image}</Text>
  </View>
);

// the filter
const List = ({ searchPhrase, setClicked, data }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item title={item.title} 
      image={item.image} 
      />;
    }
    // filter of the name
    if (item.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item title={item.title}
       image={item.image} 
      />;
    }
    // filter of the description
    // if (item.image.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
    //   return <Item title={item.title} image={item.image} />;
    // }
  };

  return (
    <SafeAreaView style={styles.list__container}>
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
    </SafeAreaView>
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
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
    color: "#333"
  },
  img: {
    height: 40,
    width: 40,
    alignSelf: "flex-start",
  },
});