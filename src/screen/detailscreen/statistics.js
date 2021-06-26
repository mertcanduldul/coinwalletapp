import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class statistics extends Component {
    render() {
        return (
            <View>
                <View style={statisticsStyle.row}>
                    <Text style={[statisticsStyle.rowHeader, { top: -10, left: 10, fontWeight: 'normal', fontFamily: 'Raleway' }]}>DOGECOIN PRICE TODAY</Text>
                </View>
                <View style={statisticsStyle.row}>
                    <Text style={statisticsStyle.rowHeader}>DOGECOIN PRICE</Text>
                    <Text style={statisticsStyle.rowContent}>$0.3298</Text>
                </View>
                <View style={statisticsStyle.row}>
                    <Text style={statisticsStyle.rowHeader}>PRICE CHANGE</Text>
                    <Text style={statisticsStyle.rowContent}>$-0.1268</Text>
                </View>
                <View style={statisticsStyle.row}>
                    <Text style={statisticsStyle.rowHeader}>24h Low / 24h High</Text>
                    <Text style={statisticsStyle.rowContent}>$0.1668 / $0.2968 </Text>
                </View>
                <View style={statisticsStyle.row}>
                    <Text style={statisticsStyle.rowHeader}>Trading Volume</Text>
                    <Text style={statisticsStyle.rowContent}>$47,243,052 </Text>
                </View>
            </View>
        )
    }
}
const statisticsStyle = StyleSheet.create({
    row: {
        width: '100%',
        height: 25,
        top: 25,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        left: 10,

    },
    rowContent: {
        fontSize: 22,
        fontFamily: 'Raleway',
        right: 10,
    },
})

export default statistics
