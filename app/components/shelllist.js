import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ShellRow from './shellrow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const ShellList = ({ itemList}) => (
    <View style={styles.container}>
        
        <FlatList
                data={itemList}
                renderItem={({ item }) => <ShellRow
                    name={item.name}
                    image_url={item.image_url}
                    price={item.price}
                    prize={item.prize}
                    
                    
                />}
            />

    </View>
);

export default ShellList;