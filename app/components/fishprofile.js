import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function FishProfile({ name,image_url, population, fishing_rate, habitat_impacts, bycatch,score, availability, source, taste, texture, color, health }) {
    const navigation = useNavigation();    
    return (
    <ScrollView style={styles.container}>
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
            <Text style={styles.attr}>AVAILABILITY</Text>
            <Text style={styles.description}>
                {availability}
            </Text>
            <Text style={styles.attr}>SOURCE</Text>
            <Text style={styles.description}>
                {source}
            </Text>
            <Text style={styles.attr}>TASTE</Text>
            <Text style={styles.description}>
                {taste}
            </Text>
            <Text style={styles.attr}>TEXTURE</Text>
            <Text style={styles.description}>
                {texture}
            </Text>
            <Text style={styles.attr}>COLOR</Text>
            <Text style={styles.description}>
                {color}
            </Text>
            <Text style={styles.attr}>HEALTH BENEFITS</Text>
            <Text style={styles.description}>
                {health}
            </Text>
        </View>
        <Text style={styles.nutrition} onPress={()=>navigation.navigate('FishNutrition')}>NUTRITION</Text>
        <Text style={styles.recipe} >RECIPES</Text>
    </ScrollView>
)}
 


const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 100,
        marginBottom: 8,
        borderRadius: 60,
        backgroundColor: '#D7EBED',
        alignSelf:'center',
        paddingBottom:20,
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
        resizeMode:'contain'
        
        
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
        right:'5%',
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
   nutrition:{
       borderRadius:30,
       fontFamily:'Avenir',
       elevation:2,
       backgroundColor:'#379DA6',
       color:'#FFF',
       fontSize:11,
       padding:'5%',
       textAlign:'center',
       width:'30%',
       left:'5%',
       marginTop:'5%',
       marginBottom:'7.5%',
   },
   recipe:{
    borderRadius:30,
    fontFamily:'Avenir',
    elevation:2,
    backgroundColor:'#379DA6',
    color:'#FFF',
    fontSize:11,
    padding:'5%',
    textAlign:'center',
    width:'30%',
    right:'5%',
    bottom:'0%',
    height:'3.25%',
    marginBottom:'7.5%',
    position:'absolute',
    textAlignVertical:'center',

}
});