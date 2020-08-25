import 'react-native-gesture-handler';  // must be included, otherwise navigation stack will throw an error
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import About from "../screens/About";


const screens = {
    About: {
        screen: Home,
        navigationOptions: {
            title: 'FeedPark',
        }
    },
   

};

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: "#eee",
            height: 60,

        }
    }
});
export default AboutStack;

