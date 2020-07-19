import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function AddReview({ name,image_url,review}) {
    const navigation = useNavigation();

    const addr = () =>{return fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/getfishyrecipe', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "reviews": "fish tacos"
        })
})
    .then((response) => response.json())
    .then((responseJson) => {
console.log(responseJson.reviews);
    })
    .catch((error) => {
        console.error(error);
    });
  };

    
    return (
    <View style={styles.container}>
        <TextInput style={styles.name} placeholder="Name"></TextInput>
        
        <TextInput style={styles.score} placeholder="Review"></TextInput>
        <Text style={styles.deets} onPress={()=>this.addr()}>SUBMIT</Text>
        
        
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
        
        width:375,
        height:200,
        
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
        resizeMode:'contain',
        
        
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
        fontSize:25,
        fontFamily:'Futura',
        position:'absolute',
        top:'25%',
        left:'7%',
        
        padding:'5%',
        borderRadius:35,
        color:'#379DA6',
       
        textAlignVertical:'center',
        marginRight:'15%',
    },
    attr:{
        fontFamily:'Avenir',
        fontSize:20,
        color:'#1C353D'
    },
    description: {
        fontSize: 18,
        fontFamily:'Futura',
        color:'#379DA6'
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
       marginTop:'20%',
       marginBottom:'7.5%',
   }
});