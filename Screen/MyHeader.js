import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fonts, getData, storeData, windowWidth } from '../utils'

import { useNavigation } from '@react-navigation/native';
export default function MyHeader() {
    const navigation = useNavigation();
    return (
        <View style={{
            flexDirection: 'row',
            height: 50,
            borderBottomWidth: 1,
            borderBottomColor: '#DEDEDE',


        }}>
            <View style={{
                flex: 1,
                padding: 5,
            }}>
                <Image source={require('../logoheader.png')} style={{
                    width: 130,
                    resizeMode: 'contain',
                    height: '100%'
                }} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Notif')} style={{
                marginHorizontal: 10,
            }}>
                <Image source={require('../notif.png')} style={{
                    width: 20,
                    resizeMode: 'contain',
                    height: '100%'
                }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                Alert.alert('BSI Junior', 'Apakah kamu ingin keluar ?', [

                    {
                        text: "Tidak",
                        style: "cancel"
                    },
                    {
                        text: "YA", onPress: () => {
                            navigation.replace('Login');
                            storeData('user', null)
                        }
                    }
                ])
            }} style={{
                marginHorizontal: 10,
            }}>
                <Image source={require('../keluar.png')} style={{
                    width: 20,
                    resizeMode: 'contain',
                    height: '100%'
                }} />
            </TouchableOpacity>
        </View>
    )
}