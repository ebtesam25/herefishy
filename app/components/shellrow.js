import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ShellRow({ name,image_url, price, prize}) {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Image source={{ uri: image_url }} style={styles.photo} />
        <Text style={styles.attr}>PRICE</Text>
        <Text style={styles.description}>{price}</Text>
        <Text style={styles.deets} onPress={()=>navigation.navigate(prize)}>BUY</Text>
    </View>
)}



const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 60,
        backgroundColor: '#D7EBED',
        alignSelf:'center',
        justifyContent:'center',
        width:375
        
    },
    name: {
        fontSize: 30,
        color: '#000',
        fontFamily:'Avenir',
        marginTop: '5%',
        marginLeft:'10%',
    },
     photo: {
        height: 225,
        width: 300,
        justifyContent:'center',
        paddingHorizontal:'10%',
        borderRadius:30,
        marginTop:'2%',
        alignSelf:'center',
        
        
    },
    fishdeets: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 30,
        marginTop:20,
        marginRight: 30,
        justifyContent: 'center',
        
    },
    score:{
        fontSize:40,
        fontFamily:'Avenir',
        position:'absolute',
        top:'5%',
        right:'-2%',
        backgroundColor:'#379DA6',
        padding:'5%',
        borderRadius:35,
        color:'#fff',
        width:70,
        height:70,
        textAlignVertical:'center',
        textAlign:'center',
    },
    attr:{
        fontFamily:'Avenir',
        fontSize:20,
        color:'#1C353D',
        marginLeft:'10%',
        marginTop:'2%'
    },
    description: {
        fontSize: 18,
        fontFamily:'Futura',
        color:'#379DA6',
        marginLeft:'10%',
        marginTop:'2%'
    },
   deets:{
       borderRadius:30,
       fontFamily:'Avenir',
       elevation:2,
       backgroundColor:'#379DA6',
       color:'#FFF',
       fontSize:15,
       padding:'5%',
       textAlign:'center',
       width:'50%',
       left:'22.5%',
       marginTop:'5%',
       marginBottom:'7.5%',
   }
});