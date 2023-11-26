import * as React from 'react';
import {StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  ScrollView,
  Button,
} from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

var array = [
    {
        image:require('./IMG/Ucd.png'),
        name:'Chủ đề',
        type: 'roadbike',
    },
    {
        image:require('./IMG/Ucx.png'),
        name:'Cảm xúc nhanh',
        type: 'roadbike',
    },
    {
        image:require('./IMG/Ubd.png'),
        name:'Biệt danh',
        show: '>',
        type: 'mountain',
    },
    {
        image:require('./IMG/Utn.png'),
        name:'Hiệu ứng từ ngữ',
        type: 'mountain',
    },
]
var array2 = [
    {
        image:require('./IMG/UG.png'),
        name:'Tạo nhóm chat với Martin',
        type: 'roadbike',
    },
    {
        image:require('./IMG/Useen.png'),
        name:'Xem file phương tiện, file liên kết',
        show: '>',
        type: 'roadbike',
    },
    {
        image:require('./IMG/Ughim.png'),
        name:'Tin nhắn đã ghim',
        show: '>',
        type: 'mountain',
    },
    {
        image:require('./IMG/Ulock.png'),
        name:'Đi đến cuộc trò truyện bí mật',
        type: 'mountain',
    },
    {
        image:require('./IMG/Usreach.png'),
        name:'Tìm kiếm trong cuộc trò chuyện',
        type: 'roadbike',
    },
    {
        image:require('./IMG/Utb.png'),
        name:'Thông báo & âm thanh',
        show: '>',
        type: 'roadbike',
    },
    {
        image:require('./IMG/Ucs.png'),
        name:'Chia sẽ thông tin liên hệ',
        type: 'roadbike',
    },
]
var array3 = [
    {
        image:require('./IMG/Uhc.png'),
        name:'Hạn chế',
    },
    {
        image:require('./IMG/UC.png'),
        name:'Chặn',
    },
    {
        image:require('./IMG/Ubc.png'),
        name:'Báo cáo',
        type: 'Đống góp ý kiến và báo cáo cuộc trò chuyện'
    },
]


const Stack = createNativeStackNavigator();

const Screen2user =({navigation}) =>{
    
    var [state, setState] = React.useState(array);
    var [state2, setState] = React.useState(array2);
    var [state3, setState] = React.useState(array3);

  return(
    <ScrollView style={{ flex: 3, backgroundColor: 'black',height:"1080px" }}>
    <View style={ {backgroundColor:'black',width:"100%",justifyContent:"center",alignItems:"center"}}>
        <View style={{alignItems: "center"}}>
        <View style={{flexDirection:"row", justifyContent:"flex-start",alignItems:"flex-start", width:"250%"}}>
            <Pressable
                onPress={() => {
                    navigation.navigate("Screen2_1")
                }}
            >
            <Image source={require("./IMG/2_1back.png")} style={{width:"25px",height:"25px", borderRadius:"40px",marginBottom:"5px",top:"5px"}}/>
            </Pressable>
        </View>
        <Image source={require("./IMG/Martin.png")} style={{width:"75px",height:"75px", borderRadius:"40px",marginBottom:"5px"}}/>
        <Text style={{color:"white",fontWeight:"700",fontSize:18}}>Martin Radolph</Text>
        </View>
        <View style={{justifyContent:"center", alignItems:"center", flexDirection:"row", height:100}}>
            <View>
                <Image source={require("./IMG/trangcanhan.png")} style={{height:40,width:40,borderRadius:50}}/>
                <Text style={{color:"white",right:"15px"}}>Trang cá nhân  </Text>
            </View>
            <View>
                <Image source={require("./IMG/Usertb.png")} style={{height:40,width:40,borderRadius:50}}/>
                <Text style={{color:"white"}}>Thông báo  </Text>
            </View>
        </View>
        
        <Text style={{color:"grey",fontStyle:"normal",fontSize:"18px",width:"90%",height:"30px"}}>Tùy chỉnh</Text>
        <View style={{ width:390,alignItems:"center",height:"1080px"}} >

        <View style={{ backgroundColor:"dimgray", width:"90%",justifyContent:"center",
                        borderRadius:10,
                        }}>
                <FlatList
                numColumns={1}
                data={state}
                renderItem={({ item }) => {
                    return(
                        <Pressable
                        onPress={() => {
                            if(item.name === "Chế độ tối"){
                                
                            }
                            
                        }}
                        style={{
                            borderBottomWidth: 1,
                            height: '50px',
                            width: '100%',
                            borderRadius: '10px',
                            margin: '5px',
                            flexDirection:"row",
                            justifyContent:"space-between",
                            alignItems:'center',
                           
                            //marginBottom:"30px"
                        }} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image 
                            source={item.image}
                            style={{width:"35px", height:'35px',borderRadius:50, alignItems:'flex-start'}}
                            //resizeMode='contain'
                            />
                            <Text style={{color:"white",marginLeft:"10px"}}>{item.name}</Text>
                        </View>
                            <Text style={{fontSize:"20px",marginLeft:"50px"}}>{item.show}</Text>
                            
                        </Pressable>
                    );
                }}
                />
                </View>
                <Text style={{color:"grey", fontSize:"18px",width:"90%",justifyContent:"center",alignItems:"center",height:"40px"}}>Hành động khác</Text>
                <View style={{ backgroundColor:"dimgray", width:"90%",justifyContent:"center",
                        borderRadius:10,marginTop:"20px"
                        }}>
                <FlatList
                numColumns={1}
                data={state2}
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
                            justifyContent:"space-between",
                            alignItems:'center',
                            borderBottomWidth:"1px"
                            //marginBottom:"30px"
                        }} >
                    
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image 
                            source={item.image}
                            style={{width:"35px", height:'35px',borderRadius:20, alignItems:'flex-start'}}
                            //resizeMode='contain'
                            />
                            <Text style={{color:"white",marginLeft:"10px"}}>{item.name}</Text>
                        </View>
                            <Text style={{fontSize:"20px",marginLeft:"50px"}}>{item.show}</Text>

                        </Pressable>
                    );
                }}
                />
                </View>
                <Text style={{color:"grey", justifyContent:"flex-start",alignItems:"flex-start", width:"90%",fontSize:"18px"}}>Quyền riêng tư và hỗ trợ</Text>
                <View style={{ backgroundColor:"dimgray", width:"90%",justifyContent:"center",
                        borderRadius:10,marginTop:"20px"
                        }}>
                <FlatList
                numColumns={1}
                data={state3}
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
                            borderBottomWidth:"1px"
                            //marginBottom:"30px"
                        }} >
                    
                            <Image 
                            source={item.image}
                            style={{width:"35px", height:'35px',borderRadius:20, alignItems:'flex-start'}}
                            //resizeMode='contain'
                            />
                            <View>
                            <Text style={{color:"white",marginLeft:"10px"}}>{item.name}</Text>
                            <Text style={{color:"white",marginLeft:"8px"}}>{item.type}</Text>
                            </View>
                        </Pressable>
                    );
                }}
                />
                </View>
            
            </View>
            </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
  },
  imgsc3:{
      height: '260px',
      width: '260px',
      resizeMode: 'contain',
      marginLeft: 60,
  },
  vt:{
      marginLeft: 10,
  },
  t1:{
      marginTop: 15,
      fontSize: 30,
      fontWeight: 'bold',
  },
  v1:{
      flexDirection:'row',
      marginTop: 10,
  },
  t2:{
      fontSize: 25,
  },
  t3:{
      fontSize: 25,
      fontWeight: 'bold',
      marginLeft: 30,
  },
  t4:{
      marginTop: 25,
      fontSize: 20,
      fontWeight: 'bold',
  },
  t5:{
      fontSize: 18,
      marginTop: 20,
  },
  v2:{
      flexDirection: 'row',
      marginTop: 20,
  },
  imgheart:{
      height: 35,
      width: 35,
      resizeMode: 'contain',
      marginTop: 20,
      marginLeft: 20,
  },
  btn:{
      height: 50,
      width: 260,
      backgroundColor: 'red',
      marginLeft: 45,
      marginTop: 15,
      borderRadius: 60,
  },
  t6:{
      textAlign: 'center',
      marginTop: 10,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
  },
});
export default Screen2user;