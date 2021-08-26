import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Backarrow } from '../icon/index'

class DetailHeader extends Component {
    render() {
        const { navigation: { goBack } } = this.props
        const { name, price, time, coinPercent, coinHoldingCount, coinHoldingPercent } = this.props

        return (
            <View>
                <View style={styles.greenBox} />
                <View style={styles.headerBoxRow}>
                    <TouchableOpacity style={styles.backarrow} onPress={() => goBack()}>
                        <Backarrow color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerCoinName}>{name}</Text>
                </View>
                <View style={styles.gradientBox}>
                    <LinearGradient colors={['rgba(37, 37, 252, 0.9)', 'rgba(166, 50, 228, 0.8)']} style={styles.headerGradientContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.rate}>RATE</Text>
                            <Text style={styles.change}>TODAY CHANGE</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.headerTotalMoneyText}>{price} $</Text>
                            <Text style={styles.headerPercentMoney}>{coinPercent}</Text>
                        </View>
                    </LinearGradient>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    greenBox: {
        width: 600,
        height: 150,
        right: 50,
        backgroundColor: '#0CF2B4',
        position: 'absolute',
        transform: [{ skewY: '210deg' }],
    },
    headerBoxRow: {
        width: '100%',
        height: 41,
        top: 51,
        flexDirection: 'row',
    },
    backarrow: {
        bottom: 5,
        left: 20,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerCoinName: {
        fontFamily: 'Raleway',
        fontSize: 24,
        width: '70%',
        height: 30,
        left: 50,
    },
    gradientBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerGradientContainer: {
        top: 80,
        width: 322,
        height: 95,
        borderRadius: 20,

    },
    rate: {
        left: 46,
        top: 17,
        fontSize: 12,
        fontFamily: 'Lato',
        color: '#BCBCBC',

    },
    change: {
        right: 25,
        top: 17,
        fontSize: 12,
        fontFamily: 'Lato',
        color: '#BCBCBC',
    },
    headerTotalMoneyText: {
        width: 119,
        height: 26,
        top: 25,
        left: 45,
        fontFamily: 'Raleway',
        fontSize: 20,
        color: '#fff',
    },
    headerPercentMoney: {
        width: 140,
        height: 22,
        left: 30,
        top: 25,
        color: "#fff",

    },

})

export default DetailHeader
