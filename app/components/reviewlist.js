import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ReviewRow from './reviewrow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const ReviewList = ({ itemList}) => (
    <View style={styles.container}>
        
        <FlatList
                data={itemList}
                renderItem={({ item }) => <ReviewRow
                    name={item.name}
                    image_url={item.image_url}
                    review = {item.review}
                    
                />}
            />

    </View>
);

export default ReviewList;