import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import userData from '../users.json';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
      // Find the user in the userData array
      const user = userData.find(u => u.email === email && u.password === password);
      
      // Show appropriate alert based on whether the user was found
      if (user) {
          Alert.alert('Login Success', `Welcome, ${user.name}.`);
          if (user.role === 'E') {
            //navigation.navigate('ExpertHomeScreen', { user }); // Pass user data as a parameter
          } else if (user.role === 'J') {
            navigation.navigate('JuniorHomeScreen');
          }
      } else {
          Alert.alert('Login Failed', 'The email or password is incorrect.');
      }
  };

  return (
      <View style={styles.container}>
          <View style={styles.card}>
              <Text style={styles.logoText}>{'</>'}</Text>
              <Text style={styles.appName}>CodaXtrim</Text>
              <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#000"
                  onChangeText={setEmail}
                  value={email}
              />
              <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor="#000"
                  onChangeText={setPassword}
                  value={password}
              />
              <TouchableOpacity onPress={() => setShowForgotPassword(true)}>
                  <Text style={styles.forgotPassword}>Forgot Your Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                  <Text style={styles.loginButtonText}>Log in</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicyScreen')}>
                  <Text style={styles.privacyPolicy}>Privacy Policy</Text>
              </TouchableOpacity>
          </View>

          {/* Forgot Password Dialog */}
          <Modal
              animationType="slide"
              transparent={true}
              visible={showForgotPassword}
              onRequestClose={() => setShowForgotPassword(false)}
          >
              <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                      <TextInput
                          style={styles.input}
                          placeholder="Enter your email"
                          placeholderTextColor="#000"
                          onChangeText={setEmail}
                          value={email}
                      />
                      <Pressable
                          style={[styles.button, styles.submitButton]}
                          onPress={() => {
                              // Handle password reset logic here
                              setShowForgotPassword(false);
                          }}
                      >
                          <Text style={styles.buttonText}>Submit</Text>
                      </Pressable>
                      <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => setShowForgotPassword(false)}
                      >
                          <Text style={styles.buttonText}>Close</Text>
                      </Pressable>
                  </View>
              </View>
          </Modal>
      </View>
  );
};

// Define your styles here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D29B0D', // The background color of your choice
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#D29B0D', // The card background color
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '80%',
  },
  logoText: {
    fontSize: 120, // Adjust your size
    color: '#000', // Adjust your color
    fontWeight: 'bold',
    marginBottom: 10,
  },
  appName: {
    fontSize: 50, // Adjust your size
    color: '#000', // Adjust your color
    fontWeight: 'bold',
    marginBottom: 80,
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 15,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFF', // White color
  },
  forgotPassword: {
    color: 'blue', // Adjust your color
    marginBottom: 45,
  },
  loginButton: {
    backgroundColor: '#8F0A0A', // The button background color
    borderRadius: 15,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'black', // Text color
    fontWeight: 'bold',
    fontSize: 30,
    fontSize: 16, // Adjust your size
  },
  privacyPolicy: {
    color: 'blue', // Adjust your color
    marginTop: 150,
    fontSize: 12, // Adjust your size
    fontWeight: 'bold',
  },
  centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
  },
  button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
  },
  submitButton: {
      backgroundColor: '#2196F3',
  },
  buttonClose: {
      backgroundColor: '#2196F3',
  },
  buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
  }
});

export default LoginScreen;