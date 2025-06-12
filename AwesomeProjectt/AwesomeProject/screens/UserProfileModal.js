import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  Modal,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const UserProfileModal = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {userId} = route.params || {};

  const [isExpanded, setIsExpanded] = useState(false);
  const [modalHeight] = useState(new Animated.Value(height * 0.5));
  const [activeTab, setActiveTab] = useState('Shows');
  const [dialogVisible, setDialogVisible] = useState(false);
  const [reportModalVisible, setReportModalVisible] = useState(false);
  const [alertModalVisible, setAlertModalVisible] = useState(false);

  const toggleModal = () => {
    Animated.timing(modalHeight, {
      toValue: isExpanded ? height * 0.5 : height * 0.85,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsExpanded(!isExpanded);
  };

  const userData = {
    profileImage:
      'https://img.freepik.com/free-photo/young-adult-beauty-girl-portrait-one-person-generative-ai_188544-7650.jpg',
    userName: 'Lydia Press',
    userDescription:
      'Best online store to designer wear, best online store to designer wear.',
    rating: '5.0',
    sold: '3.7M',
    avgShipTime: '1 day',
    followers: '567k',
    followings: '123k',
  };

  const showImages = [
    'https://img.freepik.com/free-photo/modern-sneakers-white-background_1150-18753.jpg',
    'https://img.freepik.com/free-photo/flat-lay-arrangement-with-pink-flowers_23-2149026290.jpg',
  ];

  const handleReportPress = () => {
    setReportModalVisible(false);
    setAlertModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-photo/hands-through-old-library_397170-1172.jpg',
        }}
        style={styles.backgroundImage}
      />

      <Animated.View style={[styles.modalContainer, {height: modalHeight}]}>
        <TouchableOpacity onPress={toggleModal} style={styles.toggleButton}>
          <View style={styles.toggleBar} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.threeDotsButton}
          onPress={() => setDialogVisible(true)}>
          <Text style={styles.threeDots}>⫶</Text>
        </TouchableOpacity>

        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{uri: userData.profileImage}}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.userName}>{userData.userName}</Text>
          <Text style={styles.userDescription}>{userData.userDescription}</Text>
          <View style={styles.followStatsContainer}>
            <Text style={styles.followStats}>
              {userData.followers} followers
            </Text>
            <Text style={styles.followStats}>
              {userData.followings} followings
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.messageButton}
              onPress={() =>
                navigation.navigate('ChatScreen', {userName: userData.userName})
              }>
              <Text style={styles.buttonText}>Message</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{userData.rating}</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.stat}>
              <Text style={styles.statValue}>{userData.sold}</Text>
              <Text style={styles.statLabel}>Sold</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.stat}>
              <Text style={styles.statValue}>{userData.avgShipTime}</Text>
              <Text style={styles.statLabel}>Avg ship time</Text>
            </View>
          </View>
          {isExpanded && (
            <>
              <View style={styles.tabsContainer}>
                {['Shows', 'For Sale', 'Collection'].map(tab => (
                  <TouchableOpacity
                    key={tab}
                    style={styles.tabContainer}
                    onPress={() => setActiveTab(tab)}>
                    <Text
                      style={[
                        styles.tab,
                        activeTab === tab && styles.activeTab,
                      ]}>
                      {tab}
                    </Text>
                    {activeTab === tab && <View style={styles.pinkBar} />}
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.separatorLine} />
              {activeTab === 'Shows' && (
                <View style={styles.imageContainer}>
                  {showImages.map((image, index) => (
                    <View key={index} style={styles.imageWrapper}>
                      <Image source={{uri: image}} style={styles.image} />
                      <TouchableOpacity style={styles.saveIcon}>
                        <Text style={styles.saveText}>💾</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              )}
              {activeTab === 'For Sale' && (
                <View style={styles.saleContainer}>
                  <View style={styles.saleRectangle}>
                    <View style={styles.dollarCircle}>
                      <Text style={styles.dollarSign}>$</Text>
                    </View>
                    <Text style={styles.saleText}>Nothing for Sale</Text>
                  </View>
                  <View style={styles.separatorLine} />
                </View>
              )}
            </>
          )}
        </View>
      </Animated.View>

      {/* Dialog Modal for More Options */}
      <Modal
        visible={dialogVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setDialogVisible(false)}>
        <TouchableOpacity
          style={styles.dialogOverlay}
          onPress={() => setDialogVisible(false)}>
          <View style={styles.dialogContainer}>
            <TouchableOpacity
              style={styles.dialogOption}
              onPress={() => {
                setDialogVisible(false);
                setReportModalVisible(true);
              }}>
              <Text style={styles.dialogText}>⚠️ Report</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dialogOption}
              onPress={() => setDialogVisible(false)}>
              <Text style={styles.dialogText}>🔗 Share Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dialogOption}
              onPress={() => setDialogVisible(false)}>
              <Text style={styles.dialogText}>🚫 Block</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Complaints Modal */}
      <Modal
        visible={reportModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setReportModalVisible(false)}>
        <TouchableOpacity
          style={styles.dialogOverlay}
          onPress={() => setReportModalVisible(false)}>
          <View style={[styles.dialogContainer, {height: height * 0.5}]}>
            {[
              'Spam account',
              'Nudity, Pornography, or Violence',
              'Pretending to be someone else',
              'Inappropriate comments',
              'Harassment or Bullying',
              'Breach of our Intellectual Property',
            ].map((complaint, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dialogOption}
                onPress={handleReportPress}>
                <Text style={styles.dialogText}>{complaint}</Text>
                <Text style={styles.arrow}> &gt;</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Alert Modal */}
      <Modal
        visible={alertModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setAlertModalVisible(false)}>
        <View style={styles.alertOverlay}>
          <View style={styles.alertContainer}>
            <Text style={styles.alertText}>
              Thank you for submitting your report
            </Text>
            <TouchableOpacity
              style={styles.alertButton}
              onPress={() => setAlertModalVisible(false)}>
              <Text style={styles.alertButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  toggleButton: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  toggleBar: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
  },
  threeDotsButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  threeDots: {
    fontSize: 20,
    color: '#000',
  },
  profileContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileImageContainer: {
    marginTop: 20,
    marginBottom: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#ff69b4',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginVertical: 10,
  },
  followStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  followStats: {
    fontSize: 14,
    color: '#777',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  followButton: {
    backgroundColor: '#ff69b4',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  messageButton: {
    backgroundColor: '#555',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: '#ddd',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  tabContainer: {
    alignItems: 'center',
  },
  tab: {
    fontSize: 16,
    color: '#555',
  },
  activeTab: {
    color: '#ff69b4',
    fontWeight: 'bold',
  },
  pinkBar: {
    width: 30,
    height: 3,
    backgroundColor: '#ff69b4',
    marginTop: 5,
    borderRadius: 1.5,
  },
  separatorLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  imageWrapper: {
    position: 'relative',
    width: width * 0.4,
    height: width * 0.4,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  saveIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 5,
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
  },
  saleContainer: {
    alignItems: 'center',
    width: '100%',
  },
  saleRectangle: {
    width: '80%',
    height: 120,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dollarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ff69b4',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  dollarSign: {
    color: '#fff',
    fontSize: 24,
  },
  saleText: {
    fontSize: 16,
    color: '#555',
  },
  dialogOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  dialogOption: {
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dialogText: {
    fontSize: 16,
    color: '#333',
  },
  arrow: {
    fontSize: 16,
    color: '#333',
  },
  alertOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertContainer: {
    backgroundColor: '#000',
    width: '80%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  alertText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  alertButton: {
    backgroundColor: '#ff69b4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  alertButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UserProfileModal;
