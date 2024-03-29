import { DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../src/screens/Home page";
import Categories from "../src/screens/Categories";
import Types from "../src/screens/Types";
// import Info from "../src/screens/Info";
import CustomDrawer from "../src/Componants/CustomDrawer";
import Icon from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ScreenName } from "./ScreenName";
import { StyleSheet } from "react-native";
// import SignIn from "../src/screens/SignIn";
// import SignUp from "../src/screens/SignUp";
import Favorite from "../src/Componants/Favorite";
import UserProfilePage from "../src/screens/UserProfile";
import MainStack from "./Stack";
import SplashScreen from "../src/screens/SplashScreen";
import IntroSlides from "../src/Componants/SlideIntroScreens";

const Drawer = createDrawerNavigator();
const MyDrawer = () => {

  const renderIcon = (color, screenName) => {
    const icons = {
      [ScreenName.HomePage]: <FontAwesome name="home" size={22} color={'black'} />,
      // [ScreenName.Favorite]: <Icon name="heart" size={22} color={'red'} />,
      [ScreenName.UserProfilePage]: <FontAwesome5 name="user-alt" size={22} color={color} />,
      // [ScreenName.Info]: <Icon name="home" size={22} color={color} />,
    }
    return icons[screenName];
  }

  const params = {
    navigator: {
      drawerContent: props => <CustomDrawer {...props} />,
      screenOptions: {
        drawerActiveBackgroundColor: '#356258',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        headerStyle: {
          backgroundColor: '#28463e'
        },
        headerTintColor: 'green',
        headerTitleAlign: 'center',
      }
    },
    homePage: {
      name: ScreenName.HomePage,
      component: HomePage,
      options: {
        headerShown: false,
        drawerIcon: ({ color }) => renderIcon(color, ScreenName.HomePage)
      }
    },
    favorite: {
      name: ScreenName.Favorite,
      component: Favorite,
      options: {
        headerShown: false,
        // drawerIcon: ({ color }) => renderIcon(color, ScreenName.Favorite)
      }
    },
    Types: {
      name: ScreenName.Types,
      component: Types,
      options: {
        headerShown: false
      }
    },
    // signUp: {
    //   name: ScreenName.SignUp,
    //   component: SignUp,
    //   options: {
    //     headerShown: false
    //   }
    // },
    UserProfilePage: {
      name: ScreenName.UserProfilePage,
      component: UserProfilePage,
      options: {
        headerShown: false,
        drawerIcon: ({ color }) => renderIcon(color, ScreenName.UserProfilePage)

      }
    }

  }
  // do another page for stack navigation and import them here
  return (
    <Drawer.Navigator
      id="LeftDrawer"
      drawerPosition='left'
      {...params.navigator}
    >
        {/* <Drawer.Screen name={'Intro'} component={IntroSlides}
      options={{
        headerShown :false
      }}/> */}
      <Drawer.Screen {...params.homePage} />
      {/* <Drawer.Screen {...params.favorite}/> */}
      <Drawer.Screen {...params.Types} />
      {/* <Drawer.Screen {...params.signUp}/> */}
      <Drawer.Screen {...params.UserProfilePage} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  CategoriesHeaderStyle: {

  }
});
export default MyDrawer;
