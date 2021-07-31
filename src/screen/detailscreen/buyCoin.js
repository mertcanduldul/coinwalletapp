import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,TextInput } from 'react-native'

export default class buyCoin extends Component {
    render() {
        return (
            <View>
                <View style={tabstyles.buyCoinTab}>
                    <View style={tabstyles.coinName}>
                        <Text style={tabstyles.coinNameText}>TOTAL COIN 12 STOCK </Text>
                        <TextInput style={tabstyles.input} placeholder="Enter Coin Count" keyboardType="numeric" />
                        <TouchableOpacity
                            style={tabstyles.purchase}
                        >
                            <Text style={{ color: '#fff', fontSize: 22, fontFamily: 'Raleway' }}>BUY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const tabstyles = StyleSheet.create({
    purchase: {
        width: 124,
        height: 46,
        top: 40,
        backgroundColor: 'rgba(12, 242, 180, 1)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 46,
        width: 219,
        borderWidth: 3,
        borderRadius: 20,
        borderColor: 'rgba(216, 216, 216, 1)',
        top: 10,
        textAlign: 'center',
        color: 'rgba(228, 50, 193, 1)',
        fontFamily: 'Raleway',
        fontSize: 22,
    },
    buyCoinTab: {
        width: '100%',
        height: 230,
        backgroundColor: '#ffffff',
        justifyContent:'center',
        alignItems:'center'
    },
    coinName: {
        width: 249,
        height: 140,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    coinNameText: {
        fontSize: 20,
        fontFamily: 'Raleway',
    },

})