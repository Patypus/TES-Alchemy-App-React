import React from 'react';
import * as navigation from './constants/navigationConstants';
import { EffectSearch, IngredientSearch, MainMenu } from './features';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={navigation.Home} component={MainMenu}/>
        <Stack.Screen 
          name='EffectSearch' 
          component={EffectSearch} 
          options={{ title: 'Effect Search' }}/>
        <Stack.Screen 
          name='IngredientSearch'
          component={IngredientSearch}
          options={{ title: 'Ingredient Search' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;