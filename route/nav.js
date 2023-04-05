import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomePage from "../src/screens/Home page";
import MyDrawer from "./Drawer";
// import Stack from "./Stack";
import { ScreenName } from "./ScreenName";
import MainStack from "./Stack";



const MainNavigation = (props) => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name={"MainStack"} component={MainStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default MainNavigation;
