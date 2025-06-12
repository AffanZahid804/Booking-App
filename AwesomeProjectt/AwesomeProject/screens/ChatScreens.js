import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import vector icons

const { width } = Dimensions.get('window');

const ChatScreen = ({ route }) => {
  const { userName } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hi, morning too iiiiin! I won the bidding for the second time. Thank you very much.😍', type: 'sent', timestamp: '10:00 AM' },
    { id: '2', text: 'We\'re glad you had a positive experience. Thank you for participating!✨', type: 'received', timestamp: '10:05 AM' },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { id: (messages.length + 1).toString(), text: message, type: 'sent', timestamp: new Date().toLocaleTimeString() },
      ]);
      setMessage('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text style={item.type === 'sent' ? styles.sentMessage : styles.receivedMessage}>
        {item.text}
      </Text>
      {item.type === 'sent' && <Text style={styles.timestamp}>{item.timestamp}</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 70 }} // Adjust padding for the input
      />
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="camera-alt" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="photo-library" size={24} color="#fff" />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Icon name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  chatContainer: {
    flex: 1,
    padding: 16,
  },
  messageContainer: {
    marginBottom: 10,
  },
  sentMessage: {
    backgroundColor: '#ff1493',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  receivedMessage: {
    backgroundColor: '#444',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  timestamp: {
    color: '#888',
    fontSize: 12,
    alignSelf: 'flex-end',
    marginTop: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#333',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#222',
    color: '#fff',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 5,
  },
  iconButton: {
    padding: 10,
  },
  sendButton: {
    backgroundColor: '#ff1493',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatScreen;

