import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  // Include state hooks for handling form inputs, if necessary
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>{'</>'}</Text>
        <Text style={styles.appName}>CodaXtrim</Text>
        {/* Rest of your privacy policy text */}
        <Text style={styles.ExpleText}>
        {"\n"}The CodaXtrim Application 
            is designed to facilitate the 
            collaboration of Experts and 
            Juniors in an easy and 
            convenient way.{"\n"}
            {"\n"}
            Since our application 
            is still in the development 
            process, we kindly request 
            you to please contact us with any 
            issues, suggestions, ideas, or 
            comments that you encounter. {"\n"}
            {"\n"}
            Your feedback is valuable to us.
            {"\n"}{"\n"}{"\n"}

            **To become a member as an EXPERT, one must fill out the 
            forum and await approval from us via Email to control your Resume.**
            {"\n"}
        </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('JuniorSignUp')} // Use correct navigation prop
        >
          <Text style={styles.buttonText}>Junior</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ExpertSignUp')} // Use correct navigation prop
        >
          <Text style={styles.buttonText}>Expert</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicyScreen')}>
        <Text style={styles.privacyPolicyText}>Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D29B0D', // You may need to adjust this color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    padding: 10,
    alignItems: 'center',
    // Add other styles for the header if needed
  },
  descriptionText: {
    textAlign: 'center',
    marginBottom: 20,
    // Other styles as needed
  },
  logoText: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    // Add other styles for the logo text if needed
  },
  appName: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    // Add other styles for the app name if needed
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#8B0000', // Adjust color as needed
    paddingVertical: 35,
    paddingHorizontal: 60,
    marginHorizontal: -10,
    borderRadius: 10,
    // Other styles as needed
  },
  buttonText: {
    color: '#FFF', // Adjust color as needed
    fontSize: 20, // Adjust size as needed
    fontWeight: 'bold',
    // Other styles as needed
  },
  ExpleText: {
    // Add styles for the privacy policy text
    fontSize: 22.5,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  privacyPolicyText: {
    marginTop: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
