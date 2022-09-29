import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fonts, getData, urlAPI, windowWidth } from '../utils'
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';


export default function MySlider({ navigation }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post(urlAPI + 'slider.php').then(res => {
            setData(res.data);
        });
    }, [])

    const renderCarouselItem = ({ item }) => (
        <Image
            source={{
                uri: item.image
            }}
            style={{
                resizeMode: 'cover',
                height: 180,
                width: 300,
                borderRadius: 10,
            }}
        />
    );
    return (
        < View style={{
            marginTop: 10
        }}>
            <Carousel
                loop={true}
                // layout="stack"
                // layoutCardOffset={18}
                data={data}
                containerCustomStyle={styles.carousel}
                renderItem={renderCarouselItem}
                sliderWidth={windowWidth}
                itemWidth={300}
                removeClippedSubviews={false}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    carousel: {
        // position: 'absolute',
        bottom: 0,
        marginBottom: 10,
    },
    cardContainer: {
        backgroundColor: colors.black,
        opacity: 1,
        height: 250,
        width: 300,
        borderRadius: 10,
        // overflow: 'hidden',
    },
    cardImage: {
        height: 250,
        width: 300,
        bottom: 0,
        position: 'absolute',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    cardTitle: {
        color: 'white',
        fontSize: 22,
        alignSelf: 'center',
    },
});