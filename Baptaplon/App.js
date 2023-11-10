import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from '../On5/Screen1';
import Screen2 from '../On5/Screen2'
import Screen3 from '../On5/Screen3'

const Stack = createNativeStackNavigator();

function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Screen1' component={Screen1} options={{headerShown:false}}/>
    <Stack.Screen name='Screen2' component={Screen2} options={{headerShown:false}}/>
    
      <Stack.Screen name='Screen3' component={Screen3}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
