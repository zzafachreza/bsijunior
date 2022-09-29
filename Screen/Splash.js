import { Image, SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors, fonts, getData } from '../utils'

export default function Splash({ navigation }) {

    setTimeout(() => {

        getData('user').then(res => {

            if (!res) {
                navigation.replace('Login');
            } else {
                navigation.replace('Home');
            }

        })
    }, 2000)

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Image source={require('../logo.png')} style={{
                width: 200,
                resizeMode: 'contain'
            }} />

            <View style={{
                marginTop: 20
            }}>
                <ActivityIndicator size="large" color={colors.secondary} />
            </View>




        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    txt: {
        fontFamily: fonts.secondary[400],
        fontSize: 15,
        marginVertical: 2,
        color: colors.primary,
    }
    , txt2: {
        fontFamily: fonts.secondary[600],
        fontSize: 18,
        marginBottom: 10,
        color: colors.primary,
    },
    txtLogo: {
        fontFamily: fonts.secondary[600],
        fontSize: 40,
        marginBottom: 5,
        color: colors.primary,
    }, txtLogo2: {
        fontFamily: fonts.secondary[400],
        fontSize: 18,
        color: colors.primary,
    },
    txtBrand: {
        fontFamily: fonts.secondary[600],
        fontSize: 17,
        marginTop: 10,
        color: colors.primary,
    }

})