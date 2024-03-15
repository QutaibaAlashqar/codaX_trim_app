import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const JuniorFormScreen = () => {
  // State hooks for each input field
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [tcNumber, setTcnumber] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [school, setSchool] = useState('');
  const [note, setNote] = useState('');
  // ... other state hooks for each field

  const navigation = useNavigation(); 


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logoText}>{'</>'}</Text>
      <Text style={styles.appName}>CodaXtrim</Text>
      <Text style={styles.subHeaderText}>Junior</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="TC. Number"
          value={tcNumber}
          onChangeText={setTcnumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="School or Company"
          value={school}
          onChangeText={setSchool}
        />
        <TextInput
          style={styles.input}
          placeholder="Leave note for us"
          value={note}
          onChangeText={setNote}
        />

        
        {/* Repeat for each field */}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('PrivacyPolicyScreen')}>
        <Text style={styles.privacyPolicyText}>Privacy Policy</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D29B0D', // Color from the design
  },
  logoText: {
    marginTop: 30,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    // Add other styles for the logo text if needed
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    // Add other styles for the app name if needed
  },
  
  subHeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  formContainer: {
    marginHorizontal: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#8B0000',
    paddingVertical: 15,
    paddingHorizontal: 140,
    marginVertical: 10,
    borderRadius: 25,
    alignSelf: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  privacyPolicyText: {
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default JuniorFormScreen;
