import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, TextInput, FlatList, StyleSheet } from 'react-native';

const url = 'https://654afc225b38a59f28ee6878.mockapi.io/TodoList';

const Sc2 = () => {
  const [data, setData] = useState([]);
  const [newGhichu, setNewGhichu] = useState('');

  useEffect(() => {
    fetchGhiChu();
  }, []);

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
        body: JSON.stringify({ doSomthing: newGhichu }),
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

  const renderItem = ({ item }) => (
    <View style={styles.noteContainer}>
      <Text style={styles.flat}>{item.doSomthing}</Text>
      <Pressable onPress={() => deleteGhichu(item.id)}>
        <Text>Delete</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Thêm ghi chú mới"
        value={newGhichu}
        onChangeText={(text) => setNewGhichu(text)}
      />
      <Pressable style={styles.addButton} onPress={addGhichu}>
        <Text style={styles.txtButton}>Add Note</Text>
      </Pressable>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
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
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  txtButton:{
    color:'white'
  },
  flat:{
    color:"orange"
  }
});

export default Sc2;
