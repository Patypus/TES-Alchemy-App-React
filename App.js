import React from 'react';
import { HomeButton } from './components';
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
          options={{ title: 'Skyrim Alchemy Reference' }}/>
        <Stack.Screen 
          name='EffectSearch' 
          component={EffectSearch} 
          options={({navigation}) => ({ title: 'Effect Search', headerRight: () => (<HomeButton navigation={navigation}/>)})}/>
        <Stack.Screen 
          name='IngredientSearch'
          component={IngredientSearch}
          options={({navigation}) => ({ title: 'Ingredient Search', headerRight: () => (<HomeButton navigation={navigation}/>)})}/>
        <Stack.Screen 
          name='EffectDetails'
          component={EffectDetails}
          options={({route, navigation}) => ({ title: route.params.effectName, headerRight: () => (<HomeButton navigation={navigation}/>) })}/>
        <Stack.Screen 
          name='IngredientDetails'
          component={IngredientDetails}
          options={({route, navigation}) => ({ title: route.params.ingredientName, headerRight: () => (<HomeButton navigation={navigation}/>) })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;