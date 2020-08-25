import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ReviewDetail from "../screens/ReviewDetail";
import About from "../screens/About";


const screens = {
    Home: {
         screen: Home
     },
     ReviewDetail: {
         screen: ReviewDetail
     },
     About: {
         screen: About
     }
    
};
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);