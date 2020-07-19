import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import RecipeRow from './reciperow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const RecipeList = ({ itemList}) => (
    <View style={styles.container}>
        
        <FlatList
                data={itemList}
                renderItem={({ item }) => <RecipeRow
                    name={item.name}
                    image_url={item.image_url}
                    
                    
                />}
            />

    </View>
);

export default RecipeList;