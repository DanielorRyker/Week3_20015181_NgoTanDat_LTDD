import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentsScreen from './ui/PaymentsScreen';
import DetailsScreen from './ui/DetailsScreen';
import ProductsScreen from './ui/ProductsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Products" >
        <Stack.Screen name="Products" component={ProductsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Payments" component={PaymentsScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;