import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//   TO create a stack navigator
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//  SCREENS IMPORT
import Home from './screens/Home';
import Details from './screens/Details';

//   Params TYPES ==================>
export type RootStackParamList = {
  Home: undefined;
  Details: {product: Product};
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Quality Products'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Details Product',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
