import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Expense/Home_Screen/Home'; // Import các màn hình bạn muốn hiển thị trong drawer
import HomeSchedule from '../Screens/Schedule/Home_Screens/HomeSchedule';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Drawer.Screen name="HomeSchedule" component={HomeSchedule} options={{headerShown: false}} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MyDrawer;
