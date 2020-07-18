import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import FishRow from './fishrow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const FishList = ({ itemList }) => (
    <View style={styles.container}>
        
        <FlatList
                data={itemList}
                renderItem={({ item }) => <FishRow
                    name={item.name}
                    image_url={item.image_url}
                    population={item.population} 
                    fishing_rate={item.fishing_rate} 
                    habitat_impacts={item.habitat_impacts} 
                    bycatch={item.bycatch}
                />}
            />

    </View>
);

export default FishList;