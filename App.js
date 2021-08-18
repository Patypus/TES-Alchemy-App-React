import React from 'react';
import { EffectDetails, EffectSearch, IngredientSearch, IngredientDetails, MainMenu } from './features';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { general } from './branding/styles';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: general.header,
          headerTintColor: '#fff'
        }}>
        <Stack.Screen 
          name={'Home'} 
          component={MainMenu} 
          options={{ title: 'Home' }}/>
        <Stack.Screen 
          name='EffectSearch' 
          component={EffectSearch} 
          options={{ title: 'Effect Search'}}/>
        <Stack.Screen 
          name='IngredientSearch'
          component={IngredientSearch}
          options={{ title: 'Ingredient Search' }}/>
        <Stack.Screen 
          name='EffectDetails'
          component={EffectDetails}
          options={({route}) => ({ title: route.params.effectName })}/>
        <Stack.Screen 
          name='IngredientDetails'
          component={IngredientDetails}
          options={({route}) => ({ title: route.params.ingredientName })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;