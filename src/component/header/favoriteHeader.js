import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Shape, Down, List } from '../../component/icon/index'

class FavoriteHeader extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            priceSum: 0,
            pricePercent: 0

        }
    }

    componentDidMount() {
        let tempPrice = 0
        let tempPercent = 0
        for (let i = 0; i < 30; i++) {
            AsyncStorage.getItem(i + "").then((res) => {
                if (res !== null) {
                    let obj = JSON.parse(res)
                    tempPercent += parseFloat(obj.coinPercent.substring(1, 3))
                    tempPrice += parseFloat(obj.price)
                    this.setState({ priceSum: tempPrice.toFixed(2) })
                    this.setState({ pricePercent: tempPercent })

                }
            })
            
        }
    }
    render() {
        return (
            <View style={styles.headerBox}>
                <View>
                    <View style={styles.headerTextBox}>
                        <Text style={styles.headerText}>MY FAVORITE COIN</Text>
                    </View>
                </View>
                <View style={{ position: 'absolute' }}>
                    <Shape style={styles.greenLineBox} />
                </View>
                <LinearGradient colors={['rgba(46, 32, 219, 1)', 'rgba(228, 50, 193, 0.7)']} style={styles.headerContainer} >
                    <Text style={styles.summaryText}>SUMMARY</Text>
                    <Text style={styles.totalCoin}>{this.state.priceSum} USD</Text>
                    <Text style={styles.lastDayText}>24 Hour</Text>
                    <Text style={styles.earnMoneyText}>+{this.state.pricePercent}%</Text>
                </LinearGradient>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    summaryText: {
        top: 23,
        left: 28,
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Lato',

    },
    totalCoin: {
        left: 24,
        top: 38,
        fontFamily: 'Raleway',
        fontSize: 20,
        color: '#fff',

    },
    lastDayText: {
        position: 'absolute',
        right: 40,
        top: 30,
        fontSize: 12,
        color: '#fff'
    },
    earnMoneyText: {
        position: 'absolute',
        right: 42,
        color: '#fff',
        top: 53,

    },
    greenLineBox: {
        position: 'relative',
        zIndex: -1,
        bottom: 0,
        left: 40,
    },
    headerContainer: {
        width: 322,
        height: 99,
        top: 80,
        borderRadius: 20,
        position: 'relative',
    },
    headerBox: {
        top: 10,
        height: 188,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    headerTextBox: {
        width: '100%',
        height: 26,
        top: 40,
        left: 0,
    },
    headerText: {
        fontSize: 22,
        fontFamily: 'Raleway',
    },
})
export default FavoriteHeader
