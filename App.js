import React from 'react';
import { EffectDetails, EffectSearch, IngredientSearch, IngredientDetails, MainMenu } from './features';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={MainMenu}/>
        <Stack.Screen 
          name='EffectSearch' 
          component={EffectSearch} 
          options={{ title: 'Effect Search' }}/>
        <Stack.Screen 
          name='IngredientSearch'
          component={IngredientSearch}
          options={{ title: 'Ingredient Search' }}/>
        <Stack.Screen 
          name='EffectDetails'
          component={EffectDetails}
          options={{ title: 'Effect' }}/>
        <Stack.Screen 
          name='IngredientDetails'
          component={IngredientDetails}
          options={{ title: 'Details' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;