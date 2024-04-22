import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderComponent from './Header';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotificationJ = () => {

  const notifications = Array.from({ length: 57 }, (_, i) => ({
    id: i + 1,
    message: `Notification: You have a new message.`,
  }));

  return (
    
    <View style={styles.container}>
      <HeaderComponent title="CodaXtrim" />
      <ScrollView>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationBox}>
            <Icon name="notifications" size={24} color="#4CAF50" />
            <Text style={styles.text}>{notification.message}</Text>
          </View>
        ))}
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  notificationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 12,
    margin: 5,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.55,
    shadowRadius: 5.84,
    elevation: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default NotificationJ;
