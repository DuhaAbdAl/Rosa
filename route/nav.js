import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Categories from "../src/screens/Categories";
import HomePage from "../src/screens/Home page";
import Info from "../src/screens/Info";
import Types from "../src/screens/Types";
import MyDrawer from "./Drawer";
import { ScreenName } from "./ScreenName";


const MainNavigation = (props) => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Drawer"  
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'black'
                },
                headerTintColor: 'green',
                headerTitleAlign:'center',
            }}>
                <Stack.Screen name={ScreenName.HomePage} component={HomePage} 
                options={{
                    headerShown: false,
                }
                }
                />
                <Stack.Screen name="Drawer" component={MyDrawer}
                options={{headerShown: false,}}/>
                <Stack.Screen name={ScreenName.Types} component={Types} />
                <Stack.Screen name={ScreenName.Info} component={Info} />
                <Stack.Screen name={ScreenName.Categories} component={Categories}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default MainNavigation;
