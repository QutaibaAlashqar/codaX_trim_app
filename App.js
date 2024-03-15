// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/Home'; // Your existing home screen component
import PrivacyPolicyScreen from './app/PrivacyPolicyScreen'; // Your privacy policy component
import LoginScreen from './app/Login';
import SignUpScreen from './app/SignUpScreen';
import JuniorFormScreen from './app/JuniorSignUp';
import ExpertFormScreen from './app/ExpertSignUp';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="JuniorSignUp" component={JuniorFormScreen} />
        <Stack.Screen name="ExpertSignUp" component={ExpertFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
