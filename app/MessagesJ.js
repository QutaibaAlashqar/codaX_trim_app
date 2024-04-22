import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderComponent from './Header';

const MessagesJ = () => {
  return (
    <View style={styles.container}>
        {/* Header Component */}
        <HeaderComponent title="CodaXtrim" />


        {/* Box with text */}
        <View style={styles.box}>
          <Text style={styles.text}>Messages Page!</Text>
        </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  box: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default MessagesJ;