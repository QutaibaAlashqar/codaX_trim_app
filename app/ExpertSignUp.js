import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


const JuniorFormScreen = () => {
  // State hooks for each input field
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [tcNumber, setTcnumber] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [department, setDepartment] = useState('');
  const [school, setSchool] = useState('');
  const [experience, setExperience] = useState('');
  const [note, setNote] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // ... other state hooks for each field experience

  const navigation = useNavigation(); 

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Proceed with the submission process
  };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logoText}>{'</>'}</Text>
      <Text style={styles.appName}>CodaXtrim</Text>
      <Text style={styles.subHeaderText}>Expert</Text>
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
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={department}
            onValueChange={(itemValue, itemIndex) => setDepartment(itemValue)}
            style={styles.picker}
            mode="dropdown" // Android only
          >
            <Picker.Item label="Select Department" value="" />
            <Picker.Item label="Front-End" value="front" />
            <Picker.Item label="Back-End" value="back" />
            <Picker.Item label="Full-Stack" value="full" />
            <Picker.Item label="Database Administration" value="database" />
            <Picker.Item label="DevOps" value="devops" />
            <Picker.Item label="System" value="system" />
            <Picker.Item label="Cybersecurity Analysis" value="cybersecurity" />
            <Picker.Item label="Data Science" value="Data" />
            <Picker.Item label="Machine Learning" value="ml" />
            <Picker.Item label="ai" value="AI" />
            <Picker.Item label="Mobile App Development" value="mobile" />
            <Picker.Item label="User Interface (UI) Design" value="ui" />
            <Picker.Item label="Web Development" value="web" />
            <Picker.Item label="Embedded Systems Engineering" value="embedded" />
            <Picker.Item label="User Experience (UX) Design" value="ux" />
            <Picker.Item label="Software Project Management" value="software" />
          </Picker>
        </View>
        <TextInput
          style={styles.input}
          placeholder="School or Company"
          value={school}
          onChangeText={setSchool}
        />
        <TextInput
          style={styles.input}
          placeholder="Years of experience"
          value={experience}
          onChangeText={setExperience}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Leave note for us"
          value={note}
          onChangeText={setNote}
        />

        
        {/* Repeat for each field */}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
    marginTop: 20,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 0,
    // Add other styles for the logo text if needed
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    // Add other styles for the app name if needed
  },
  pickerContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden', // This property is important to make borderRadius work for Picker
  },
  picker: {
    width: '100%',
    // You may not need to set the height depending on your Picker's default appearance
  },
  subHeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
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
    marginTop: 10,
    backgroundColor: '#8B0000',
    paddingVertical: 15,
    paddingHorizontal: 140,
    marginVertical: 10,
    borderRadius: 25,
    alignSelf: 'center',
    marginBottom: 10,
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
