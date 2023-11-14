import * as React from 'react';
import {StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  Button,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

var array = [
    {
        image:require('./IMG/iconmattrang.png'),
        name:'Chế độ tối',
        des: 'show something',
        type: 'roadbike',
    },
    {
        image:require('./IMG/trangthai.png'),
        name:'Trạng thái hoạt động',
        des: 'show something',
        type: 'roadbike',
    },
    {
        image:require('./IMG/tronang.png'),
        name:'Trợ năng',
        type: 'mountain',
    },
    {
        image:require('./IMG/quyenriengtu.png'),
        name:'Quyền riêng tư & an toàn',
        type: 'mountain',
    },
]
var array2 = [
    {
        image:require('./IMG/avataricon.png'),
        name:'Chế độ tối',
        des: 'show something',
        type: 'roadbike',
    },
    {
        image:require('./IMG/thongbao.png'),
        name:'Trạng thái hoạt động',
        des: 'show something',
        type: 'roadbike',
    },
    {
        image:require('./IMG/dondathang.png'),
        name:'Trợ năng',
        type: 'mountain',
    },
    {
        image:require('./IMG/a&file.png'),
        name:'Quyền riêng tư & an toàn',
        type: 'mountain',
    },
]


const Stack = createNativeStackNavigator();

function Screen3({navigation}){
    var navigation = useNavigation();
    var [state, setState] = React.useState(array);
    var [color , setColor] = React.useState(1);
    var [state2, setState] = React.useState(array2);
    //const [searchTerm, setSearchTerm] = useState('');
  return(
    <View style={ { flex:2 ,backgroundColor:'black',width:"100%",justifyContent:"center",alignItems:"center"}}>
        <View style={{alignItems: "center"}}>
        <View style={{flexDirection:"row"}}>
            <Text style={{color:"white",left:"20px",fontSize:20}}> Cài đặt </Text>
            <Pressable
                onPress={() => {
                    navigation.navigate("Screen2")
                }}
            >
            <Text style={{color:"blue",left:"130px",fontSize:17}}> Xong </Text>
            </Pressable>
        </View>
        <Image source={require("./IMG/avatar.png")} style={{width:"75px",height:"75px", borderRadius:"40px"}}/>
        <Image source={require("./IMG/cameraicon.png")} style={{width:"20px",height:"20px", borderRadius:"40px",
            top:"-20px",left:"20px"
            }}/>
        <Text style={{color:"white",fontWeight:"700",fontSize:18}}>Martin Radolph</Text>
        </View>
        <View style={{flex:0.55, backgroundColor:"dimgray", width:"90%",justifyContent:"center",
                        borderRadius:10,
                        }}>
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
                            borderBottomWidth:"1px"
                            //marginBottom:"30px"
                        }} >
                    
                            <Image 
                            source={item.image}
                            style={{width:"35px", height:'35px',borderRadius:20, alignItems:'flex-start'}}
                            //resizeMode='contain'
                            />
                            <Text style={{color:"white",marginLeft:"10px"}}>{item.name}</Text>

                        </Pressable>
                    );
                }}
                />
                </View>
                <View style={{flex:0.1, backgroundColor:"dimgray", width:"90%",justifyContent:"center",
                        borderRadius:10,marginTop:"20px"
                        }}>
                <Image source={require("./IMG/giamsat.png")} style={{width:"35px",height:"35px", borderRadius:"40px"}}/>
                </View>
                <View style={{flex:0.6, backgroundColor:"dimgray", width:"90%",justifyContent:"center",
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
                            <Text style={{color:"white",marginLeft:"10px"}}>{item.name}</Text>

                        </Pressable>
                    );
                }}
                />
                </View>
                <View style={{flex:0.6, backgroundColor:"dimgray", width:"90%",justifyContent:"center",
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
                            <Text style={{color:"white",marginLeft:"10px"}}>{item.name}</Text>

                        </Pressable>
                    );
                }}
                />
                </View>
    </View>
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
export default Screen3;