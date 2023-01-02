import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomePage from "../src/screens/Home page";
import Info from "../src/screens/Info";
import Types from "../src/screens/Types";
import MyDrawer from "./Drawer";
import { ScreenName } from "./ScreenName";
import { Image } from "react-native";
import Header from "../src/Componants/Header";
import SignIn from "../src/screens/SignIn";
import SignUp from "../src/screens/SignUp";
import SearchHome from "../src/Componants/SearchHome";


const MainNavigation = (props) => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Drawer"
                // options={ 
                // HeaderLeft={Header}
                // }
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#28463e'
                    },
                    headerTintColor: 'green',
                    headerTitleAlign: 'center',
                }}>
                <Stack.Screen name={ScreenName.HomePage} component={HomePage}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Drawer" component={MyDrawer}
                    options={{ headerShown: false, }} />
                <Stack.Screen name={ScreenName.Types} component={Types} />
                <Stack.Screen name={ScreenName.Info} component={Info}
                    options={{ headerShown: false, }} />
                <Stack.Screen name={ScreenName.SearchHome} component={SearchHome}
                    options={{ headerShown: false, }} />
                {/* <Stack.Screen name={ScreenName.SignUp} component={SignUp}
                 options={{
                    headerShown: false,
                }} />
                <Stack.Screen name={ScreenName.SignIn} component={SignIn}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default MainNavigation;
