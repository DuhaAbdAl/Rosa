import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import MainNavigation from './route/nav';
const App = () => {
  
  return (

    <View style={{ flex: 1 }}>
      <MainNavigation/>
    </View>
  )

};

export default App;
