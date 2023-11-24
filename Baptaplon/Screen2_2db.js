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
        image:require('./IMG/wibu.jpg'),
        name:'Martin Radolph',
        des: 'Facebook',
        image2:require('./IMG/2_1callchamthan.png'),
    },
    {
        image:require('./IMG/wibu2.jpg'),
        name:'Andrew Parker',
        des: 'Facebook',
        type: 'roadbike',
        image2:require('./IMG/2_1callchamthan.png'),
    },
    {
        image:require('./IMG/karen.png'),
        name:'wibu1',
        des: 'Facebook',
        type: 'mountain',
        image2:require('./IMG/2_1callchamthan.png'),
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
        image:require('./IMG/wibu3.jpg'),
        name:'T1 Keria',
        des: 'Facebook',
        type: 'mountain',
        image2:require('./IMG/2_1callchamthan.png'),
    },
    {
        image:require('./IMG/Glenn.png'),
        name:'Glenn',
        des: 'Facebook',
        type: 'mountain',
        image2:require('./IMG/2_1callchamthan.png'),
    },
    {
        image:require('./IMG/Glenn.png'),
        name:'Glenn',
        des: 'Facebook',
        type: 'mountain',
        image2:require('./IMG/2_1callchamthan.png'),
    },
]

const Stack = createNativeStackNavigator();

function Screen2_2db({}){
    var navigation = useNavigation();
    var [state, setState] = React.useState(array);
    var [color , setColor] = React.useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    
    return(
        <View style={{ flex:1 , justifyContent: 'center',backgroundColor:'black' }}>
            <View style={{flexDirection:"row", justifyContent:"space-between", width:"100%", marginLeft:"0px",height:"70px",alignItems:"center"}}>
                <Text>hihi</Text>
                <Text style={{color:"white" ,fontSize:"20px", fontWeight:"500"}}> Danh bạ </Text>
                <Pressable
                onPress={() => {
                    navigation.navigate("Screen2")
                }}
            >
            <Text style={{color:"blue",fontSize:17}}> Xong </Text>
            </Pressable>
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
                            height: '40px',
                            width: '100%',
                            borderRadius: '10px',
                            margin: '5px',
                            flexDirection:"row",
                            justifyContent:"flex-start",
                            alignItems:'center',
                            marginBottom:"30px",
                            borderBottomWidth:"0.5px",
                            borderColor:"grey"
                        }} >
                    
                            <Image 
                            source={item.image}
                            style={{width:"45px", height:'40px',borderRadius:100, alignItems:'flex-start'}}
                            />
                            <View style={{flexDirection:"column"}}>
                            <Text style={{color:"white",marginLeft:"10px"}}>{item.name}</Text>
                            <Text style={{color:"grey",marginLeft:"10px"}}>{item.des}</Text>
                            </View>
                            <View style={{alignItems:'flex-end',justifyContent:"flex-end"}}>
                            </View>

                        </Pressable>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                        <Pressable onPress={() => {
                            navigation.navigate("Screen2")
                        }}>
                        <Image source={require("./IMG/iconchat2.jpg")} style={{width:"50px",height:"50px",backgroundColor:'black'}}/>
                        </Pressable>
                        <Pressable onPress={() => {
                            navigation.navigate("Screen2_1call")
                        }}>
                        <Image source={require("./IMG/videocall2.png")} style={{width:"50px",height:"50px",backgroundColor:'black'}}/>
                        </Pressable>
                        <Image source={require("./IMG/phonebook3.png")} style={{width:"40px",height:"40px",backgroundColor:'black'}}/>
                        <Image source={require("./IMG/tinkk.png")} style={{width:"40px",height:"40px",backgroundColor:'black'}}/>
                    </View>
        </View>
    );

}
export default Screen2_2db;
