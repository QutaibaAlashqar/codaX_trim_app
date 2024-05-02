import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, ActivityIndicator, TouchableWithoutFeedback, Modal } from 'react-native';
import HeaderComponent from './Header';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';


// User data
const users = [
  { "TC": "11111222225", "email": "qutaibaE1@gmail.com", "password": "12345", "role": "E", "name": "QutaibaE1", "age": "40", "city": "Ankara", "phone": "05525300477", "depertment": "Back-end", "com_sch": "X Company", "years": "18", "like-counter": "200", "goined": "05.05.2023" },
  { "TC": "11111222225", "email": "qutaibaE2@gmail.com", "password": "12345", "role": "E", "name": "QutaibaE2", "age": "40", "city": "Ankara", "phone": "05525300477", "depertment": "Front-end", "com_sch": "X Company", "years": "18", "like-counter": "200", "goined": "05.05.2023" },
  { "TC": "11111222225", "email": "qutaibaE3@gmail.com", "password": "12345", "role": "E", "name": "QutaibaE3", "age": "40", "city": "Ankara", "phone": "05525300477", "depertment": "AI", "com_sch": "X Company", "years": "18", "like-counter": "200", "goined": "05.05.2023" },
  { "TC": "11111222225", "email": "qutaibaE4@gmail.com", "password": "12345", "role": "E", "name": "QutaibaE4", "age": "40", "city": "Ankara", "phone": "05525300477", "depertment": "Full-Stack", "com_sch": "X Company", "years": "18", "like-counter": "200", "goined": "05.05.2023" },
  { "TC": "11111222225", "email": "qutaibaE5@gmail.com", "password": "12345", "role": "E", "name": "QutaibaE5", "age": "40", "city": "Ankara", "phone": "05525300477", "depertment": "Database Administration", "com_sch": "X Company", "years": "18", "like-counter": "200", "goined": "05.05.2023" },
  { "TC": "11111222225", "email": "qutaibaE6@gmail.com", "password": "12345", "role": "E", "name": "QutaibaE6", "age": "40", "city": "Ankara", "phone": "05525300477", "depertment": "Back-end", "com_sch": "X Company", "years": "18", "like-counter": "200", "goined": "05.05.2023" },
  { "TC": "11111222225", "email": "qutaibaE7@gmail.com", "password": "12345", "role": "E", "name": "QutaibaE7", "age": "40", "city": "Ankara", "phone": "05525300477", "depertment": "Front-end", "com_sch": "X Company", "years": "18", "like-counter": "200", "goined": "05.05.2023" },
  { "TC": "11111222225", "email": "qutaibaE8@gmail.com", "password": "12345", "role": "E", "name": "QutaibaE8", "age": "40", "city": "Ankara", "phone": "05525300477", "depertment": "AI", "com_sch": "X Company", "years": "18", "like-counter": "200", "goined": "05.05.2023" },
  { "TC": "11111222225", "email": "qutaibaE9@gmail.com", "password": "12345", "role": "E", "name": "QutaibaE9", "age": "40", "city": "Ankara", "phone": "05525300477", "depertment": "Full-Stack", "com_sch": "X Company", "years": "18", "like-counter": "200", "goined": "05.05.2023" },
  { "TC": "11111222225", "email": "qutaibaE10@gmail.com", "password": "12345", "role": "E", "name": "QutaibaE10", "age": "40", "city": "Ankara", "phone": "05525300477", "depertment": "Database Administration", "com_sch": "X Company", "years": "18", "like-counter": "200", "goined": "05.05.2023" },
  { "TC": "11111222225", "email": "qutaibaJ1@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ1", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ2@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ2", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ3@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ3", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ4@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ4", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ5@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ5", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ6@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ6", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ7@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ7", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ8@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ8", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ9@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ9", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ10@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ10", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ11@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ11", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ12@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ12", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ13@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ13", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ14@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ14", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ15@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ15", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ16@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ16", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ17@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ17", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ18@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ18", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ19@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ19", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" },
  { "TC": "11111222225", "email": "qutaibaJ20@gmail.com", "password": "12345", "role": "J", "name": "QutaibaJ20", "age": "20", "city": "Ankara", "phone": "05525300477", "com_sch": "Ankara Uni", "like-counter": "200", "goined": "05.05.2023", "years": "0", "depertment": "Student" }
];

// Main component
const JuniorHomeScreen = () => {

    const navigation = useNavigation(); 


    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [filter, setFilter] = useState('All');
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        // Simulate loading delay (replace with actual data fetching logic)
        setTimeout(() => {
            setIsLoading(false);
            // Initially, set filteredUsers to all users
            updateFilteredUsers('All', ''); 
        }, 2000); 
    }, []);

    const handleSearch = (text) => {
      setSearchText(text);
      updateFilteredUsers(filter, text);
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        updateFilteredUsers(newFilter, searchText);
    };


    const updateFilteredUsers = (filter, searchText) => {
      let filtered = users.filter(user => {
        if (filter === 'All') return true;  // Show all users
        return user.role === (filter === 'Expert' ? 'E' : 'J');
      }).filter(user => {
         return !searchText || user.name.toLowerCase().includes(searchText.toLowerCase());
      });
    setFilteredUsers(filtered);
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleUserPress = (user) => {
        setSelectedUser(user);
        toggleModal();
    };


    return (
        <View style={styles.container}>
            <HeaderComponent title="CodaXtrim" searchText={searchText} onSearch={handleSearch} />

            {isLoading ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : (
                <ScrollView style={{ flex: 1 }}>
                  <View style={styles.noteContainer}>
                        <Text style={styles.noteText}>Welcome to the Junior User Platform! Here, you can connect with peers and experts to find support for various IT-related queries. Use the search bar above to locate users by name or department, and start networking today!</Text>
                  </View>
                  <View style={styles.buttonContainer}>
                      <View style={styles.filterGroup}>
                          <TouchableOpacity style={styles.filterButton} onPress={() => handleFilterChange('All')}>
                              <Text>All</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.filterButton} onPress={() => handleFilterChange('Expert')}>
                              <Text>Experts</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.filterButton} onPress={() => handleFilterChange('Junior')}>
                              <Text>Juniors</Text>
                          </TouchableOpacity>
                      </View>
                          <View style={styles.account1}>
                              <Text style={styles.textAccount}>Junior Account</Text>
                          </View>
                  </View>
                    {filteredUsers.map((user, index) => (
                        <TouchableOpacity key={index} style={[styles.box, user.role === 'J' && styles.boxStudent]} onPress={() => handleUserPress(user)}>
                            <View style={styles.profileSection}>
                                <Icon name="account-circle" size={60} color="#333" />
                                <View style={styles.userInfo}>
                                  <Text style={styles.nameText}>{user.name}</Text>
                                  <Text style={styles.text}>{user.depertment}</Text>
                                  <Text style={styles.text}>{user.com_sch}</Text>
                                  <View style={styles.cityContainer}>
                                      <Text style={styles.text}>{user.city}</Text>
                                      <View style={styles.likeCounter}>
                                          <Icon name="thumb-up" size={18} color="#333" />
                                          <Text style={styles.likeCount}>{user['like-counter']}</Text>
                                      </View>
                                  </View>
                                </View>
                                {user.role === 'E' && (
                                    <View style={styles.expertStatus}>
                                        <Text style={styles.statusText}>Expert</Text>
                                    </View>
                                )}
                                {user.role === 'J' && (
                                    <View style={styles.juniorStatus}>
                                        <Text style={styles.statusText}>Junior</Text>
                                    </View>
                                )}
                                <View style={styles.activeStatus}>
                                    <Text style={styles.activeText}>Active</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            )}
             <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <TouchableWithoutFeedback onPress={toggleModal}>
                    <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                    {/* Display user profile information */}
                    {selectedUser && (
                        <View>
                            <View style={styles.profileCover}>
                                <View style={styles.profileCoverContent}>
                                    <View style={styles.activeStatus1}>
                                        <Text style={styles.activeText1}>Active</Text>
                                    </View>
                                    <Text style={styles.codaXtrimText}>CodaXtrim</Text>
                                    <Icon style={styles.icon11} name="account-circle" size={100} color="black" />
                                    

                                        <View style={styles.activeStatus111}>
                                            <Text style={styles.activeText}>Expert</Text>
                                        </View>
                                    
                                </View>
                            </View>
                            
                            <View>
                                <View style={styles.detailItem}>
                                    <Icon name="person" size={20} color="black" style={styles.icon111} />
                                    <Text style={styles.text11}>{selectedUser.name}</Text>
                                </View>
                                <View style={styles.detailItem}>
                                    <Icon name="location-pin" size={20} color="black" style={styles.icon111} />
                                    <Text style={styles.text22}>{selectedUser.city}</Text>
                                </View>
                                <View style={styles.detailItem}>
                                    <Icon name="work" size={20} color="black" style={styles.icon111} />
                                    <Text style={styles.text22}>{selectedUser.depertment}</Text>
                                </View>
                                
                                <View style={styles.detailItem}>
                                    <Icon name="star" size={25} color="#FFD700" />
                                    <Icon name="star" size={25} color="#FFD700" />
                                    <Icon name="star" size={25} color="#FFD700" />
                                    <Icon name="star-half" size={25} color="#FFD700" />
                                    <Icon name="star-outline" size={25} color="#BBB" />
                                </View>

                                <View style={styles.detailItem}>
                                    <Text style={styles.text22}>--------------------------------------------------------</Text>
                                </View>


                                <View style={styles.detailItem}>
                                    
                                    <Text style={styles.text22}>{selectedUser.years} Year Of Experinces</Text>
                                </View>
                                <View style={styles.detailItem}>
                                    <Text style={styles.text22}>Emial: {selectedUser.email}</Text>
                                </View>
                                <View style={styles.detailItem}>
                                    <Text style={styles.text22}>Company/School: {selectedUser.com_sch}</Text>
                                </View>
                                <View style={styles.detailItem}>
                                    <Text style={styles.text22}>Age: {selectedUser.age}</Text>
                                </View>
                                <View style={styles.detailItem}>
                                    <Text style={styles.text22}>Goind Date: {selectedUser.goined}</Text>
                                </View>
                            </View>

                            <View style={styles.detailItem}>
                                <Text style={styles.text22}>--------------------------------------------------------</Text>
                            </View>

                            <View style={styles.detailItem}>        
                                <Text style={styles.text33}>If you want to help this Expert and got more rate, press the like button and change his rank.</Text>
                            </View>

                            <TouchableOpacity>
                                <View style={styles.detailItem}>
                                    <Icon name="thumb-up" size={40} color="#FFD700" style={styles.likeButton}/>
                                    <Text style={styles.likeCount}>{selectedUser['like-counter']}</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.detailItem} onPress={() => navigation.navigate("MessagesJ")}>
                                <View style={styles.messagesButton}>
                                    <Text style={styles.messagesText}>Send a message</Text>
                                </View>
                            </TouchableOpacity>


                        </View>
                    )}
                </View>
            </Modal>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
  },
  loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  noteContainer: {
    padding: 10,
    backgroundColor: '#9AA1A7', // Light yellow for visibility
    marginHorizontal: 12,
    marginTop: 10,
    borderRadius: 20,
  },
  noteText: {
    color: '#333',
    fontSize: 14,          // Increased font size for better readability
    lineHeight: 20,        // Increased line height for more space between lines
    textAlign: 'justify',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Aligns children to each side of the container
    alignItems: 'center', // Vertically center the items
    marginTop: 15, // Top spacing
    marginBottom: -10, // Bottom spacing
    paddingHorizontal: 25, // Adds horizontal padding for aesthetic spacing
  },
  filterGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  filterButton: {
    padding: 6,
    backgroundColor: '#DDD',
    borderRadius: 50,
    marginRight: 5, 
  },
  account1: {
    backgroundColor: '#9AA1A7', // Example color
    padding: 6,
    borderRadius: 50,
  },
  textAccount: {
    color: 'white',
    fontWeight: 'bold',
  },
  box: {
      backgroundColor: '#FFFF99',
      padding: 15,
      marginHorizontal: 10,
      marginTop: 15,
      borderRadius: 35,
      position: 'relative', // Required for absolute positioning
  },
  boxStudent: {
      backgroundColor: '#76B6F7',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
    color: '#333',
  },
  profileSection: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  userInfo: {
      marginLeft: 10,
  },
  nameText: {
      fontWeight: 'bold',
      fontSize: 18,
  },
  text: {
      fontSize: 14,
      color: '#333',
  },
  expertStatus: {
      position: 'absolute',
      top: 0,
      right: 10,
      backgroundColor: '#FF5722', 
      padding: 5,
      borderRadius: 50,
  },
  juniorStatus: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: '#FF5722', 
    padding: 5,
    borderRadius: 50,
  },
  activeStatus: {
      position: 'absolute',
      top: 35, // Adjust if needed
      right: 10,
      backgroundColor: '#4CAF50', 
      padding: 5,
      borderRadius: 50,
  },
  statusText: {
      color: 'white',
      fontWeight: 'bold',
  },
  activeText: {
    color: 'white',
  },
  cityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  likeCounter: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 60,
  },
  likeCount: {
      marginLeft: 2,
      fontSize: 14,
      color: '#333',
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.0)', // Semi-transparent black color
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 0,
    padding: 20,
    width: '100%', // Adjust the width as needed
    Height: '100%', // Adjust the height as needed
  },
  
  
  /////


  activeStatus1: {
    position: 'absolute',
    top: -40, // Adjust if needed
    right: 0,
    backgroundColor: '#4CAF50', 
    padding: 5,
    borderRadius: 50,
  },
  activeStatus111: {
    position: 'absolute',
    top: 110,
    right: 0,
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#9AA1A7'
  },
  activeText1: {
    color: 'white',
    fontSize: 15,
  },


  codaXtrimText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    top: -77.5,
    right: 140,
  },


  massion1: {
    position: 'absolute',
    top: 120, // Adjust if needed
    right: 0,
    backgroundColor: '#4CAF50', 
    padding: 5,
    borderRadius: 50,
  },
  messionText1: {
    color: 'white',
    fontSize: 17.5,
  },



  profileCover: {
    backgroundColor: '#D29B0D', // Example color
    paddingTop: 50,
    paddingHorizontal: 15,
    marginBottom: 10, // Adjust as needed
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'relative', 
    marginBottom: 560,
  },
  icon11: {
    top: 50,
    right: 110,
  },
  profileCoverContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  profileCoverText: {
    color: '#FFF',
    fontSize: 18,
    marginLeft: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    top: -500,  
    right: -5,
  },
  icon111: {
    marginRight: 10,  // Adjust spacing between icon and text
  },
  text11: {
    fontSize: 22.5,
    color: 'black',
    fontWeight: 'bold',
  },
  text22: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  text33: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',  // Centers text within its own container
  },

  likeButton: {
    flexDirection: 'row',  // Aligns icon and text horizontally
    alignItems: 'center',  // Centers them vertically
    padding: 10,  // Internal padding
    backgroundColor: '#DDD',  // Button background color
    borderRadius: 100,  // Rounded corners
    marginVertical: 5,  // Space above and below the button
    right: -140,
  },
  likeCount: {
    marginLeft: 10,  // Space between icon and text
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    right: -87,
    top: 45,
  },

    messagesButton: {
        alignItems: 'center',  // Vertically aligns them
        padding: 7.5,  // Internal padding
        backgroundColor: '#FFD700',  // Background color for button
        borderRadius: 5,  // Rounded corners
        marginVertical: 35,  // Space above and below the button
        right: -100,
    },
    messagesText: {
        marginLeft: 5,  // Space between icon and text
        fontSize: 22.5,
        color: 'black',
        fontWeight: 'bold',
    },



});
export default JuniorHomeScreen;