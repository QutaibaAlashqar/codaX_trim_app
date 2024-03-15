import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [email, setEmail] = useState('');
    const navigation = useNavigation(); 

    const handleForgotPassword = () => {
      // Implement logic to handle password reset submission here
      console.log("Forgot Password submitted with email:", email);
      // Close the password reset dialog
      setShowForgotPassword(false);
    }

    const forgotPasswordInputStyle = {
      height: 50,
      borderColor: '#000',
      borderWidth: 2.5,
      borderRadius: 15,
      width: '100%',
      marginBottom: 20,
      paddingHorizontal: 20,
      backgroundColor: '#FFF', // White color
      fontSize: 20, // Increase font size
    };


    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.logoText}>{'</>'}</Text>
          <Text style={styles.appName}>CodaXtrim</Text>
          <TextInput 
            style={styles.input} 
            placeholder="User Name" 
            placeholderTextColor="#000" 
          />
          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            secureTextEntry={true}
            placeholderTextColor="#000" 
          />
          <TouchableOpacity onPress={() => setShowForgotPassword(true)}>
            <Text style={styles.forgotPassword}>forgot Your Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('PrivacyPolicyScreen')}>
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
                            style={forgotPasswordInputStyle} 
                            placeholder="Enter your email" 
                            placeholderTextColor="#000"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Pressable
                            style={[styles.button, styles.submitButton]}
                            onPress={handleForgotPassword}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.closeButton]}
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

  // Additional styles for the password reset dialog
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(2, 0.6, 0.5, 0.1)' // Semi-transparent background
},
modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 10,
},
button: {
    borderRadius: 20,
    padding: 10 ,
    elevation: 10,
    marginVertical: 5,
},
buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
},
submitButton: {
    backgroundColor: "gray",
},
closeButton: {
    backgroundColor: "red",
}

});

export default LoginScreen;
