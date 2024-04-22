import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExpertHomeScreen = ({ route }) => {
  const user = route?.params?.user;
  
  return (
    <View style={styles.container}>
       {user ? (
        <Text>Welcome to the Expert Home, {user.email}</Text>
      ) : (
        <Text>No user data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ExpertHomeScreen;
