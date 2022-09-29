import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fonts, getData, windowWidth } from '../utils'
import MyHeader from './MyHeader'

export default function Notif() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader />

            <View style={{
                margin: 10,
                elevation: 2,
                shadowOpacity: 100,
                shadowOffset: 20,
                shadowRadius: 2,
                shadowColor: colors.border,
                padding: 20,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.border
                }}>Kamu belum menabung hari ini, ayo menabung!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})