import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import FishList from '../components/fishlist';


let customFonts  = {
  'Avenir': require('../assets/fonts/Avenir.ttf'),
  'Futura': require('../assets/fonts/Futura.ttf'),
};




export default class FishByState extends React.Component  {
  state = {
    fontsLoaded: false,
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
      
    name:"Wreckfish",
    image_url:"https://www.fishwatch.gov/sites/default/files/wreckfish.png", 
    population:"Above target population level.", 
    fishing_rate:"At recommended level.", 
    score: "5",
    habitat_impacts:"Fishing gear used to catch wreckfish has minimal impacts on habitat.",
    bycatch:"Bycatch is low because fishermen use a very selective method—bottom hook-and-line gear with hydraulic reels—to catch wreckfish."
  },
  {
    
    name:"Atlantic wahoo",
    image_url:"https://www.fishwatch.gov/sites/default/files/atlantic_wahoo.png", 
    population:"The population level is unknown, but presumed stable.", 
    fishing_rate:"At recommended level.", 
    score: "5",
    habitat_impacts:"Fishing gears used to harvest Atlantic wahoo have minimal impacts on habitat.",
    bycatch:"Bycatch is low because hook-and-line, cast net, and gillnet gear are selective."
  },
  ]
  }
 

  render(){
    console.log(this.getData())
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
      <Image source={require('../assets/images/menu.png')} style={styles.menu}></Image>
      <Text style={{position:'absolute',top:'4%',fontSize:30,color:'transparent',zIndex:5}} onPress={()=>this.props.navigation.navigate('Shop')}>MENU</Text>
      <Image source={require('../assets/images/logo.png')} style={styles.logo}></Image>
      <Text style={styles.line}>Best Choice for <Text style={{color:'#379DA6'}} onPress={()=>this.props.navigation.navigate('Game')}>Florida</Text></Text>
      <ScrollView style={styles.scrollcontainer}>
      <FishList itemList={this.getData()}/>
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

  
});