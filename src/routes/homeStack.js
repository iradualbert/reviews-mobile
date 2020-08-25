import 'react-native-gesture-handler';  // must be included, otherwise navigation stack will throw an error
import { createStackNavigator } from "react-navigation-stack";
import ReviewDetails from "../screens/ReviewDetails";
import About from "../screens/About";


const screens = {
    Home: {
        screen: About,
        navigationOptions: {
            title: 'About FeedPark',
            //  headerStyle: {
            //      backgroundColor: "#eee"
            //  }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        }
    },
   

};
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: "#eee",
            height: 60,

        }
    }
});
export default HomeStack;

