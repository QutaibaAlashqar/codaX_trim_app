//Home.js
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';


const Home = () => {
  const navigation = useNavigation(); // Initialize the navigation hook here
  const [showLogin, setShowLogin] = useState(false);
  const opacityValue = new Animated.Value(0);

  useEffect(() => {

    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 2000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();

    // Set a timeout to show the login screen after a certain duration (e.g., 2 seconds)
    const timeout = setTimeout(() => {
      setShowLogin(true);

      opacityValue.setValue(0);

      // Start a new animation for the login page
      Animated.timing(opacityValue, {
        toValue: 3,
        duration: 2000,
        useNativeDriver: true,
      }).start();

    }, 2000);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <View style={styles.container}>
      
        {!showLogin ? (
          // First page with yellow background and app name
          <Animated.View style={[styles.firstPage, { opacity: opacityValue }]}>
            <Text style={styles.logoText}>{'</>'}</Text>
            <Text style={styles.appName}>CodaXtrim</Text>
            </Animated.View>
        ) : (
          <Animated.View style={[styles.loginPage, { opacity: opacityValue }]}>
            <Text style={styles.logoText}>{'</>'}</Text>
            <Text style={styles.appName}>CodaXtrim</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button}
              onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>LOG IN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}
              onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicyScreen')}>
              <Text style={styles.privacyPolicy}>Privacy Policy</Text>
            </TouchableOpacity>
        </Animated.View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D29B0D",
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstPage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 120, // Adjust the size of your logo text
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 110,
  },
  appName: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 5,
  },
  buttonsContainer: {
    marginTop: 90,
  },
  button: {
    backgroundColor: "#8F0A0A",
    paddingVertical: 15,
    paddingHorizontal: 140,
    marginVertical: 10,
    borderRadius: 25,
    alignSelf: 'center', 
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20, // Adjust the font size as needed
    textAlign: 'center', // This ensures the text is centered within the button
  },
  privacyPolicy: {
    marginTop: 220,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default Home;
