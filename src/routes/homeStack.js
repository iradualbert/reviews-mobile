import 'react-native-gesture-handler';  // must be included, otherwise navigation stack will throw an error
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import About from "../screens/About";


const screens = {
    Home: {
         screen: Home
     },
     ReviewDetails: {
         screen: ReviewDetails
     },
     About: {
         screen: About
     }
    
};
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);

