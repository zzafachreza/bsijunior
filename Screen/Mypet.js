import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fonts, getData, windowWidth } from '../utils'
import MyHeader from './MyHeader'
import { Icon } from 'react-native-elements';
export default function ({ navigation, route }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader />

            <TouchableOpacity onPress={() => navigation.navigate('Mypetgame')} style={{
                padding: 20,
                margin: 10,
                borderRadius: 10,
                backgroundColor: colors.white,
                elevation: 3,
                flexDirection: 'row'
            }}>
                <Text style={{
                    flex: 1,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    fontSize: windowWidth / 20
                }}>Games</Text>
                <Icon type='ionicon' name='chevron-forward-outline' color={colors.primary} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Mypettabungan')} style={{
                padding: 20,
                elevation: 3,
                margin: 10,
                borderRadius: 10,
                backgroundColor: colors.white,
                borderColor: colors.primary,
                flexDirection: 'row'

            }}>
                <Text style={{
                    flex: 1,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    fontSize: windowWidth / 20
                }}>Tabunganku</Text>
                <Icon type='ionicon' name='chevron-forward-outline' color={colors.primary} />

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({})