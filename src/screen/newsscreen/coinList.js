import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'

import { Bitcoin, Aa, Ethereum, Dogecoin, Tether } from '../../component/icon/index'

export class TopCoins extends Component {
    render() {
        const { title, navigation, route } = this.props
        return (
            <View>
                <View style={{ flexDirection: 'row', marginBottom: 15, justifyContent: 'space-between', marginHorizontal: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>{title}</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate(route) }}>
                        <Text style={{ fontSize: 20, color: '#4f63c6' }}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 15, height: 150, marginRight: 10 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ marginLeft: 5 }}>
                            <View style={{
                                width: 140, height: 140, backgroundColor: '#f9f9f9', borderRadius: 10, shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }}>
                                <View style={{ width: 50, height: 30, marginTop: 15, flexDirection: 'row' }}>
                                    <Bitcoin color="orange" />
                                    <Aa width="80" />
                                </View>
                                <View style={{ marginTop: 8, marginLeft: 8 }}>
                                    <Text style={{ fontSize: 16 }}>Bitcoin</Text>
                                    <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>$36.210,91</Text>
                                    <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>▲ 0.64%</Text>
                                </View>

                            </View>
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <View style={{
                                width: 140, height: 140, backgroundColor: '#f9f9f9', borderRadius: 10, shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }}>
                                <View style={{ width: 50, height: 30, marginTop: 15, flexDirection: 'row' }}>
                                    <Dogecoin color="orange" />
                                    <Aa width="80" />
                                </View>
                                <View style={{ marginTop: 8, marginLeft: 8 }}>
                                    <Text style={{ fontSize: 16 }}>Dogecoin</Text>
                                    <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>$0.32</Text>
                                    <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>▲ 2.62%</Text>
                                </View>

                            </View>
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <View style={{
                                width: 140, height: 140, backgroundColor: '#f9f9f9', borderRadius: 10, shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }}>
                                <View style={{ width: 50, height: 30, marginTop: 15, flexDirection: 'row' }}>
                                    <Ethereum color="orange" />
                                    <Aa width="80" />
                                </View>
                                <View style={{ marginTop: 8, marginLeft: 8 }}>
                                    <Text style={{ fontSize: 16 }}>Ethereum</Text>
                                    <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>$2.210,91</Text>
                                    <Text style={{ fontSize: 16, color: 'red', marginTop: 10 }}>▼ 0.14%</Text>
                                </View>

                            </View>
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <View style={{
                                width: 140, height: 140, backgroundColor: '#f9f9f9', borderRadius: 10, shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }}>
                                <View style={{ width: 50, height: 30, marginTop: 15, flexDirection: 'row' }}>
                                    <Tether color="orange" />
                                    <Aa width="80" />
                                </View>
                                <View style={{ marginTop: 8, marginLeft: 8 }}>
                                    <Text style={{ fontSize: 16 }}>Tether</Text>
                                    <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>$1,91</Text>
                                    <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>▲ 0.34%</Text>
                                </View>

                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default TopCoins
