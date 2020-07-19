import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import RecipeList from '../components/recipelist';


let customFonts  = {
  'Avenir': require('../assets/fonts/Avenir.ttf'),
  'Futura': require('../assets/fonts/Futura.ttf'),
};




export default class RecipesOf extends React.Component  {
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
      
    name:"Poached Wreckfish with Leek Veloute and Rock Shrimp",
    image_url:"https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=750&h=393&url=https%3A%2F%2Fassets.marthastewart.com%2Fstyles%2Fwmax-750%2Fd61%2Fmartha-stewart-cooking-school-veloute-am-687-d110633_20130923%2Fmartha-stewart-cooking-school-veloute-am-687-d110633_20130923_horiz.jpg%3Fitok%3D0BubgMPn", 
    
  },
  {
    
    name:"Grilled Wreckfish",
    image_url:"https://www.greedygourmet.com/wp-content/uploads/2018/12/grilledwreckfish.jpg", 
    
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
      
      <ScrollView style={styles.scrollcontainer}>
      <RecipeList itemList={this.getData()}/>
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
    marginTop:'20%'
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