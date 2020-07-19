import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import FishProfile from '../components/fishprofile';


let customFonts  = {
  'Avenir': require('../assets/fonts/Avenir.ttf'),
  'Futura': require('../assets/fonts/Futura.ttf'),
};

const fishinfo =  {
  name:"Wreckfish",
  image_url:"https://www.fishwatch.gov/sites/default/files/wreckfish.png", 
  population:"Above target population level.", 
  fishing_rate:"At recommended level.", 
  score: "5",
  habitat_impacts:"Fishing gear used to catch wreckfish has minimal impacts on habitat.",
  bycatch:"Bycatch is low because fishermen use a very selective method—bottom hook-and-line gear with hydraulic reels—to catch wreckfish.",
  availability:"Fresh from mid-April through mid-January, but availability is sporadic because only a few fishermen harvest wreckfish.",
  source:"U.S. wild-caught, mostly from waters off South Carolina.",
  taste:"Wreckfish has a mild but distinct flavor similar to grouper.",
  texture:"The meat is firm and has a large flake. Its texture and consistency are similar to swordfish.",
  color:"White when raw and cooked.",
  health:"Wreckfish is a low-fat, high-protein source of B vitamins and minerals, including selenium."

}


export default class TheFish extends React.Component  {
    
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
     
     
      <FishProfile 
      name={fishinfo.name}
      image_url={fishinfo.image_url}
      population={fishinfo.population}
      fishing_rate={fishinfo.fishing_rate}
      habitat_impacts={fishinfo.habitat_impacts}
      bycatch={fishinfo.bycatch}
      score={fishinfo.score}
      availability={fishinfo.availability}
      source={fishinfo.source}
      taste={fishinfo.taste}
      texture={fishinfo.texture}
      color={fishinfo.color}
      health={fishinfo.health}
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