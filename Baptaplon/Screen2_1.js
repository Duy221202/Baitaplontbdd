// Screen2_1.js
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, Button, TextInput, FlatList,StyleSheet,Pressable } from 'react-native';

const url = 'https://6558765ee93ca47020a95c37.mockapi.io/mess';

const Screen2_1 = () => {
  const [message, setMessage] = useState('');
  const scrollViewRef = useRef();
  const [data, setData] = useState([]);
  const [newGhichu, setNewGhichu] = useState('');
  const [inputWidth, setInputWidth] = useState(30); // Initial width

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
        setInputWidth(30);
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
    setInputWidth(text.length * 10); 
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
        <Pressable onPress={() => {
          navigation.navigate("Screen2")
        }}>
        <Image source={require('./IMG/2_1back.png')} style={{ width: '25px', height: '25px' }} />
        </Pressable>
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
      <View style={{height:"480px",justifyContent:"flex-end", alignItems:"flex-end"}}>
        <FlatList
          style={{width:"180px"}}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
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
          value={newGhichu}
          onChangeText={(text) => setNewGhichu(text)}
        />
        <Pressable style={styles.addButton} onPress={addGhichu}>
        <Text style={styles.txtButton}>Send</Text>
      </Pressable>
        <Image source={require('./IMG/2_1like.png')} style={{ width: '25px', height: '25px' }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input:{
    height: 50,
    width: 360,
    backgroundColor:"white",
    borderColor:'orange',
    borderWidth:1,
    borderRadius: 10

  },
  noteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor:'orange',
    borderWidth:1
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  txtButton:{
    color:'white'
  },
  flat:{
    color:"black"
  }
});

export default Screen2_1;
