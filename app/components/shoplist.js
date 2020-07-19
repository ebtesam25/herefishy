import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ShopRow from './shoprow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const ShopList = ({ itemList}) => (
    <View style={styles.container}>
        
        <FlatList
                data={itemList}
                renderItem={({ item }) => <ShopRow
                    name={item.name}
                    image_url={item.image_url}
                    type={item.type}
                    
                    
                />}
            />

    </View>
);

export default ShopList;