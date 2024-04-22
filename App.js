import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/Home';
import HeaderComponent from './HeaderComponent'; 
import PrivacyPolicyScreen from './app/PrivacyPolicyScreen';
import LoginScreen from './app/Login';
import SignUpScreen from './app/SignUpScreen';
import JuniorFormScreen from './app/JuniorSignUp';
import ExpertFormScreen from './app/ExpertSignUp';
import ExpertHomeScreen from './app/ExpertHomeScreen';
import JuniorHomeScreen from './app/JuniorHomeScreen';
import MessagesJ from './app/MessagesJ';
import NotificationJ from './app/NotificationJ';
import ProfileJ from './app/ProfileJ';
import userProfileOnJ from './app/userProfileOnJ';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            header: () => <HeaderComponent navigation={navigation} title="Home" />
          })}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="JuniorSignUp" component={JuniorFormScreen} />
        <Stack.Screen name="ExpertSignUp" component={ExpertFormScreen} />
        <Stack.Screen name="ExpertHomeScreen" component={ExpertHomeScreen} />
        <Stack.Screen name="JuniorHomeScreen" component={JuniorHomeScreen} />
        <Stack.Screen name="MessagesJ" component={MessagesJ} />
        <Stack.Screen name="NotificationJ" component={NotificationJ} />
        <Stack.Screen name="ProfileJ" component={ProfileJ} />
        <Stack.Screen name="userProfileOnJ" component={userProfileOnJ} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
