import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HeaderComponent = ({ title, searchText, onSearch }) => {
  const navigation = useNavigation(); 
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const navigateToScreen = (screenName) => {
    if (navigation) {
      navigation.navigate(screenName);
      setMenuVisible(false); // Close the menu after navigation
    } else {
      console.error('Navigation prop is undefined');
    }
  };
  

  return (
    <SafeAreaView style={{ backgroundColor: 'yellow' }}>
      <View style={styles.headerContainer}>
        {/* Logo and app name */}
        <View style={styles.logoContainer}>
          {/* Menu icon */}
          <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
            <Icon name="menu" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.logoText}>{"</>"}</Text> 
          <Text style={styles.headerText}>{title}</Text>
        </View>

        {/* Search box */}
        <View style={styles.searchBox}>
          <Icon name="search" size={24} color="#333" />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="#333"
            value={searchText}
            onChangeText={onSearch} // Pass the handleSearch function here
          />
        </View>

        {/* Menu Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isMenuVisible}
          onRequestClose={toggleMenu}
        >
          <View style={styles.modalContainer}>


            <View style={styles.sidebar}>
              
              {/* User Information */}
              <View style={styles.userInfoContainer}>
                <Icon name="person" size={150} color="#333" style={styles.userIcon} />
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>Name</Text>
                  <Text style={styles.userEmail}>Email</Text>
                </View>
              </View>

              {/* Buttons */}
              <TouchableOpacity style={styles.sidebarButton1} onPress={() => navigateToScreen('JuniorHomeScreen')}>
                <Text style={styles.buttonText}>Home Page</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarButton} onPress={() => navigateToScreen('ProfileJ')}>
                <Text style={styles.buttonText}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarButton} onPress={() => navigateToScreen('NotificationJ')}>
                <Text style={styles.buttonText}>Notification</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarButton} onPress={() => navigateToScreen('MessagesJ')}>
                <Text style={styles.buttonText}>Messages</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarButton} onPress={() => navigateToScreen('PrivacyPolicyScreen')}>
                <Text style={styles.buttonText}>About Us</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarButton} onPress={() => navigateToScreen('PrivacyPolicyScreen')}>
                <Text style={styles.buttonText}>Privacy Policy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarButton} onPress={() => navigateToScreen('Home')}>
                <Text style={styles.buttonText}>Log Out</Text>
              </TouchableOpacity>
              {/* Add more buttons as needed */}

              <View style={styles.footer}>
                <Text style={styles.footerText}>
                  © 2024 QB Company. All rights reserved.
                </Text>
              </View>


            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 90,
    width: '100%',
    backgroundColor: '#D29B0D',
    paddingHorizontal: 10,
  },
  logoContainer: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  headerText: {
    color: '#333',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  searchBox: {
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginLeft: 20, // Add some spacing between logo and search box
    marginRight: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
    color: '#333',
  },
  menuButton: {},
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sidebar: {
    backgroundColor: '#D29B0D',
    padding: 20,
    borderRadius: 20,
    elevation: 55,
    width: '73%',
    marginEnd: 150,
    height: '100%',
  },
  sidebarButton1: {
    marginTop: 25,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    padding: 10,
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 30,
  },
  sidebarButton: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    padding: 10,
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 30, 
  },
  buttonText: {
    color: '#333',
    fontSize: 22,
    fontWeight: 'bold',
  },

  userInfoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 0,
    marginLeft: 30,
  },
  userIcon: {
    marginRight: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 170,
  },
  userEmail: {
    fontSize: 15,
    color: '#333',
  },

  footer: {
    alignItems: 'center',
    marginTop: 80,
  },
  footerText: {
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold', 
  }
  
});

export default HeaderComponent;
