import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import GameRow from './gamerow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const GameList = ({ itemList}) => (
    <View style={styles.container}>
        
        <FlatList
                data={itemList}
                renderItem={({ item }) => <GameRow
                    name={item.name}
                    image_url={item.image_url}
                    score = {item.score}
                    
                />}
            />

    </View>
);

export default GameList;