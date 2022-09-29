import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fonts, getData, windowWidth } from '../utils'
import MyHeader from './MyHeader'
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function Topup({ }) {
    const [user, setUser] = useState({});

    const [pilih, setPilih] = useState({
        a: false,
        b: false,
        c: false,
        d: false,
    })


    useEffect(() => {
        getData('user').then(u => setUser(u));
    }, [])

    const MyWallet = ({ img, label, select = false, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress} style={{
                flexDirection: 'row',
                paddingVertical: 5,
                backgroundColor: select ? colors.secondary : colors.white,
                borderBottomWidth: 1,
                borderBottomColor: colors.border,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    paddingHorizontal: 10,
                }}>
                    <Image source={img} style={{
                        width: 100,
                        height: 60,
                        resizeMode: 'contain'
                    }} />
                </View>

                <View style={{
                    flex: 1,
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: fonts.secondary[600],
                        color: colors.black
                    }}>{label}</Text>
                </View>

            </TouchableOpacity>

        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader />
            <View style={{
                flex: 1,
            }}>
                <Text style={{
                    marginHorizontal: 10,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    fontSize: windowWidth / 18
                }}>Top up saldo E-wallet</Text>
                <Text style={{
                    marginHorizontal: 10,
                    marginTop: 10,
                    fontFamily: fonts.secondary[400],
                    color: colors.black,
                    fontSize: windowWidth / 28
                }}>Pilih E-wallet yang ingin kamu top up dan masukan informasi akun.</Text>

                <MyWallet onPress={() => setPilih({
                    a: true,
                    b: false,
                    c: false,
                    d: false,
                })} select={pilih.a} img={require('../gopay.png')} label="Gopay" />
                <MyWallet onPress={() => setPilih({
                    a: false,
                    b: true,
                    c: false,
                    d: false,
                })} select={pilih.b} img={require('../ovo.png')} label="OVO" />
                <MyWallet onPress={() => setPilih({
                    a: false,
                    b: false,
                    c: true,
                    d: false,
                })} select={pilih.c} img={require('../dana.png')} label="Dana" />
                <MyWallet onPress={() => setPilih({
                    a: false,
                    b: false,
                    c: false,
                    d: true,
                })} select={pilih.d} img={require('../linkaja.png')} label="Link Aja" />

            </View>

            <TouchableOpacity onPress={() => Linking.openURL('gojek://gopay/topup')} style={{
                padding: 20,
                backgroundColor: colors.primary,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontFamily: fonts.secondary[600],
                    color: colors.white
                }}>Top up</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({})