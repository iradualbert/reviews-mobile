import React, { useState } from 'react'
import { Text, View, Button } from 'react-native';
import { globalStyles as styles } from '../styles/global';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


const Home = ({ navigation }) => {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    const handlePress = (screen) => {
        // navigation.navigate(screen)
        navigation.push(screen);
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: "100%" }}
                data={reviews}
                renderItem={({ item, index }) => (
                    <TouchableOpacity 
                      style={styles.item}
                      onPress={() => navigation.navigate('ReviewDetails', item)}
                    >
                        <Text style={styles.titleText}>{`${index + 1} -  ${item.title}`}</Text>
                    </TouchableOpacity>
                )}
            />
            <Button title="About" onPress={() => handlePress("About")} />
        </View>
    )
}


export default Home;