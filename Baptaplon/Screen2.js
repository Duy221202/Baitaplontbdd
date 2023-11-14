import React, { useState }  from 'react';
import {
View,
Text,
Image,
Pressable,
FlatList,
Button,
TextInput,
ScrollView
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

var array = [
    {
        image:require('./IMG/Martin.png'),
        name:'Martin Radolph',
        des: 'show something',
        type: 'roadbike',
    },
    {
        image:require('./IMG/andrew.png'),
        name:'Andrew Parker',
        des: 'show something',
        type: 'roadbike',
    },
    {
        image:require('./IMG/karen.png'),
        name:'Karen Castillo',
        type: 'mountain',
    },
    {
        image:require('./IMG/maisy.png'),
        name:'Maisy Humphrey',
        type: 'mountain',
    },
    {
        image:require('./IMG/Glenn.png'),
        name:'Glenn',
        type: 'mountain',
    },
    {
        image:require('./IMG/Glenn.png'),
        name:'Glenn',
        type: 'mountain',
    },
    {
        image:require('./IMG/Glenn.png'),
        name:'Glenn',
        type: 'mountain',
    },
    {
        image:require('./IMG/Glenn.png'),
        name:'Glenn',
        type: 'mountain',
    },
]

const Stack = createNativeStackNavigator();

function Screen2({}){
    var navigation = useNavigation();
    var [state, setState] = React.useState(array);
    var [color , setColor] = React.useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        const filteredArray = originalArray.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setState(filteredArray);
    };
    
    return(
        <View style={{ flex:1 , justifyContent: 'center',backgroundColor:'black' }}>
            <View style={{flexDirection:"row",alignItems: "center"}}>
                <Pressable
                        onPress={() => {
                            navigation.navigate("Screen3")
                        }}    
                >
                <Image source={require("./IMG/avatar.png")} style={{width:"50px",height:"50px", borderRadius:"30px"}}/>
                </Pressable>
                <Text 
                    style={{color:'white',justifyContent:"center",textAlign:"center", marginLeft:"10px",fontSize:"20px",
                    fontWeight:'700'
                    }}>Chats </Text>
                <View style={{flex:1 ,flexDirection:'row',justifyContent:"flex-end"}}>
                <Image source={require("./IMG/Camera.png")} style={{width:"50px",height:"50px"}}></Image>
                <Image source={require("./IMG/tnnew.png")} style={{width:"50px",height:"50px"}}></Image>
                </View>
            </View>
            <View style={{
                flex:1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',

            }}>
                <TextInput
                    style={{ height: 30, borderColor: 'gray', backgroundColor:"gray",borderWidth: 1, borderRadius: 5,
                    paddingLeft: 10, flex: 1,color:"white",width:"100%" }}
                    placeholder="Search by name"
                    placeholderTextColor="rgba(0,0,0,0.5)"
                    onChangeText={text => setSearchTerm(text)}/>
                <Pressable
                    style={([{borderRadius:'5px',borderWidth:'1px',padding:'5px'},
                    (color == 3 ? {backgroundColor:'blue'} : null)

                ])}
                    title="Roadbike"
                    onPress={() => {
                    var newarray = originalArray.filter(item => item.type === 'roadbike');
                    setState(newarray);
                    setColor(3);
                    }}
                >
                    <Text style={{color:"white"}}>Roadbike</Text>
                </Pressable>

            </View>
            <View style={{flex :1.5}}>
            <ScrollView 
                horizontal
                pagingEnabled
                >
            
                <FlatList
                horizontal = {true}
                //numColumns={5}
                data={state}
                renderItem={({ item }) => {
                    const fullName = item.name;
                    const firstName = fullName.split(' ')[0];
                    return(
                        <Pressable
                        onPress={() => {
                            //navigation.navigate('Screen3');
                        }}
                        style={{
                            height: '50px',
                            width: '20%',
                            borderRadius: '10px',
                            margin: '5px',
                            flexDirection:"row",
                            justifyContent:"flex-start",
                            alignItems:'center',
                            marginBottom:"30px"
                        }} >
                            <View style={{flexDirection:"column"}}>
                            <Image 
                            source={item.image}
                            style={{width:"50px", height:'50px',borderRadius:100, alignItems:'flex-start'}}
                            //resizeMode='contain'
                            />
                            <Text style={{color:"grey",marginLeft:"0px"}}>{firstName}</Text>
                            </View>
                        </Pressable>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
                />
                 </ScrollView>
            </View>
            <View style={{flex :8}}>
                <FlatList
                numColumns={1}
                data={state}
                renderItem={({ item }) => {
                    return(
                        <Pressable
                        onPress={() => {
                            //navigation.navigate('Screen3');
                        }}
                        style={{
                            height: '50px',
                            width: '100%',
                            borderRadius: '10px',
                            margin: '5px',
                            flexDirection:"row",
                            justifyContent:"flex-start",
                            alignItems:'center',
                            marginBottom:"30px"
                        }} >
                    
                            <Image 
                            source={item.image}
                            style={{width:"75px", height:'75px',borderRadius:100, alignItems:'flex-start'}}
                            //resizeMode='contain'
                            />
                            <Text style={{color:"white",marginLeft:"10px"}}>{item.name}</Text>

                        </Pressable>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
                    <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                        <Image source={require("./IMG/iconchat2.jpg")} style={{width:"50px",height:"50px",backgroundColor:'black'}}/>
                        <Image source={require("./IMG/videocall2.png")} style={{width:"50px",height:"50px",backgroundColor:'black'}}/>
                        <Image source={require("./IMG/phonebook3.png")} style={{width:"40px",height:"40px",backgroundColor:'black'}}/>
                        <Image source={require("./IMG/tinkk.png")} style={{width:"40px",height:"40px",backgroundColor:'black'}}/>
                    </View>
        </View>
    );

}
export default Screen2;
