import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomePage from "../src/screens/Home page";
import Info from "../src/screens/Info";
import Types from "../src/screens/Types";
import MyDrawer from "./Drawer";
import { ScreenName } from "./ScreenName";
// import SignIn from "../src/screens/SignIn";
import SignUp from "../src/screens/Sign_up";
import SearchHome from "../src/Componants/SearchHome";
import Categories from "../src/screens/Categories";
import CustomHeader from "../src/Componants/CustomHeader";
import IconContainer from "../src/Componants/IconContainer";
import UserProfilePage from "../src/screens/UserProfile";
import Schedule from "../src/Componants/Schedule";
import Favorite from "../src/Componants/Favorite";
import EditProfile from "../src/screens/EditProfile";
import CardInfo from "../src/screens/CardInfo";
import SignIn from "../src/screens/Sign_in";
import IntroSlides from "../src/screens/SlideIntroScreens";
import SearchList from "../src/Componants/searchList";


const MainStack = (props) => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Drawer"
            screenOptions={{
                headerStyle: {
                    // backgroundColor: '#28463e'
                },
                headerTintColor: 'teal',
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
                options={{ headerShown: false, }} />
            {/* <Stack.Screen name={ScreenName.Info} component={Info}
                    options={{ headerShown: false, }} /> */}
            <Stack.Screen name={ScreenName.Categories} component={Categories}
                options={{ headerShown: false, }} />
            <Stack.Screen name={ScreenName.SearchHome} component={SearchHome}
                options={{ headerShown: false }} />
            <Stack.Screen name={ScreenName.CustomHeader} component={CustomHeader} />
            <Stack.Screen name={ScreenName.SlideIntroScreens} component={IntroSlides}
                options={{ headerShown: false }} />
            <Stack.Screen name={ScreenName.SignIn} component={SignIn}
                options={{ headerShown: false }} />
            <Stack.Screen name={ScreenName.SignUp} component={SignUp}
                options={{ headerShown: false }} />
            <Stack.Screen name={ScreenName.IconContainer} component={IconContainer} />
            <Stack.Screen name={ScreenName.UserProfilePage} component={UserProfilePage}
                options={{ headerShown: false }} />
            <Stack.Screen name={ScreenName.Schedule} component={Schedule}
                options={{ headerShown: false }} />
            <Stack.Screen name={ScreenName.Favorite} component={Favorite}
                options={{ headerShown: false }} />
            <Stack.Screen name={ScreenName.EditProfile} component={EditProfile} />
            <Stack.Screen name={ScreenName.CardInfo} component={CardInfo}
                options={{ headerShown: false }} />
            <Stack.Screen name={ScreenName.searchList} component={SearchList}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
};
// Schedule
export default MainStack;
