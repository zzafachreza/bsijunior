import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const colors = {
    primary: '#19A39D',
    secondary: '#FDAA3A',
    tertiary: '#CECECE',
    background: '#6B63FF',
    success: '#198754',
    warning: '#F37120',
    danger: '#dc3545',
    black: 'black',
    white: 'white',
    border: '#CECECE',
    zavalabs: '#CECECE',
    zavalabs2: '#F5F5F5',
    zavalabs2: '#E8E8E8'
};

export const fonts = {
    primary: {
        300: 'Poppins-Light',
        400: 'Poppins-Regular',
        600: 'Poppins-SemiBold',
        700: 'Poppins-Bold',
        800: 'Poppins-ExtraBold',
        900: 'Poppins-Black',
        normal: 'Poppins-Regular',
    },
    secondary: {
        200: 'Montserrat-ExtraLight',
        300: 'Montserrat-Light',
        400: 'Montserrat-Regular',
        600: 'Montserrat-SemiBold',
        700: 'Montserrat-Bold',
        800: 'Montserrat-ExtraBold',
        900: 'Montserrat-Black',
        normal: 'Montserrat-Regular',
    },
    tertiary: {
        200: 'OpenSans-ExtraLight',
        300: 'OpenSans-Light',
        400: 'OpenSans-Regular',
        600: 'OpenSans-SemiBold',
        700: 'OpenSans-Bold',
        800: 'OpenSans-ExtraBold',
        900: 'OpenSans-Black',
        normal: 'OpenSans-Regular',
    },
};




export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        // saving error
    }
};

export const getData = async key => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        }
    } catch (e) {
        // error reading value
    }
};


export const urlAPI = 'https://bsijunior.zavalabs.com/api/';