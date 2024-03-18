import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chair1Screen from './screens/Chair1Screen';
import Chair2Screen from './screens/Chair2Screen';
import Chair3Screen from './screens/Chair3Screen';
import Chair4Screen from './screens/Chair4Screen';
import Chair5Screen from './screens/Chair5Screen';
import Chair6Screen from './screens/Chair6Screen';
import HomePageScreen from './screens/HomePageScreen';
import SettingsScreen from './screens/SettingsScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePageScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="Lounge" component={Chair1Screen} />
        <Stack.Screen name="Premium Wooden Chair" component={Chair2Screen} />
        <Stack.Screen name="Rolling Chair" component={Chair3Screen} />
        <Stack.Screen name="Blue Modern Chair" component={Chair4Screen} />
        <Stack.Screen name="Boss Office Chair" component={Chair5Screen} />
        <Stack.Screen name="Beige Comfy Chair" component={Chair6Screen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});