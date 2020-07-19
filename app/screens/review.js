import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import ReviewList from '../components/reviewlist';
import AddReview from '../components/addreview';

let customFonts  = {
  'Avenir': require('../assets/fonts/Avenir.ttf'),
  'Futura': require('../assets/fonts/Futura.ttf'),
};




export default class Review extends React.Component  {
  state = {
    fontsLoaded: false,
    score: 0,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  
    


  componentDidMount() {
    this._loadFontsAsync();
    fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/getrecipesbyfishdish', {
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
  }

  getData() {
    return  [
    {
      
    name:"Phoebe",
    
    review: "Yum! Absolutely delicious"
    
  },
  {
    
    name:"Monica",
    
    review: "Not as simple as it looks, but if you have the patience it's absolutely worth it!"
  },
  {
    
    name:"Rachel",
    
    review: " Meh. Not the best"
  },
  ]
  }
 

  render(){
    console.log(this.getData())
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
      <Image source={require('../assets/images/menu.png')} style={styles.menu}></Image>
      <Image source={require('../assets/images/logo.png')} style={styles.logo}></Image>
      <Text style={styles.line}>Reviews{'\n'}<Text style={{color:"#379DA6"}}>Grilled Wreckfish</Text></Text>
      <ScrollView style={styles.scrollcontainer}>
      <ReviewList itemList={this.getData()}/>
      <AddReview/>
      </ScrollView>
      
    </View>
    );
    }
    else {
    return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    
  },
  scrollcontainer: {
    height:'100%',
    position:'relative',
    marginTop:'5%'
  },
  menu:{
    position:'absolute',
    height:'10%',
    width:'10%',
    resizeMode:'contain',
    left:'5%',
    top:'1%',
    zIndex:2,
  },
  logo:{
    position:'absolute',
    height:'10%',
    width:'20%',
    resizeMode:'contain',
    left:'40%',
    top:'1%',
    zIndex:2
  },
  line:{
    fontFamily:'Avenir',
    fontSize:60,
    width:'75%',
    marginLeft:'10%',
    elevation:2,
    marginTop:'20%',
    lineHeight:60,
    color:'#1C353D'
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