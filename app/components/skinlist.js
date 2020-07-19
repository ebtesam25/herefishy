import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import SkinRow from './skinrow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const SkinList = ({ itemList}) => (
    <View style={styles.container}>
        
        <FlatList
                data={itemList}
                renderItem={({ item }) => <SkinRow
                    name={item.name}
                    image_url={item.image_url}
                    price={item.price}
                    prize={item.prize}
                    
                    
                />}
            />

    </View>
);

export default SkinList;