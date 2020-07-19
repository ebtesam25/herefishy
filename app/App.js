import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Splash from './screens/splash';
import FishByState from './screens/fishbystate';
import FishNutrition from './screens/fishnutrition';
import TheFish from './screens/thefish';
import RecipesOf from './screens/recipesof';
import TheRecipe from './screens/therecipe';
import Game from './screens/game';
import Review from './screens/review';
import Shop from './screens/shop';
import Skin from './screens/skin';
import Shell from './screens/shell';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Splash" 
        component={Splash} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="State" 
        component={FishByState} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="TheFish" 
        component={TheFish} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="FishNutrition" 
        component={FishNutrition} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="RecipesOf" 
        component={RecipesOf} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="TheRecipe" 
        component={TheRecipe} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Game" 
        component={Game} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Review" 
        component={Review} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Shop" 
        component={Shop} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Skin" 
        component={Skin} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Shell" 
        component={Shell} 
        options={{ headerShown: false}} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}