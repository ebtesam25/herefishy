import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import SkinList from '../components/skinlist';


let customFonts  = {
  'Avenir': require('../assets/fonts/Avenir.ttf'),
  'Futura': require('../assets/fonts/Futura.ttf'),
};




export default class Skin extends React.Component  {
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
      
    name:"Barramundi Skin",
    image_url:"https://aquafind.com/FishTraders/getfile.php/aquafind_wholesaleseafoodtradingboard/1118/Barramundi%20fillets%20skin-on%20size%20100-200g,%20skin%20side.JPG", 
        price:"$100",
        prize:"TheFish"
    
  },
  {
    
    name:"Tilapia Skin",
    image_url:"https://lh3.googleusercontent.com/proxy/D6GUr6uRh4ZIWeJ8q9r8bYp-M4sVGX8LIR80_emIO-ynsg7qWo4Kl4ya2auMMmwNoBqUGu3dxgM79QVxK28uQABjPPGjW73clLhlyYel4S7fREqWk1mAGaRnC8vb5woMsEqFCNks1OMgCA", 
    price:"$200"
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
      <SkinList itemList={this.getData()}/>
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