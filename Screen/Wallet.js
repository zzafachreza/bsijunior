import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fonts, getData, windowWidth } from '../utils'
import MyHeader from './MyHeader'
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function Wallet({ navigation }) {
    const [user, setUser] = useState({});


    useEffect(() => {
        getData('user').then(u => setUser(u));
    }, [])


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
                    textAlign: 'center',
                    margin: 10,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary
                }}>Jumlah E-Walletmu</Text>

                <View style={{
                    padding: 10,
                    backgroundColor: colors.secondary,
                    margin: 10,
                    borderRadius: 10,
                }}>
                    <Text style={{
                        textAlign: 'center',
                        margin: 10,
                        fontFamily: fonts.secondary[600],
                        color: colors.white
                    }}>Rp. {new Intl.NumberFormat().format(user.wallet)}</Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Topup', user)} style={{
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