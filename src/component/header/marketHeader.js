import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Search } from '../icon/index'

export class MarketHeader extends Component {
    render() {
        const { header } = this.props
        let arr = []
        return (
            <View>
                <View style={styles.tabBar}>
                    <View style={styles.headerBox}>
                        <View>
                            <TouchableOpacity onPress={async () => {
                                await AsyncStorage.getAllKeys().then((data) => {
                                    for (let i = 0; i < 100; i++) {
                                        AsyncStorage.getItem(i + "").then((res) => {
                                            if (res !== null) {
                                                console.log(res);
                                            }
                                            
                                        })
                                    }
                                    
                                })
                                
                            }
                            }>
                                <Text style={styles.headerBoxName}>{header}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.iconBox}>
                            <TouchableOpacity onPress={() => {
                                AsyncStorage.clear()
                                console.log("ASYNC SIFIRLANDI")
                            }}>
                                <Search color="#000080" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.tabColor}>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tabBar: {
        width: '100%',
        height: 106,
    },
    tabColor: {
        backgroundColor: '#0CF2B4',
        width: '100%',
        height: 100,
        position: 'absolute',
        zIndex: -1,
        borderTopEndRadius: 200,
        borderBottomLeftRadius: 300,
        transform: [{ skewY: '3deg' }]
    },
    headerBox: {
        width: 168,
        height: 28,
        marginTop: 46,
        marginLeft: 52,
        flexDirection: 'row',

    },
    headerBoxName: {
        fontSize: 24,
        fontFamily: 'Raleway',
        color: '#000080'

    },
    iconBox: {
        width: 24,
        height: 24,
        left: 200,
    }
})

export default MarketHeader
