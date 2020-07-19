import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import ShopList from '../components/shoplist';


let customFonts  = {
  'Avenir': require('../assets/fonts/Avenir.ttf'),
  'Futura': require('../assets/fonts/Futura.ttf'),
};




export default class Shop extends React.Component  {
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
  }

  getData() {
    return  [
    {
      
    name:"Fish Skin",
    image_url:"https://fashionunited.com/images/201911/Fish-Skin-1.jpg", 
    type:'Skin'
 
    
  },
  {
    
    name:"Shellfish Shells",
    image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVq2aGje0Y8vc_IRXdOnyo25G94hOEwvSUrQ&usqp=CAU", 
    type:'Shell'
  },
  {
    
    name:"Fish Trimmings",
    image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIuQD4zA79Aq8UAGBuZXFT8fRlUhNmPy3iaA&usqp=CAU", 
    
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
      <Text style={styles.line}>Marketplace</Text>
      <ScrollView style={styles.scrollcontainer}>
      <ShopList itemList={this.getData()}/>
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
    fontSize:55,
    width:'75%',
    marginLeft:'10%',
    elevation:2,
    marginTop:'20%',
    lineHeight:60,
    color:'#1C353D'
  },

  
});