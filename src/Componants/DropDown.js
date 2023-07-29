import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { getAllCategory } from "../../API/Api";
import {images} from '../mokData/data';

const Data = images.map((image , index) => {
  return {value: index , lable:image.title}
} );

 // useEffect(() => {
  //   getCategoreisFromApi()
  // }, [])


const DropdownComponent = () => {
  const [value, setValue] = useState(null);

  // const getCategoreisFromApi = () => {
  //   getAllCategory().then(res => {
  //       console.log("res: ", res);
  //       res &&
  //           setIsFocus(res?.all)
  //   })
  // }
  
 
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      itemTextStyle={styles.itemTextStyle}
      data={Data}
      search
      maxHeight={300}
      labelField="lable"
      valueField="value"
      placeholder="Select Category"
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item);
        console.log('title =', item.title)
      }}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "#c5e1a5",
    borderBottomWidth: 1,
  },
  placeholderStyle: {
    fontSize: 15,
    color: "white",
  },
  selectedTextStyle: {
    fontSize: 15,
    color: "white",
  },
  iconStyle: {
    width: 25,
    height: 25,
    color: "white",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: "black",
  },
  itemTextStyle: {
    fontSize: 15,
    color: "black",
  }
});