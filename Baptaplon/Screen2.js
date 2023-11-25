import React, { useState } from 'react';
import { View, Text, Image, Pressable, FlatList, TextInput } from 'react-native';
import { NavigationContainer,useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

var array = [
  {
    image: require('./IMG/Martin.png'),
    name: 'Martin Radolph',
    des: 'show something',
    type: 'roadbike',
  },
  {
    image: require('./IMG/andrew.png'),
    name: 'Andrew Parker',
    des: 'show something',
    type: 'roadbike',
  },
  {
    image: require('./IMG/karen.png'),
    name: 'Karen Castillo',
    type: 'mountain',
  },
  {
    image: require('./IMG/maisy.png'),
    name: 'Maisy Humphrey',
    type: 'mountain',
  },
  {
    image:require('./IMG/zeus.jpg'),
    name:'T1 Zeus',
    des: 'Facebook',
    image2:require('./IMG/2_1callchamthan.png'),
},
{
    image:require('./IMG/faker.jpg'),
    name:'Faker',
    des: 'Facebook',
    type: 'mountain',
    image2:require('./IMG/2_1callchamthan.png'),
},
  {
    image: require('./IMG/Glenn.png'),
    name: 'Glenn',
    type: 'mountain',
  },
];


function Screen2({}) {
    const navigation = useNavigation();
    const [originalArray, setOriginalArray] = useState(array);
    const [state, setState] = React.useState(array);
    const [color, setColor] = React.useState(1);
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = () => {
        if (searchTerm === '') {
          setState(originalArray);
        } else {
          const filteredArray = originalArray.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setState(filteredArray);
        }
      };
  
    const clearSearch = () => {
      setSearchTerm('');
      setState(originalArray);
    };
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'black' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable onPress={() => { navigation.navigate("Screen3") }}>
            <Image source={require('./IMG/avatar.png')} style={{ width: 50, height: 50, borderRadius: 30 }} />
          </Pressable>
          <Text style={{ color: 'white', justifyContent: 'center', textAlign: 'center', marginLeft: 10, fontSize: 20, fontWeight: '700' }}>Chats </Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Image source={require('./IMG/Camera.png')} style={{ width: 50, height: 50 }} />
            <Image source={require('./IMG/tnnew.png')} style={{ width: 50, height: 50 }} />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <TextInput
            style={{ height: 30, borderColor: 'gray', backgroundColor: 'gray', borderWidth: 1, borderRadius: 5, paddingLeft: 10, flex: 1, color: 'white', width: '100%' }}
            placeholder="Search by name"
            onChangeText={text => {
              setSearchTerm(text);
              handleSearch();
            }}
            value={searchTerm}
          />
        </View>
        <View style={{ flex: 8 }}>
          <FlatList
            numColumns={1}
            data={state}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                   navigation.navigate('Screen2_1');
                }}
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 10,
                  margin: 5,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginBottom: 30,
                }}
              >
                <Image source={item.image} style={{ width: 75, height: 75, borderRadius: 100, alignItems: 'flex-start' }} />
                <Text style={{ color: 'white', marginLeft: 10 }}>{item.name}</Text>
              </Pressable>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
          <Image source={require("./IMG/iconchati2.png")} style={{ width: 35, height: 35, backgroundColor: 'black' }} />
          <Pressable onPress={() => { navigation.navigate("Screen2_1call") }}>
            <Image source={require("./IMG/videocall3.png")} style={{ width: 35, height: 35, backgroundColor: 'black' }} />
          </Pressable>
          <Pressable onPress={() => { navigation.navigate("Screen2_2db") }}>
            <Image source={require("./IMG/phonebook3.png")} style={{ width: 40, height: 40, backgroundColor: 'black' }} />
          </Pressable>
          <Image source={require("./IMG/tinkk.png")} style={{ width: 40, height: 40, backgroundColor: 'black' }} />
        </View>
      </View>
    );
  }
  
  export default Screen2;