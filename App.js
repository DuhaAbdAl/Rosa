import React from 'react'
import { LogBox } from 'react-native';
import { View } from 'react-native';


import MainNavigation from './route/nav';
import RosaProvider from './Store/RosaProvider';
const App = () => {

  LogBox.ignoreLogs([
    "Warning: Encountered two children with the same key"
  ])
  
  return (
    <RosaProvider>
      <View style={{ flex: 1 }}>
        <MainNavigation />
      </View>
    </RosaProvider>
  )

};

export default App;
