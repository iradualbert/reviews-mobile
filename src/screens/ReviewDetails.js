import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';


const ReviewDetails = ({navigation}) => {
    const title = navigation.getParam('title');
    const rating = navigation.getParam('rating');
    const body = navigation.getParam('body');
    useEffect(() => {
        // console.log(title)
        
    }, [])
    return (
        <View style={globalStyles.container}>
            <Text> {rating} </Text>
            <Text> {title} </Text>
            <Text> {body} </Text>
        </View>
    )

}

export default ReviewDetails