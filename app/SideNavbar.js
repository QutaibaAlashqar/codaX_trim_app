// SideNavbarComponent.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import PrivacyPolicyScreen from './PrivacyPolicyScreen';





const SideNavbarComponent = ({ navigation, isSidebarOpen, toggleSidebar }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
        // Navigate to the specified screen and close the sidebar
        if (navigation && navigation.navigate) {
          navigation.navigate(screenName);
          toggleSidebar(); // Moved this outside the if condition
        }
  };

  return (
    <View style={[styles.navContainer, isSidebarOpen ? styles.openSidebar : null]}>
      <TouchableOpacity onPress={toggleSidebar} style={styles.closeButton}>
        <Icon name="menu" size={30} color="white" />
      </TouchableOpacity>

      <Icon name="account-circle" size={100} color="white" style={styles.userIcon}/>
      <View style={{ height: 10 }} />
      <View style={styles.userInfo}>
          <Text style={styles.userName}>user</Text>
          <Text style={styles.userEmail}>Email</Text>
      </View>

        <View style={{ height: 10 }} />
        <View style={styles.divider} />
        <View style={{ height: 10 }} />


      {isSidebarOpen && (
        <View>
          
          <TouchableOpacity onPress={() => navigateToScreen('PrivacyPolicyScreen')}>
            <View style={styles.navItemContainer}>
              <Icon name="home" size={20} color="white" style={styles.navItemIcon} />
              <Text style={styles.navItem}>P</Text>
            </View>
          </TouchableOpacity>

          
          <View style={{ height: 15 }} />
          <View style={styles.divider} />
          <View style={{ height: 15 }} />


        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    navContainer: {
        backgroundColor: '#660000',
        width: 260,
        height: '100%',
        position: 'absolute',
        left: -260,
        top: 0,
        zIndex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingHorizontal: 20,
        transitionProperty: 'left',
        transitionDuration: '5s',
      },
      openSidebar: {
        left: 0,
      },
      closeButton: {
        position: 'absolute',
        top: 10,
        right: 10, // Adjust the position as needed
      },
      navItem: {
        color: 'white',
        fontSize: 20,
        marginVertical: 10,
      },
      navItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      navItem: {
        color: 'white',
        fontSize: 20,
        marginVertical: 10,
        right: -20,
      },
      header: {
        marginBottom: 20,
      },
      profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      userIcon: {
        marginRight: -15,
      },
      userInfo: {
        flexDirection: 'column',
        alignItems: 'center', 
        right: -20, 
      },
      userName: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
      },
      userEmail: {
        color: 'white',
        fontSize: 16,
      },
      divider: {
        width: '100%',
        height: 1,
        backgroundColor: 'white',
        marginBottom: 20,
      },
});

export default SideNavbarComponent;
