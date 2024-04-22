// PrivacyPolicyScreen.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
//import { HeaderBackButton } from '@react-navigation/stack';
//import Ionicons from '@expo/vector-icons/Ionicons';
//import { Ionicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const PrivacyPolicyScreen = () => {

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        
        

        <Text style={styles.headerText}>Privacy Policy</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.logoText}>{'</>'}</Text>
        <Text style={styles.appName}>CodaXtrim</Text>
        {/* Rest of your privacy policy text */}
        <Text style={styles.privacyText}>
          Your security is important to us. 
          Therefore, the personal data you
          share with us is meticulously protected.
          As CodaXtrim, the data controller,
          we aim to inform you about our
          privacy and personal data 
          protection policy,
          including the purposes for which
          your personal data will be processed,
          with whom and why this 
          data may be shared, our
          data processing methods and
          legal grounds, as well as 
          your rights regarding the 
          processed data.
        </Text>
        {/* Footer with email or contact */}
        <View style={styles.footer}>
          <Ionicons name="mail" size={24} color="black" />
          <Text style={[styles.contactText, { marginLeft: 10 }]}>
            If you encounter any issues, you can contact us at qbworkk@gmail.com.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D29B0D", // Yellow background
  },
  header: {
    padding: 10,
    alignItems: 'center',
    // Add other styles for the header if needed
  },
  headerText: {
    fontSize: 17.5,
    fontWeight: 'bold',
    // Add other styles for header text if needed
  },
  contentContainer: {
    padding: 20,
    // Add other styles for the content container if needed
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
  privacyText: {
    // Add styles for the privacy policy text
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,
  },
  contactText: {
    // Add styles for the contact information text
    fontSize: 25,
    marginTop: 10,
  },
  // Add to your StyleSheet
  footer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 80, // Adjust this as needed for spacing
    // Add other styles as needed for your footer
  },

  
  // Add more styles if needed
});

export default PrivacyPolicyScreen;