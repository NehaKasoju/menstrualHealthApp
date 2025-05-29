import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import CycleTrackingScreen from './src/screens/CycleTrackingScreen';
import SymptomsScreen from './src/screens/SymptomsScreen';
import AnalysisScreen from './src/screens/AnalysisScreen';

export type RootStackParamList = {
  Home: undefined;
  CycleTracking: undefined;
  Symptoms: undefined;
  Analysis: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FF69B4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Menstrual Health' }}
          />
          <Stack.Screen 
            name="CycleTracking" 
            component={CycleTrackingScreen} 
            options={{ title: 'Cycle Tracking' }}
          />
          <Stack.Screen 
            name="Symptoms" 
            component={SymptomsScreen} 
            options={{ title: 'Symptoms & Mood' }}
          />
          <Stack.Screen 
            name="Analysis" 
            component={AnalysisScreen} 
            options={{ title: 'Health Analysis' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App; 