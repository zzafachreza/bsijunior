import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fonts, getData, urlAPI, windowWidth } from '../utils'
import MyHeader from './MyHeader';
import 'intl';
import axios from 'axios'
import 'intl/locale-data/jsonp/en';

export default function ({ navigation, route }) {
    const [gambar, setGambar] = useState(1);

    const [user, setUser] = useState({});
    useEffect(() => {
        getData('user').then(u => setUser(u));
    }, [])
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            {/* <MyHeader /> */}
            {gambar == 1 &&
                <TouchableWithoutFeedback onPress={() => setGambar(2)}>
                    <View style={{
                        flex: 1,
                    }}>
                        <Image style={{

                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain'

                        }} source={
                            require('../egg1.png')
                        } />
                    </View>
                </TouchableWithoutFeedback>}
            {gambar == 2 &&
                <TouchableWithoutFeedback onPress={() => setGambar(3)}>
                    <View style={{
                        flex: 1,
                    }}>
                        <Image style={{

                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover'

                        }} source={
                            require('../egg2.png')
                        } />
                    </View>
                </TouchableWithoutFeedback>}

            {gambar == 3 &&
                <TouchableWithoutFeedback onPress={() => {
                    setGambar(4);
                }}>
                    <View style={{
                        flex: 1,
                    }}>
                        <Image style={{

                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover'

                        }} source={
                            require('../egg3.png')
                        } />
                    </View>
                </TouchableWithoutFeedback>}

            {gambar == 4 &&
                <TouchableWithoutFeedback onPress={() => {
                    // setGambar(5);

                    axios.post(urlAPI + 'cek_wallet.php', {
                        id: user.id,
                    }).then(res => {
                        console.log('cekwalet', res.data);

                        if (res.data.wallet < 15000) {
                            Alert.alert('BIS Junior', 'Maaf E - Wallet kamu tidak cukup untuk menabung')
                        } else {
                            axios.post(urlAPI + 'saldo_add.php', {
                                id: user.id
                            }).then(res => {
                                navigation.replace('Home');
                                Alert.alert('BSI Junior', 'Selamat anda berhasil menabung sebesar Rp. 15.000');
                            })
                        }
                    })


                }}>
                    <View style={{
                        flex: 1,
                    }}>
                        <Image style={{

                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover'

                        }} source={
                            require('../egg4.png')
                        } />
                    </View>
                </TouchableWithoutFeedback>}

            {gambar == 5 &&

                <View style={{
                    flex: 1,
                }}>
                    <Image style={{

                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover'

                    }} source={
                        require('../egg5.png')
                    } />
                </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({})