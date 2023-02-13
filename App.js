import React, { useEffect } from 'react'
import { LogBox } from 'react-native';
import { View } from 'react-native';
import MainNavigation from './route/nav';
import RosaProvider from './Store/RosaProvider';
const express = require('express')
const App = express();//library inside our app
const mongoose = require('mongoose');
const RosaModule = require('./moduels/Rosa.module');
App.use(express.json());




// const App = () => {
//   LogBox.ignoreLogs([
//     "Warning: Encountered two children with the same key"
//   ])
  
  useEffect(() => {
    var url ="https://nameless-meadow-25389.herokuapp.com/server";
    fetch(url)
    .then (res => res.json())
    .then(resJason => console.log("response from server : ", resJason))
  },[])
  return (
    <RosaProvider>
      <View style={{ flex: 1 }}>
        <MainNavigation />
      </View>
    </RosaProvider>
  )

 

export default App;
