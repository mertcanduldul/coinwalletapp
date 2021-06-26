import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class CoinComponent extends Component {
    render() {
        const { name, price, time, coinPercent, marketcoin, coinHoldingPercent, coinHoldingCount,...props } = this.props
        if (marketcoin) {
            return (
                <View>
                    <TouchableOpacity  {...props} >
                        <View style={styles.coinRow}>
                            <View style={styles.coinLabelBox}>
                                <Text style={styles.coinHeader}>{name}</Text>
                                <Text style={styles.coinTime}>{time}</Text>
                            </View>
                            <View style={styles.coinPriceBaloon}>
                                <Text style={styles.coinPrice}>{price} USD</Text>
                                <Text style={styles.coinPercent}>{coinPercent}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>
            )
        }
        else {
            return (
                <View>
                    <TouchableOpacity {...props}>
                        <View style={styles.coinRow}>
                            <View style={styles.coinLabelBox}>
                                <Text style={styles.coinHeader}>{name}</Text>
                                <Text style={styles.coinTime}>{time}</Text>
                            </View>
                            <View style={styles.coinPriceMiddle}>
                                <Text style={styles.coinPrice}>{price} USD</Text>
                                <Text style={styles.coinPercent}>{coinPercent}</Text>
                            </View>
                            <View style={styles.coinHoldingsBox}>
                                <Text style={styles.coinHoldingCount}>{coinHoldingCount}</Text>
                                <Text style={styles.coinHoldingPercent}>{coinHoldingPercent}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    coinPriceMiddle: {
        width: 150,
        height: 26,
        marginTop: 22,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    coinHoldingPercent: {
        marginTop: 12,
        height: 21,
        width: 29,
    },
    coinHoldingCount: {
        fontSize: 14,
        fontFamily: 'Raleway',
        color: '#020202',
    },
    coinHoldingsBox: {
        width: 60,
        height: 26,
        marginTop: 22,
        marginRight: 19,
        borderRadius: 50,
        backgroundColor: '#2BFEBA',
        alignItems: 'center',

    },
    coinRow: {
        backgroundColor: '#fff',
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    coinLabelBox: {
        marginLeft: 37,
    },
    coinHeader: {
        width: 100,
        height: 37,
        marginTop: 22,
        fontSize: 16,
        color: '#000',
        fontFamily: 'Raleway'

    },
    coinTime: {
        fontWeight: '400',
        color: '#000',
        width: 100,

    },
    coinPrice: {
        fontSize: 14,
        marginTop: 3,
        fontFamily: 'Raleway'

    },
    coinPercent: {
        fontSize: 14,
        width: 100,
        height: 20,
        marginTop: 20,
        fontFamily: 'Raleway'
    },

    coinPriceBaloon: {
        width: 81,
        height: 26,
        marginTop: 22,
        marginRight: 20,
        borderRadius: 50,
        backgroundColor: '#2BFEBA',
        alignItems: 'center',
    },
    hr: {
        width: '80%',
        height: 1,
        backgroundColor: '#e0e0e0',
        marginLeft: '10%'

    }
})

export default CoinComponent