import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking, View, ScrollView, Image
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import MyHeader from './MyHeader';
import { colors, fonts, windowWidth } from '../utils';
import { Icon } from 'react-native-elements';

export default function Qris() {

    const onSuccess = (x) => {
        console.log(x)
    }

    return (
        <>

            <View style={{
                // flex: 0.20,
                height: 120,
                backgroundColor: colors.white
            }}>
                <MyHeader />
            </View>
            <View style={styles.container}>

                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >


                    <View style={{
                        padding: 10,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            color: colors.white,
                            right: 5,
                        }}>Bank Syariah Indonesia & Powered by</Text>
                        <Image source={require('../qris.png')} style={{
                            width: 60,
                            height: 20,
                        }} />
                    </View>
                </RNCamera>
                <View style={{
                    flex: 0.4,
                    backgroundColor: colors.white,
                    padding: 10,
                }}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            flex: 1,
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 20
                        }}>Bayar dan Kirim</Text>
                        <Icon type='ionicon' name='add-circle' color={colors.primary} size={windowWidth / 25} />
                        <Text style={{
                            fontFamily: fonts.primary[600],
                            fontSize: windowWidth / 25,
                            color: colors.primary
                        }}>SHORTCUT</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            marginRight: 10,

                        }}>
                            <View style={{
                                width: 60
                            }}>
                                <View style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    backgroundColor: colors.primary,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Icon type='ionicon' name='home-outline' color={colors.white} />
                                </View>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: windowWidth / 30,
                                    textAlign: 'center',
                                    color: colors.secondary,
                                }}>Biaya adm</Text>
                                <Text style={{
                                    textAlign: 'center',
                                    color: colors.secondary,
                                    fontFamily: fonts.secondary[400],
                                    fontSize: windowWidth / 30,
                                }}>Rp. 2.500</Text>
                            </View>
                            <View style={{
                                width: 60,
                                marginHorizontal: 5,
                            }}>
                                <View style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    backgroundColor: colors.primary,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Icon type='ionicon' name='qr-code-outline' color={colors.white} />
                                </View>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: windowWidth / 30,
                                    textAlign: 'center',
                                    color: colors.black,
                                }}>Pakai</Text>
                                <Text style={{
                                    textAlign: 'center',
                                    color: colors.black,
                                    fontFamily: fonts.secondary[400],
                                    fontSize: windowWidth / 30,
                                }}>kode</Text>
                            </View>
                            <View style={{
                                width: 20,
                                height: 60,
                                borderRightWidth: 1,
                                borderRightColor: colors.border,
                            }}></View>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            marginRight: 10,

                        }}>

                            <View style={{
                                width: 60,
                                marginHorizontal: 5,
                            }}>
                                <View style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    backgroundColor: colors.secondary,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        color: colors.black,
                                        fontFamily: fonts.primary[800],
                                        fontSize: windowWidth / 15,
                                    }}>IP</Text>
                                </View>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: windowWidth / 30,
                                    textAlign: 'center',
                                    color: colors.black,
                                }}>Indra</Text>
                                <Text style={{
                                    textAlign: 'center',
                                    color: colors.black,
                                    fontFamily: fonts.secondary[400],
                                    fontSize: windowWidth / 30,
                                }}>Permana</Text>
                            </View>
                            <View style={{
                                width: 60,
                                marginHorizontal: 5,
                            }}>
                                <View style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    backgroundColor: colors.secondary,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        color: colors.black,
                                        fontFamily: fonts.primary[800],
                                        fontSize: windowWidth / 15,
                                    }}>FM</Text>
                                </View>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: windowWidth / 30,
                                    textAlign: 'center',
                                    color: colors.black,
                                }}>Fachreza</Text>
                                <Text style={{
                                    textAlign: 'center',
                                    color: colors.black,
                                    fontFamily: fonts.secondary[400],
                                    fontSize: windowWidth / 30,
                                }}>Maulana</Text>
                            </View>
                            <View style={{
                                width: 60,
                                marginHorizontal: 5,
                            }}>
                                <View style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    backgroundColor: colors.secondary,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        color: colors.black,
                                        fontFamily: fonts.primary[800],
                                        fontSize: windowWidth / 15,
                                    }}>FN</Text>
                                </View>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: windowWidth / 30,
                                    textAlign: 'center',
                                    color: colors.black,
                                }}>Febi</Text>
                                <Text style={{
                                    textAlign: 'center',
                                    color: colors.black,
                                    fontFamily: fonts.secondary[400],
                                    fontSize: windowWidth / 30,
                                }}>Nurul</Text>
                            </View>
                            <View style={{
                                width: 60,
                                marginHorizontal: 5,
                            }}>
                                <View style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    backgroundColor: colors.secondary,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        color: colors.black,
                                        fontFamily: fonts.primary[800],
                                        fontSize: windowWidth / 15,
                                    }}>FH</Text>
                                </View>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: windowWidth / 30,
                                    textAlign: 'center',
                                    color: colors.black,
                                }}>Fadhlan</Text>
                                <Text style={{
                                    textAlign: 'center',
                                    color: colors.black,
                                    fontFamily: fonts.secondary[400],
                                    fontSize: windowWidth / 30,
                                }}>Himawan</Text>
                            </View>
                            <View style={{
                                width: 60,
                                marginHorizontal: 5,
                            }}>
                                <View style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    backgroundColor: colors.secondary,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        color: colors.black,
                                        fontFamily: fonts.primary[800],
                                        fontSize: windowWidth / 15,
                                    }}>DA</Text>
                                </View>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: windowWidth / 30,
                                    textAlign: 'center',
                                    color: colors.black,
                                }}>Dewi</Text>
                                <Text style={{
                                    textAlign: 'center',
                                    color: colors.black,
                                    fontFamily: fonts.secondary[400],
                                    fontSize: windowWidth / 30,
                                }}>Ayu</Text>
                            </View>

                        </ScrollView>

                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});
