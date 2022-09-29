import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert, Linking, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fonts, getData, urlAPI, windowWidth } from '../utils'
import MyHeader from './MyHeader'
import 'intl';
import axios from 'axios'
import 'intl/locale-data/jsonp/en';

export default function Mypettarget({ navigation, route }) {


    const [user, setUser] = useState({});
    useEffect(() => {
        getData('user').then(u => setUser(u));
    }, [])

    const MyPET = ({ img, nilai = 0, select = false, onPress }) => {
        return (
            <TouchableOpacity onPress={() => {
                // navigation.navigate('Mypetpilih')
                // alert(nilai)
                axios.post(urlAPI + 'target.php', {
                    id: user.id,
                    target: nilai
                }).then(res => {
                    console.log(res.data);
                    navigation.navigate('Mypetpilih')
                    Alert.alert('BSI Junior', 'Kamu berhasil memilih target sebesar Rp' + new Intl.NumberFormat().format(nilai))
                })

            }}>
                <View style={{
                    position: 'relative',
                    borderWidth: 1,
                    borderColor: colors.primary,
                    width: windowWidth / 5,
                    padding: 10,
                    borderRadius: 5
                }}>

                    <Text style={{
                        textAlign: 'center',
                        fontFamily: fonts.secondary[600],
                        color: colors.primary
                    }}>{new Intl.NumberFormat().format(nilai)}</Text>

                </View>
            </TouchableOpacity >

        )
    }

    return (
        <View style={{
            flex: 1,
        }}>
            <MyHeader />

            <View style={{
                marginVertical: 10,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{

                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    fontSize: windowWidth / 18
                }}>Berapa Target Tabunganmu</Text>
                <Image source={route.params.gambar} style={{
                    width: windowWidth / 2,
                    height: 200,
                    borderRadius: 10,
                }} />
            </View>


            <View style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>

                <MyPET nilai={50000} />
                <MyPET nilai={100000} />
                <MyPET nilai={150000} />
                <MyPET nilai={200000} />
            </View>


            <View style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>

                <MyPET nilai={250000} />
                <MyPET nilai={300000} />
                <MyPET nilai={450000} />
                <MyPET nilai={500000} />
            </View>

            <View style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>

                <MyPET nilai={550000} />
                <MyPET nilai={600000} />
                <MyPET nilai={750000} />
                <MyPET nilai={800000} />
            </View>
            <View style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>

                <MyPET nilai={850000} />
                <MyPET nilai={900000} />
                <MyPET nilai={1000000} />
                <MyPET nilai={1500000} />
            </View>
            <View style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>

                <MyPET nilai={2000000} />
                <MyPET nilai={2500000} />
                <MyPET nilai={3000000} />
                <MyPET nilai={3500000} />
            </View>
            <View style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>

                <MyPET nilai={4000000} />
                <MyPET nilai={4500000} />
                <MyPET nilai={5000000} />
                <MyPET nilai={5500000} />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({})