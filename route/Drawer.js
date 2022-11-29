import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../src/screens/Home page"
import Categories from "../src/screens/Categories";

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
    return (
      <Drawer.Navigator
      screenOptions={{
        headerStyle: {
            backgroundColor: 'black'
        },
        headerTintColor: 'green',
        headerTitleAlign:'center',
    }}>
        <Drawer.Screen name="Home" component={HomePage} 
         options={{
            headerShown: false,
        }
        }/>
        <Drawer.Screen name="Categories" component={Categories} />
      </Drawer.Navigator>
    );
  }
export default MyDrawer;
