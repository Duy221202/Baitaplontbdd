import React, { useState } from 'react';
import { View, Text, Image, Pressable, TextInput, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const Screen2 = ({ navigation }) => {
    const route = useRoute();
    const { data } = route.params;
    console.log(data);

    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'black' }}>
            {
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Pressable
                        onPress={() => {
                           navigation.navigate('Screen3', {data: data})
                        }}
                    >
                        <Image source={{ uri: data.avt }} style={{ width: "50px", height: "50px", borderRadius: "30px", resizeMode: "contain" , marginTop:'8px'}} />
                    </Pressable>
                    <Text
                        style={{
                            color: 'white', justifyContent: "center", textAlign: "center", marginLeft: "10px", fontSize: "20px",
                            fontWeight: '700'
                        }}>{data.Name}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-end" }}>
                        <Image source={require("./IMG/Camera.png")} style={{ width: "50px", height: "50px" }}></Image>
                        <Image source={require("./IMG/tnnew.png")} style={{ width: "50px", height: "50px" }}></Image>
                    </View>
                </View>
            }
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',

            }}>
                <TextInput
                    style={{
                        height: 30, borderColor: 'gray', backgroundColor: "gray", borderWidth: 1, borderRadius: 5,
                        paddingLeft: 10, flex: 1, color: "white", width: "100%"
                    }}
                    placeholder="Search by name"
                    placeholderTextColor="rgba(0,0,0,0.5)"
                />
                <Pressable
                    style={{ borderRadius: '5px', borderWidth: '1px', padding: '5px' }}
                    title="Roadbike"
                    onPress={() => {

                    }}
                >
                    <Text style={{ color: "white" }}>Roadbike</Text>
                </Pressable>

            </View>
            <ScrollView 
            horizontal
            pagingEnabled
            >
            <View style={{ flex: 1.5 , flexDirection:"row"}} horizontal={true}>
                {
                Object.entries(data.banbe).map(([item, value]) =>{
                        console.log(value);
                        return(
                            <Pressable
                            key={item} // Đảm bảo sử dụng khóa duy nhất cho mỗi mục trong mảng
                            onPress={() => {
                                //navigation.navigate('Screen3');
                            }}
                            style={{
                                height: '50px',
                                width: '12%',
                                borderRadius: '10px',
                                margin: '5px',
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: 'center',
                                marginBottom: "30px", 
                            }} >
                            <View style={{ flexDirection: "column" }}>
                                <Image
                                    source={{uri:value}}
                                    style={{ width: "60px", height: '60px', borderRadius: '100px', alignItems: 'flex-start', marginTop: '30px' }}
                                //resizeMode='contain'
                                />
                                <Text style={{ color: "grey", marginLeft: "0px" , textAlign:'center' }}>{item}</Text>
                            </View>
                        </Pressable>
                        )
                    })
                }
            </View>

            </ScrollView>
            <View style={{ flex: 8}} >
                {
                Object.entries(data.banbe).map(([item, value]) =>{
                        console.log(value);
                        return(
                            <Pressable
                            key={item} // Đảm bảo sử dụng khóa duy nhất cho mỗi mục trong mảng
                            onPress={() => {
                                //navigation.navigate('Screen3');
                            }}
                            style={{
                                height: '50px',
                                    width: '100%',
                                    borderRadius: '10px',
                                    margin: '5px',
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: 'center',
                                    marginBottom: "30px"
                            }} >
                            
                                <Image
                                    source={{uri:value}}
                                    style={{ width: "70px", height: '70px', borderRadius: 100, alignItems: 'flex-start' }}
                                //resizeMode='contain'
                                />
                                <Text style={{ color: "white", marginLeft: "10px" }}>{item}</Text>
                        </Pressable>
                        )
                    })
                }
            </View>
         
            
            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                <Image source={require("./IMG/iconchat2.jpg")} style={{ width: "50px", height: "50px", backgroundColor: 'black' }} />
                <Image source={require("./IMG/videocall2.png")} style={{ width: "50px", height: "50px", backgroundColor: 'black' }} />
                <Image source={require("./IMG/phonebook3.png")} style={{ width: "40px", height: "40px", backgroundColor: 'black' }} />
                <Image source={require("./IMG/tinkk.png")} style={{ width: "40px", height: "40px", backgroundColor: 'black' }} />
            </View>
                    <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                        <Image source={require("./IMG/iconchat2.jpg")} style={{width:"50px",height:"50px",backgroundColor:'black'}}/>
                        <Pressable onPress={() => {
                            navigation.navigate("Screen2_1call")
                        }}>
                        <Image source={require("./IMG/videocall2.png")} style={{width:"50px",height:"50px",backgroundColor:'black'}}/>
                        </Pressable>
                        <Image source={require("./IMG/phonebook3.png")} style={{width:"40px",height:"40px",backgroundColor:'black'}}/>
                        <Image source={require("./IMG/tinkk.png")} style={{width:"40px",height:"40px",backgroundColor:'black'}}/>
                    </View>
=======
        </View>
    );

}
export default Screen2;
