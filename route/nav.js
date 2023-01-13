import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomePage from "../src/screens/Home page";
import Info from "../src/screens/Info";
import Types from "../src/screens/Types";
import MyDrawer from "./Drawer";
import { ScreenName } from "./ScreenName";
import SignIn from "../src/screens/SignIn";
import SignUp from "../src/screens/SignUp";
import SearchHome from "../src/Componants/SearchHome";
import Categories from "../src/screens/Categories";
import CustomHeader from "../src/Componants/CustomHeader";


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
                }}
                >
                <Stack.Screen name={ScreenName.HomePage} component={HomePage}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Drawer" component={MyDrawer}
                    options={{ headerShown: false, }} />
                <Stack.Screen name={ScreenName.Types} component={Types} 
                 options={{ headerShown: false, }}/>
                <Stack.Screen name={ScreenName.Info} component={Info}
                 options={{ headerShown: false, }}
                    // options={({route})=>({
                    //     title: route.params.title
                    //       })} 
                    />
                     <Stack.Screen name={ScreenName.Categories} component={Categories}
                    options={{ headerShown: false, }} />
                <Stack.Screen name={ScreenName.SearchHome} component={SearchHome}
                    options={{ headerShown: false }} />
                <Stack.Screen name={ScreenName.CustomHeader} component={CustomHeader}/>
                 {/* <Stack.Screen name={ScreenName.CustomButton} component={CustomButton}
                 options={{
                    headerShown: false,
                }} /> */}
                <Stack.Screen name={ScreenName.SignUp} component={SignUp}/> 
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default MainNavigation;
