import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomePage from "../src/screens/Home page";
import Info from "../src/screens/Info";
import Types from "../src/screens/Types";
import { ScreenName } from "./ScreenName";


const MainNavigation = (props) => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={ScreenName.HomePage} component={HomePage} />
                <Stack.Screen name={ScreenName.Types} component={Types} />
                <Stack.Screen name={ScreenName.Info} component={Info} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default MainNavigation;
