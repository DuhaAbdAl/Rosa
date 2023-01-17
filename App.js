import React from 'react'
import { View } from 'react-native';


import MainNavigation from './route/nav';
import RosaProvider from './Store/RosaProvider';
const App = () => {

  return (
    <RosaProvider>
      <View style={{ flex: 1 }}>
        <MainNavigation />
      </View>
    </RosaProvider>
  )

};

export default App;
