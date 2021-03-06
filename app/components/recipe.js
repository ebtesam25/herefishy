import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Recipe({ name,image_url, ingredients,directions }) {
    const navigation = useNavigation();    
    return (
    <ScrollView style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Image source={{ uri: image_url }} style={styles.photo} />
        <View style={styles.fishdeets}>
            
            <Text style={styles.attr}>INGREDIENTS</Text>
            <Text style={styles.description}>
            {ingredients.map((value, index) => {
         return (
             <Text key={index}>
                {'•   '}{value}{'\n'}
             </Text>
          );
         })
      }
            </Text>
            <Text style={styles.attr}>DIRECTIONS</Text>
            <Text style={styles.description}>
            {directions.map((value, index) => {
         return (
             <Text key={index}>
                {index+1}{'  '}{value}{'\n'}
             </Text>
          );
         })
      }
            </Text>
            
        </View>
        <Text style={styles.nutrition} onPress={()=>navigation.navigate('Review')}>REVIEWS</Text>
        <Text style={styles.recipe} onPress={()=>navigation.navigate('RecipesOf')}>MORE LIKE THIS</Text>
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