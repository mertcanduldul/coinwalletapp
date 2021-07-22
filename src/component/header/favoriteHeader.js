import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

import { Shape, Down, List } from '../../component/icon/index'

class FavoriteHeader extends Component {
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
                    <Text style={styles.totalCoin}>15620 USD</Text>
                    <Text style={styles.lastDayText}>24H</Text>
                    <Text style={styles.earnMoneyText}>1200 USD</Text>
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
        right: 78,
        top: 34,
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
        top: 0,
        height: 188,
        width: '100%',
        alignItems: 'center',
        justifyContent:'flex-start'
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
