import React, { useState, useRef, useEffect } from 'react';
import { View,
   Text,
   Image,
   TextInput,
   FlatList,
   StyleSheet,
   Pressable,
   ScrollView} from 'react-native';

const url = 'https://6558765ee93ca47020a95c37.mockapi.io/mess';

const Screen2_1 = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [newGhichu, setNewGhichu] = useState('');

  const fetchGhiChu = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const addGhichu = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mess: newGhichu }),
      });

      if (response.ok) {
        fetchGhiChu();
        setNewGhichu('');
      } else {
        console.error('Error adding note:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  useEffect(() => {
    fetchGhiChu();
  }, []);

  const deleteGhichu = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchGhiChu();
      } else {
        console.error('Error deleting note:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const handleInputChange = (text) => {
    setNewGhichu(text);
  };

  const renderItem = ({ item }) => (
    <View style={styles.noteContainer}>
      <Text style={styles.flat}>{item.mess}</Text>
      <Pressable onPress={() => deleteGhichu(item.id)}>
        <Text>Thu Hoi</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', height: 70 }}>
        <Pressable onPress={() => { navigation.navigate("Screen2") }}>
          <Image source={require('./IMG/2_1back.png')} style={{ width: 25, height: 25 }} />
        </Pressable>
        <Pressable onPress={() => {
          navigation.navigate("Screen2user")
        }}>
        <Image source={require('./IMG/Martin.png')} style={{ width: 50, height: 50, borderRadius: 30 }} />
        </Pressable>
        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
          <Text style={{ color: 'white' }}>Martin Radolph</Text>
          <Text style={{ color: 'grey' }}> Messenger</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginLeft: 130 }}>
          <Image source={require('./IMG/2_1call.png')} style={{ width: 25, height: 25 }} />
          <Image source={require('./IMG/2_1callvideo.png')} style={{ width: 25, height: 25, marginLeft:5  }} />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}
        style={{ height: 480 }}
      >
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </ScrollView>

      <View behavior='padding' style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 40 }}>
        <Image source={require('./IMG/2_1cham.png')} style={{ width: 25, height: 25 }} />
        <Image source={require('./IMG/2_1camera.png')} style={{ width: 25, height: 25 }} />
        <Image source={require('./IMG/2_1IMG.png')} style={{ width: 25, height: 25 }} />
        <Image source={require('./IMG/2_1mic.png')} style={{ width: 25, height: 25 }} />
        <TextInput
          placeholder='Type a message...'
          style={{ backgroundColor: 'grey', borderRadius: 20, flex: 1, marginHorizontal: 10, height: 30 }}
          value={newGhichu}
          onChangeText={handleInputChange}
          onSubmitEditing={addGhichu}
        />
        <Image source={require('./IMG/2_1like.png')} style={{ width: 25, height: 25 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'orange',
    borderWidth: 1,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  txtButton: {
    color: 'white',
  },
  flat: {
    color: 'black',
  },
});

export default Screen2_1;
