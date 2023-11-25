import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from '../Baptaplon/Screen1';
import Screen2 from '../Baptaplon/Screen2'
import Screen3 from '../Baptaplon/Screen3'
import Screen3_2 from '../Baptaplon/Screen3_2'
import Screen2_1 from '../Baptaplon/Screen2_1'
import Screen2_1call from '../Baptaplon/Screen2_1call'
import Screen2_2db from '../Baptaplon/Screen2_2db'

const Stack = createNativeStackNavigator();

function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Screen1' component={Screen1} options={{headerShown:false}}/>
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
