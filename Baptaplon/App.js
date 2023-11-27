import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from '../Baptaplon/Screen/Screen1';
import Screen2 from '../Baptaplon/Screen/Screen2'
import Screen3 from '../Baptaplon/Screen/Screen3'
import Screen3_2 from '../Baptaplon/Screen/Screen3_2'
import Screen2_1 from '../Baptaplon/Screen/Screen2_1'
import Screen2_1call from '../Baptaplon/Screen/Screen2_1call'
import Screen2_2db from '../Baptaplon/Screen/Screen2_2db'
import Screen2user from '../Baptaplon/Screen/Screen2user';
import Screen2_4tin from '../Baptaplon/Screen/Screen2_4tin'


const Stack = createNativeStackNavigator();

function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Screen1' component={Screen1} options={{headerShown:false}}/>
    <Stack.Screen name='Screen2_4tin' component={Screen2_4tin}/>
    <Stack.Screen name='Screen2user' component={Screen2user} options={{headerShown:false}}/>
    <Stack.Screen name='Screen2' component={Screen2} options={{headerShown:false}}/>
    
    <Stack.Screen name='Screen2_2db' component={Screen2_2db}/>
    <Stack.Screen name='Screen3' component={Screen3} options={{headerShown:false}}/>
    <Stack.Screen name='Screen3_2' component={Screen3_2}/>
    <Stack.Screen name='Screen2_1call' component={Screen2_1call}/>
    <Stack.Screen name='Screen2_1' component={Screen2_1}/>


    
    </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
