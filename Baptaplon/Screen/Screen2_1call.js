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
        image:require('../IMG/Martin.png'),
        name:'Martin Radolph',
        des: ' Cuộc gọi đến - Thứ sáu ',
        image2:require('../IMG/2_1callchamthan.png'),
    },
    {
        image:require('../IMG/andrew.png'),
        name:'Andrew Parker',
        des: ' Cuộc gọi đến - Thứ sáu ',
        type: 'roadbike',
        image2:require('../IMG/2_1callchamthan.png'),
    },
    {
        image:require('../IMG/karen.png'),
        name:'Karen Castillo',
        des: ' Cuộc gọi đến - Thứ năm ',
        type: 'mountain',
        image2:require('../IMG/2_1callchamthan.png'),
    },
    {
        image:require('../IMG/maisy.png'),
        name:'Maisy Humphrey',
        des: ' Cuộc gọi đến - Thứ tư ',
        image2:require('../IMG/2_1callchamthan.png'),
    },
    {
        image:require('../IMG/Glenn.png'),
        name:'Glenn',
        des: ' Cuộc gọi đến - Thứ tư ',
        type: 'mountain',
        image2:require('../IMG/2_1callchamthan.png'),
    },
    {
        image:require('../IMG/Glenn.png'),
        name:'Glenn',
        des: ' Cuộc gọi đi - Thứ ba ',
        type: 'mountain',
        image2:require('../IMG/2_1callchamthan.png'),
    },
    {
        image:require('../IMG/Glenn.png'),
        name:'Glenn',
        des: ' Cuộc gọi đến - Thứ hai ',
        type: 'mountain',
        image2:require('../IMG/2_1callchamthan.png'),
    },
    {
        image:require('../IMG/Glenn.png'),
        name:'Glenn',
        des: ' Cuộc gọi đi - Thứ hai ',
        type: 'mountain',
        image2:require('../IMG/2_1callchamthan.png'),
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
            <View style={{flexDirection:"row", justifyContent:"space-between", width:"100%", marginLeft:"0px",height:"70px",alignItems:"center"}}>
                <Image source={require("../IMG/2_1call11.png")} style={{height:"35px",width:"35px",marginLeft:"0px"}}/>
                <Text style={{color:"white" ,fontSize:"20px", fontWeight:"500"}}> Cuộc Gọi </Text>
                <Image source={require("../IMG/2_1callvideo.png")} style={{height:"35px",width:"35px"}}/>
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
                            marginBottom:"30px",
                            borderBottomWidth:"0.5px",
                            borderColor:"grey"
                        }} >
                    
                            <Image 
                            source={item.image}
                            style={{width:"45px", height:'45px',borderRadius:100, alignItems:'flex-start'}}
                            />
                            <View style={{flexDirection:"column"}}>
                            <Text style={{color:"white",marginLeft:"10px"}}>{item.name}</Text>
                            <Text style={{color:"grey",marginLeft:"10px"}}>{item.des}</Text>
                            </View>
                            <View style={{alignItems:'flex-end',justifyContent:"flex-end"}}>
                            <Image 
                            source={item.image2}
                            style={{width:"25px", height:'25px',borderRadius:100, alignItems:'flex-end',justifyContent:"flex-end"}}
                            />
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
                        <Image source={require("../IMG/iconchat2.jpg")} style={{width:"50px",height:"50px",backgroundColor:'black'}}/>
                        </Pressable>
                        <Pressable onPress={() => {
                            navigation.navigate("Screen2_1call")
                        }}>
                        <Image source={require("../IMG/videocall2.png")} style={{width:"50px",height:"50px",backgroundColor:'black'}}/>
                        </Pressable>
                        <Pressable onPress={() => {
                            navigation.navigate("Screen2_2db")
                        }}>
                        <Image source={require("../IMG/phonebook3.png")} style={{width:"40px",height:"40px",backgroundColor:'black'}}/>
                        </Pressable>
                        <Pressable onPress={() => {
                            navigation.navigate("Screen2_4tin")
                                } }>
                            <Image source={require("../IMG/tinkk.png")} style={{ width: 40, height: 40, backgroundColor: 'black' }} />
                        </Pressable>
                    </View>
        </View>
    );

}
export default Screen2;
