import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, BackHandler, Alert } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { colors, fonts, getData, windowWidth } from '../utils'
import MyHeader from './MyHeader'
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

export default function Quran({ navigation }) {

    const WEBVIEW_REF = useRef();
    const [back, setBack] = useState(false);

    const onNavigationStateChange = (navState) => {
        console.log(navState.canGoBack);


        if (navState.canGoBack) {
            console.log('tidak baisa');


            BackHandler.addEventListener(
                "hardwareBackPress",
                () => {
                    WEBVIEW_REF.current.goBack();
                    return true;
                }
            )
        } else {

            BackHandler.addEventListener(
                "hardwareBackPress", () => {
                    // alert('oke');
                    navigation.replace('Home')
                    return true;
                })




        }

    }




    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader />
            <WebView onNavigationStateChange={onNavigationStateChange.bind(this)}
                ref={WEBVIEW_REF}
                source={{ uri: 'https://m.youtube.com/c/BankSyariahIndonesia/featured' }} />

        </View>
    )
}

const styles = StyleSheet.create({})