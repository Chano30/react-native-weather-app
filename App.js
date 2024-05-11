import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { Pressable, Text, View, useColorScheme } from 'react-native';
import { ThemeContext, ThemeProvider } from './constant/theme/theme';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <ThemeProvider>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>

  );
}
