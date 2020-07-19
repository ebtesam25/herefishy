import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Nutririon from '../components/nutrition';


let customFonts  = {
  'Avenir': require('../assets/fonts/Avenir.ttf'),
  'Futura': require('../assets/fonts/Futura.ttf'),
};

const fishinfo =  {
    name:"Wreckfish",
    image_url:"https://www.fishwatch.gov/sites/default/files/wreckfish.png", 
    "servings":"1",
    "serving weight":"100 g (raw)",
    "calories":"79",
    "protein":"15.3 g",
    "fat total":"1.5 g",
    "saturated fatty acids total":" 0 g",
    "carbohydrate":"0 g",
    "sugars total":"0 g",
    "fiber total dietary":"0 g",
    "cholesterol":"52 mg",
    "selenium":"36.5 mcg",
    "sodium":"287 mg",
     
  }
    


export default class FishNutrition extends React.Component  {
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

 
   

  render(){
    console.log(fishinfo.name)
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
      <Image source={require('../assets/images/menu.png')} style={styles.menu}></Image>
      <Image source={require('../assets/images/logo.png')} style={styles.logo}></Image>
     
     
      <Nutririon 
      name={fishinfo.name}
      image_url={fishinfo.image_url}
      servings={fishinfo["servings"]}
      serving_weight={fishinfo["serving weight"]} 
      calories={fishinfo["calories"]} 
      protein={fishinfo["protein"]} 
      fat={fishinfo["fat total"]} 
      saturated={fishinfo["saturated fatty acids total"]} 
      carbohydrate={fishinfo["carbohydrate"]} 
      sugars={fishinfo["sugars total"]} 
      fiber={fishinfo["fiber total dietary"]} 
      cholesterol={fishinfo["cholesterol"]} 
      selenium={fishinfo["selenium"]} 
      sodium={fishinfo["sodium"]} 
      />
     
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
  

  
});