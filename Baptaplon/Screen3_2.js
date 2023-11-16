import React from 'react';
import { View, Text, Image,FlatList,Pressable } from 'react-native';
import { NavigationContainer,useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


var array = [
    {
        image:require('./IMG/tk.png'),
        name:'Tài khoản',
        show: '>',
        type: 'roadbike',
    },
    {
        image:require('./IMG/3_2tt.png'),
        name:'Thông tin cá nhân',
        show: '>',
        type: 'roadbike',
    },
    {
        image:require('./IMG/3_2mk.png'),
        name:'Mặt khẩu và bảo mặt',
        show: '>',
        type: 'mountain',
    },
    {
        image:require('./IMG/3_2tt&q.png'),
        name:'Thông tin và quyền của bạn',
        show: '>',
        type: 'mountain',
    },
    {
        image:require('./IMG/3_2tuychon.png'),
        name:'Tùy chọn quảng cáo',
        show: '>',
        type: 'mountain',
    },
    {
        image:require('./IMG/3_2thanhtoan.png'),
        name:'Thanh toán',
        show: '>',
        type: 'mountain',
    },
]

const Stack = createNativeStackNavigator();
const Screen3_2 =()=> {
    const route = useRoute();
    const {data} = route.params;
    const navigation = useNavigation();
    const [state, setState] = React.useState(array);
    return (
        <View style={{ backgroundColor: "black", padding: 16,justifyContent:"center",alignItems:"center",height:720}}>
            <View style={{ flexDirection: "row"}}>
                <Image
                    source={require("./IMG/metaicon.png")}
                    style={{ width: 35, height: 35, borderRadius: 20 }}
                />
                <Text style={{ color: "white", fontSize: 18, marginLeft: 8 }}>Meta</Text>
            </View>

            <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
                Trung tâm tài khoản
            </Text>

            <Text style={{ color: "white", fontSize: 14, marginTop: 8,textAlign:"center",width:"340px" }}>
            Quản lý phần cài đặt tài khoản và trải nghiệm kết nối trên các công nghệ của Meta như Facebook, Instagram và Meta Horizon. Tìm hiểu thêm
            </Text>
            <View style={{backgroundColor:"slategray",width:"100%",borderRadius:"10px",height:"120px"}}>
                <View style={{flexDirection:"row",marginLeft:"10px",borderBottomWidth:"1px",borderBottomColor:"grey",marginTop:"10px"}}>
            <Image source={require("./IMG/avatar.png")} style={{width:"55px",height:"55px", borderRadius:"40px",marginBottom:"5px"}}/>
                <View style={{marginLeft:"15px",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{color:"white"}}>Trang cá nhân</Text>
                    <Text style={{color:"darkgrey"}}>I Am batman</Text>
                </View>
            </View>
                <View style={{flexDirection:"row", marginTop:"10px",marginLeft:"10px"}}>
                    <Image source={require("./IMG/trainghiemicon.png")} style={{height:25,width:25,borderRadius:"10px"}}/>
                    <Text style={{marginLeft:"15px",color:"white",fontSize:"16px"}}>Trãi nghiệm kết nối</Text>
                </View>
            </View>
            <View style={{width:"100%",justifyContent:"flex-start",alignItems:"flex-start" , marginTop:"10px"}}>
                <Text style={{color:"white",textAlign: "left",fontSize:"16px",fontWeight:"600"}}>Cài đặt tài khoản</Text>
            </View>
            <View style={{ backgroundColor:"slategray", width:"100%",justifyContent:"center",
                        borderRadius:10,marginTop:"20px"
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
        </View>
    );
}

export default Screen3_2;
