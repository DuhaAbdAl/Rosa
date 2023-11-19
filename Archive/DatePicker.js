// import { SelectList } from 'react-native-dropdown-select-list'
// // import {images} from '../mokData/data';
// import React, { useState } from 'react';
// import { StyleSheet } from 'react-native';
// import { FontAwesome } from 'react-native-vector-icons/FontAwesome';
// import { images } from '../src/mokData/data';

// const DropDownText = () => {

// //   const [selected, setSelected] = React.useState("");
  
// //   const data =  images.map((image , index) => {
// //     return {value: index , lable:image.title}
// //   } );

// //   return(
// //     <SelectList 
// //         setSelected={(val) => setSelected(val)} 
// //         data={data} 
// //         save="value"
// //     />
// //   )

// // };
// // const App = () => {

//     const [selected, setSelected] = useState("");
    
//     const data = images.map((image , index) => {
//         return {value: index , lable:image.title}
//       } );
  
//     return(
//       <SelectList 
//         onSelect={() => alert(selected)}
//         setSelected={setSelected} 
//         fontFamily='lato'
//         data={data}  
//         arrowicon={
//         <FontAwesome 
//         name="chevron-down" 
//         size={12} 
//         color='black' 
//         />} 
//         searchicon={
//         <FontAwesome 
//         name="search" 
//         size={12} 
//         color='black' />} 
//         search={false} 
//         boxStyles={{borderRadius:0}} //override default styles
//         defaultOption={{ key:'1', value: (value) }}   //default selected option
//       />
//     )
  
//   };
  
//   export default DropDownText;
//   const styles = StyleSheet.create({
    
//   })