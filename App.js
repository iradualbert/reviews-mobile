import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState }from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
// screens
import Home from "./screens/Home";
import { globalStyles as styles } from './styles/global';
import Navigator from "./routes/HomeStack";

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  
  useEffect(() => {
    getFonts()
       .then(() => setFontLoaded(true))  
  }, [])

  if(fontLoaded){
    return <Navigator />
  } else {
    return <View style={styles.container}><Text>Loading...</Text></View>
  }
  
}



export default App;