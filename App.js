import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { appStyle } from './src/styles/AppStyle';

import PetListScreen from './src/screens/PetListScreen';
import PetDetailsScreen from './src/screens/PetDetailsScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import TipsScreen from './src/screens/TipsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const PetStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PetList"
        component={PetListScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Details"
        component={PetDetailsScreen}
        options={{ title: 'Pet Details' }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === 'Pets') {
              iconName = focused ? 'paw' : 'paw-outline';
            }

            if (route.name === 'Register') {
              iconName = focused ? 'add' : 'add-outline';
            }

            if (route.name === 'Tips') {
              iconName = focused ? 'bulb' : 'bulb-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarStyle: appStyle.tabStyle,
          tabBarActiveTintColor: '#4d7a5f',
          tabBarInactiveTintColor: '#c3c1c1',
        })}
      >
        <Tab.Screen
          name="Pets"
          component={PetStack}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="Tips"
          component={TipsScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
