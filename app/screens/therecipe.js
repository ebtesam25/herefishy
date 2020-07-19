import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Recipe from '../components/recipe';
import ReviewList from '../components/reviewlist';


let customFonts  = {
  'Avenir': require('../assets/fonts/Avenir.ttf'),
  'Futura': require('../assets/fonts/Futura.ttf'),
};

const fishinfo =  {
    name:"Grilled Wreckfish",
    image_url:"https://www.greedygourmet.com/wp-content/uploads/2018/12/grilledwreckfish.jpg", 
    "ingredients": ["4 wreckfish fillet, skin-on, weighing 200g (7oz) each",
      "60ml (1 tbsp) olive oil",
      "Salt"],
    "directions": ["Brush each fish fillet all over with olive oil.",
      "Fry the fillets skin side down in a hot frying pan until the skin is crisp. Turn the fish over and cook for another 2 minutes or until cooked through.",
     " Season and serve immediately."]
}
const review =  {
  name:"Ebtesam",
  review:"Super delicious!"
}
  
    


export default class TheRecipe extends React.Component  {
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
     
     <ScrollView>
      <Recipe 
      name={fishinfo.name}
      image_url={fishinfo.image_url}
      ingredients={fishinfo["ingredients"]}
      directions={fishinfo["directions"]} 
      />
      
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
  

  
});