import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fonts, getData, windowWidth } from '../utils'
import MyHeader from './MyHeader'
import 'intl';
import 'intl/locale-data/jsonp/en';
import { Icon } from 'react-native-elements';
export default function ({ navigation, route }) {

    const MyPET = ({ img, nilai = 0, select = false, onPress }) => {
        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={{
                    position: 'relative'
                }}>

                    <Image source={img} style={{
                        width: windowWidth / 4,
                        height: 100,
                        borderRadius: 10,
                    }} />
                    {/* <Text style={{
                        textAlign: 'center',
                        fontFamily: fonts.secondary[600],
                        color: colors.black
                    }}>{new Intl.NumberFormat().format(nilai)}</Text> */}
                    <View style={{
                        position: 'absolute',
                        bottom: -10,
                        left: -10,
                    }}>
                        <Image source={require('../lock.png')} style={{
                            width: 30,
                            height: 50,
                            resizeMode: 'contain'
                        }} />
                    </View>
                </View>
            </TouchableWithoutFeedback>

        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader />
            <View style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>

                <MyPET img={require('../h1.png')} nilai={100000} onPress={() => navigation.navigate('Mypettarget', {
                    gambar: require('../h1.png')
                })} />
                <MyPET img={require('../h2.png')} nilai={300000} />
                <MyPET img={require('../h3.png')} nilai={500000} />
            </View>
            <View style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>

                <MyPET img={require('../h4.png')} nilai={1000000} />
                <MyPET img={require('../h5.png')} nilai={1500000} />
                <MyPET img={require('../h6.png')} nilai={2000000} />
            </View>
            <View style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>

                <MyPET img={require('../h7.png')} nilai={2500000} />
                <MyPET img={require('../h8.png')} nilai={3000000} />
                <MyPET img={require('../h9.png')} nilai={3500000} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})