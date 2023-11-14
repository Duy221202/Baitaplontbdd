import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from '../Baptaplon/Screen1';
import Screen2 from '../Baptaplon/Screen2'
import Screen3 from '../Baptaplon/Screen3'

const Stack = createNativeStackNavigator();

function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Screen3' component={Screen3} options={{headerShown:false}}/>
    <Stack.Screen name='Screen2' component={Screen2} options={{headerShown:false}}/>
    <Stack.Screen name='Screen1' component={Screen1} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
