import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';


const FishRow = ({ name,image_url, population, fishing_rate, habitat_impacts, bycatch,score }) => (
    <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Image source={{ uri: image_url }} style={styles.photo} />
        <View style={styles.fishdeets}>
            <Text style={styles.score}>{score}</Text>
            <Text style={styles.attr}>POPULATION</Text>
            <Text style={styles.description}>
                {population}
            </Text>
            <Text style={styles.attr}>FISHING RATE</Text>
            <Text style={styles.description}>
                {fishing_rate}
            </Text>
            <Text style={styles.attr}>HABITAT IMPACTS</Text>
            <Text style={styles.description}>
                {habitat_impacts}
            </Text>
            <Text style={styles.attr}>BYCATCH</Text>
            <Text style={styles.description}>
                {bycatch}
            </Text>
        </View>
        <Text style={styles.deets} >DETAILS</Text>
    </View>
);

export default FishRow;

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
        justifyContent: 'center',
        
    },
    score:{
        fontSize:40,
        fontFamily:'Avenir',
        position:'absolute',
        top:'5%',
        right:'20%',
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
       marginTop:'5%',
       marginBottom:'7.5%',
   }
});