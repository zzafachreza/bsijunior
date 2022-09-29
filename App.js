import { StyleSheet, Text, View } from 'react-native'
import { StatusBar, LogBox } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from './utils';
import Splash from './Screen/Splash';
import Home from './Screen/Home';
import Login from './Screen/Login';
import Notif from './Screen/Notif';
import Video from './Screen/Video';
import Quran from './Screen/Quran';
import Games from './Screen/Games';
import Wallet from './Screen/Wallet';
import Topup from './Screen/Topup';
import Mypet from './Screen/Mypet';
import Mypettabungan from './Screen/Mypettabungan';
import Mypetpilih from './Screen/Mypetpilih';
import Mypetgame from './Screen/Mypetgame';
import Qris from './Screen/Qris';
import Mypettarget from './Screen/Mypettarget';
import Chat from './Screen/Chat';
import Masjid from './Screen/Masjid';
import Atm from './Screen/Atm';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Stack.Navigator initialRouteName={'Splash'}>

        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />



        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Notif"
          component={Notif}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Video"
          component={Video}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Masjid"
          component={Masjid}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Quran"
          component={Quran}
          options={{
            headerShown: false,
          }}
        />


        <Stack.Screen
          name="Games"
          component={Games}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Wallet"
          component={Wallet}
          options={{
            headerShown: false,
          }}
        />


        <Stack.Screen
          name="Topup"
          component={Topup}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Mypet"
          component={Mypet}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Mypettabungan"
          component={Mypettabungan}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Mypetpilih"
          component={Mypetpilih}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Mypetgame"
          component={Mypetgame}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Qris"
          component={Qris}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Mypettarget"
          component={Mypettarget}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Atm"
          component={Atm}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})