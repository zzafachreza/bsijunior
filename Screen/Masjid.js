import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fonts, getData, windowWidth } from '../utils'
import MyHeader from './MyHeader'
import { Icon } from 'react-native-elements';
export default function ({ navigation, route }) {


    return (
        <SafeAreaView style={{
            backgroundColor: colors.white,
            flex: 1,
        }}>

            <MyHeader />
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 10,
            }}>
                <Image style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain'
                }} source={require('../jadwal.png')} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})