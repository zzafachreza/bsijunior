import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fonts, getData, urlAPI, windowWidth } from '../utils'
import axios from 'axios';
import MyHeader from './MyHeader';
import MySlider from './MySilder';
import { useIsFocused } from '@react-navigation/native';
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function Home({ navigation }) {
    const [user, setUser] = useState({});
    const isFocused = useIsFocused();
    const [gambar, setGambar] = useState(require('../mypet1.png'))

    useEffect(() => {
        if (isFocused) {
            getData('user').then(u => {
                setUser(u)
                console.log(u)
                axios.post(urlAPI + 'saldo.php', {
                    username: u.username,
                }).then(res => {
                    // console.warn(res.data);
                    setUser(res.data);
                    if (res.data.saldo > 1 && res.data.saldo <= 500000) {
                        setGambar(require('../mypet2.png'))
                    } else if (res.data.saldo > 500000 && res.data.saldo <= 1000000) {
                        setGambar(require('../mypet3.png'))
                    } else if (res.data.saldo > 1000000 && res.data.saldo <= 2000000) {
                        setGambar(require('../mypet4.png'))
                    } else if (res.data.saldo > 2000000 && res.data.saldo <= 5000000) {
                        setGambar(require('../mypet5.png'))
                    }
                })

            });
        }
    }, [isFocused])


    const MyMenuBottom = ({ img, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress} style={{
                width: windowWidth / 6,
                height: 25,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5
            }}>
                <Image source={img} style={{
                    width: 50,
                    resizeMode: 'contain',
                    height: '100%'
                }} />

            </TouchableOpacity>
        )
    }

    const MyMenu = ({ img, label, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress} style={{
                width: windowWidth / 4,
                backgroundColor: colors.white,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                margin: 5
            }}>
                <Image source={img} style={{
                    width: 50,
                    resizeMode: 'contain',
                    height: '100%'
                }} />
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 25
                }}>{label}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader />
            {/* opening */}
            <View style={{
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 25
                }}>Assalamu'alaikum, {user.nama_lengkap}</Text>
            </View>
            <View style={{
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.black
                    }}>E - Wallet</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.primary
                    }}>Rp. {new Intl.NumberFormat().format(user.wallet)}</Text>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.black
                    }}>Saldo</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.primary
                    }}>Rp. {new Intl.NumberFormat().format(user.saldo)}</Text>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.black
                    }}>Target</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.primary
                    }}>Rp. {new Intl.NumberFormat().format(user.target)}</Text>
                </View>
            </View>
            <MySlider />
            {/* menu */}

            <View style={{
                flex: 1,
            }}>
                <View style={{
                    marginVertical: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <MyMenu onPress={() => navigation.navigate('Mypet')} img={gambar} label="My Pet" />
                    <MyMenu onPress={() => navigation.navigate('Games')} img={require('../games.png')} label="Games" />
                    <MyMenu onPress={() => navigation.navigate('Quran')} img={require('../amma.png')} label="Juz Amma" />
                </View>

                <View style={{
                    marginVertical: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}>
                    <MyMenu onPress={() => navigation.navigate('Video')} img={require('../video.png')} label="Video" />
                    <MyMenu onPress={() => navigation.navigate('Wallet')} img={require('../wallet.png')} label="E-wallet" />

                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 60,
                backgroundColor: colors.secondary
            }}>
                <MyMenuBottom img={require('../home.png')} />
                <MyMenuBottom onPress={() => navigation.navigate('Masjid')} img={require('../masjid.png')} />
                <TouchableOpacity onPress={() => navigation.navigate('Qris')} style={{
                    width: windowWidth / 6,
                    backgroundColor: colors.primary,
                    height: 80,
                    borderRadius: 40,
                    width: 80,
                    marginBottom: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 5
                }}>
                    <Image source={require('../qris.png')} style={{
                        width: 60,
                        resizeMode: 'contain',
                        height: '100%'
                    }} />

                </TouchableOpacity>
                <MyMenuBottom onPress={() => navigation.navigate('Atm')} img={require('../building.png')} />
                <MyMenuBottom onPress={() => navigation.navigate('Chat')} img={require('../chat.png')} />
            </View>

        </SafeAreaView>
    )
}
