// Screen2_1.js
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, Button, TextInput, FlatList } from 'react-native';
import { addMessage, getMessages } from './data'; // Đường dẫn tới file data.js

const Screen2_1 = () => {
  const [message, setMessage] = useState('');
  const scrollViewRef = useRef();

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      addMessage(message);
      setMessage('');
    }
  };

  useEffect(() => {
    console.log('Messages updated:', getMessages());
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [getMessages()]);

  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', height: 70 }}>
        <Image source={require('./IMG/2_1back.png')} style={{ width: '25px', height: '25px' }} />
        <Image source={require('./IMG/Martin.png')} style={{ width: '50px', height: '50px', borderRadius: '30px', marginLeft: '20px' }} />
        <View style={{ flexDirection: 'column', marginLeft: '10px' }}>
          <Text style={{ color: 'white' }}>Martin Radolph</Text>
          <Text style={{ color: 'grey' }}> Messenger</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: '130px' }}>
          <Image source={require('./IMG/2_1call.png')} style={{ width: '25px', height: '25px' }} />
          <Image source={require('./IMG/2_1callvideo.png')} style={{ width: '25px', height: '25px', marginLeft: '20px' }} />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          ref={scrollViewRef}
          data={getMessages()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: 'blue', padding: 10, margin: 5, borderRadius: 5 }}>
              <Text style={{ color: 'white' }}>{item}</Text>
            </View>
          )}
          inverted={true}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 40 }}>
        <Image source={require('./IMG/2_1cham.png')} style={{ width: '25px', height: '25px' }} />
        <Image source={require('./IMG/2_1camera.png')} style={{ width: '25px', height: '25px' }} />
        <Image source={require('./IMG/2_1IMG.png')} style={{ width: '25px', height: '25px' }} />
        <Image source={require('./IMG/2_1mic.png')} style={{ width: '25px', height: '25px' }} />
        <TextInput
          placeholder='aa'
          style={{ backgroundColor: 'grey', borderRadius: '20px', flex: 1, marginHorizontal: 10, height: 30 }}
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <Image source={require('./IMG/2_1like.png')} style={{ width: '25px', height: '25px' }} />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

export default Screen2_1;
