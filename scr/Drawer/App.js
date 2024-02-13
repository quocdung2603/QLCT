import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Expense/Home_Screen/Home'; // Import các màn hình bạn muốn hiển thị trong drawer
import HomeSchedule from '../Screens/Schedule/HomeSchedule';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="HomeSchedule" component={HomeSchedule} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MyDrawer;
