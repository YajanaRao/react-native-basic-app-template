// import { createAppContainer } from 'react-navigation';
// import {createDrawerNavigator} from 'react-navigation-drawer'
// import {createStackNavigator} from 'react-navigation-stack'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from '../screens/Home/HomeScreen';
import { SearchBar, Avatar } from 'react-native-elements';
// import BackButton from '../components/BackButton/BackButton';
import RegisterScreen from '../screens/Register/Register';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import { LogBox } from 'react-native';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import LoginScreen from '../screens/Login';
import MenuScreen from '../screens/Menu/MenuScreen';
import OrderScreen from '../screens/Orders/OrderScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={BottomTabBar}
      />

      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

// const Drawer = createDrawerNavigator();

function BottomTabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
    >
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: 'Welcome Back',
          headerTitleAlign: 'left',
          headerStyle: { elevation: 0 },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerTitle: '',
          headerTitleAlign: 'left',
          headerStyle: { elevation: 0 },
          // headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerTitle: '',
          headerStyle: { elevation: 0, backgroundColor: 'transparent' },
        }}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="App" component={MainNavigator} />
    </Stack.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

// export default AppContainer = createAppContainer(DrawerStack);

LogBox.ignoreAllLogs(true)
