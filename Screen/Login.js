import { StyleSheet, Text, View, SafeAreaView, ScrollView, ActivityIndicator, Alert, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts, storeData, urlAPI, windowWidth } from '../utils'
import axios from 'axios'

export default function Login({ navigation }) {
    const [kirim, setKirim] = useState({
        username: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const loginMasuk = () => {
        setLoading(true);

        setTimeout(() => {

            axios.post(urlAPI + 'login.php', kirim).then(res => {
                if (res.data.info == 200) {
                    console.log('oke');
                    storeData('user', res.data);
                    navigation.replace('Home');
                } else {
                    Alert.alert('BSI JUNIOR', res.data.msg)
                }
            })

            setLoading(false);
            console.log(kirim);
        }, 1200)
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{
                padding: 20,
            }}>
                <View style={{
                    marginVertical: 50,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image source={require('../logo.png')} style={{
                        width: 200,
                        resizeMode: 'contain'
                    }} />
                </View>


                <View>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 28,
                        marginVertical: 10,
                    }}>Akun / Username</Text>
                    <TextInput onChangeText={x => {
                        setKirim({
                            ...kirim,
                            username: x
                        })
                    }} style={{
                        borderWidth: 1,
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 30,
                        paddingLeft: 10,
                        borderRadius: 10,
                        borderColor: colors.primary,
                    }} />
                </View>

                <View style={{
                    marginTop: 15
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 28,
                        marginVertical: 10,
                    }}>Password</Text>
                    <TextInput t onChangeText={x => {
                        setKirim({
                            ...kirim,
                            password: x
                        })
                    }} secureTextEntry style={{
                        borderWidth: 1,
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 30,
                        paddingLeft: 10,
                        borderRadius: 10,
                        borderColor: colors.primary,
                    }} />
                </View>

                {!loading && <TouchableOpacity onPress={loginMasuk} style={{
                    backgroundColor: colors.primary,
                    padding: 15,
                    borderRadius: 10,
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 25,
                        color: colors.white
                    }}>MASUK</Text>
                </TouchableOpacity>}
                {loading && <View style={{
                    margin: 20,
                }}><ActivityIndicator size="large" color={colors.secondary} /></View>}
            </ScrollView>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})