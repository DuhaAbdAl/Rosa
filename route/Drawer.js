import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../src/screens/Home page";
import Categories from "../src/screens/Categories";
import Types from "../src/screens/Types";
import Info from "../src/screens/Info";
import CustomDrawer from "../src/Componants/CustomDrawer";
import Icon from "react-native-vector-icons/AntDesign";
import { ScreenName } from "./ScreenName";
import { StyleSheet } from "react-native";
import SignIn from "../src/screens/SignIn";
import SignUp from "../src/screens/SignUp";
import Favorite from "../src/Componants/Favorite";

const Drawer = createDrawerNavigator();
const MyDrawer = () => {

  const renderIcon = (color, screenName) => {
    const icons = {
      [ScreenName.HomePage]: <Icon name="home" size={22} color={color} />,
      [ScreenName.Categories]: <Icon name="home" size={22} color={color} />,
      [ScreenName.Types]: <Icon name="home" size={22} color={color} />,
      [ScreenName.Info]: <Icon name="home" size={22} color={color} />,
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
    categoriesPage: {
      name: ScreenName.Categories,
      component: Categories,
      options: {
        headerShown:false , 
        drawerStyle: styles.CategoriesHeaderStyle,
        drawerIcon: ({ color }) => renderIcon(color , ScreenName.Categories)
      }
    }, 
    types:{
      name:ScreenName.Types,
      component: Types,
      options:{
        headerShown:false
        }
    },
    info:{
      name: ScreenName.Info,
      component: Info,
      options:{
        headerShown:false
        }
    },
    signIn:{
      name: ScreenName.SignIn,
      component: SignIn,
      options:{
      headerShown:false
      }
    },
    signUp:{
      name: ScreenName.SignUp,
      component: SignUp,
      options:{
      headerShown:false
      }
    },
    favorite:{
      name: ScreenName.Favorite,
      component: Favorite,
      options:{
        headerShown:false
        }
    },
  }

  return (
    <Drawer.Navigator 
    drawerPosition = 'right'
    {...params.navigator} >
      <Drawer.Screen {...params.homePage} />
      <Drawer.Screen {...params.categoriesPage} />
      <Drawer.Screen {...params.types} />
      <Drawer.Screen {...params.info} />
      <Drawer.Screen {...params.signIn}/>
      <Drawer.Screen {...params.signUp}/>
      <Drawer.Screen {...params.favorite}/>
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  CategoriesHeaderStyle: {

  }
});
export default MyDrawer;
