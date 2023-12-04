import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, TextInput } from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
// import { getAllCategory } from "../../API/Api";
import { images } from '../mokData/data';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';



// useEffect(() => {
//   getCategoreisFromApi()
// }, [])

const Data = images.map((image, index) => {
  return { lable: image.title, value: index }
});

const DropdownComponent = (item) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  // const getCategoreisFromApi = () => {
  //   getAllCategory().then(res => {
  //       console.log("res: ", res);
  //       res &&
  //           setValue(res?.all)
  //   })
  // }


  return (
    // <TextInput style={styles.input}
    // placeholder="Select Category"
    // value={category}
    // placeholderTextColor="#11182744"
    // >
    <DropDownPicker
      style={styles.input}
      items={Data}
      open={isOpen}
      setOpen={() => setIsOpen(!isOpen)}
      maxHeight={200}
      placeholder="Select Category"
      placeholderStyle={styles.placeholderStyle}
      showTickIcon={false}
      showArrowIcon={true}
      disableBorderRadios={true}
      // dropDownContainerStyle = {{backgroundColor: "green"}}
      value={value}
      setValue={(item) => setValue(item)}
      onChangeValue={setValue}
      itemTextStyle={styles.itemTextStyle}
      selectedItemLabelStyle={styles.selectedTextStyle}
      
    />
    // </TextInput>
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
    color: "#11182744",
    // color:"red",
  },
  selectedTextStyle: {
    fontSize: 20,
    color: "red",
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
    fontSize: 20,
    color: "black",
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 10,
    color: "#111827cc",
  },
  input: {
    backgroundColor: "transparent",
    height: 50,
    fontSize: 14,
    fontWeight: "500",
    // color: "#111827cc",
    color: "red",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#11182711",
    paddingHorizontal: 20,
    marginBottom: 20,
    borderColor: "#c5e1a5",

  },
});

// placeholderStyle={styles.placeholderStyle}
// selectedTextStyle={styles.selectedTextStyle}
// inputSearchStyle={styles.inputSearchStyle}
// iconStyle={styles.iconStyle}
// itemTextStyle={styles.itemTextStyle}
// data={Data}
// search
// maxHeight={300}
// labelField="lable"
// valueField="value"
// // placeholder="Select Category"
// searchPlaceholder="Search..."
// value={value}
// // onChangeText={setCategory}
// onChange={item => {
//   setValue(item);
//   console.log('title =', item.title)
// }}