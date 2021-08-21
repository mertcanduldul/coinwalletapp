import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'

import { Bitcoin, Aa, Ethereum, Dogecoin, Tether } from '../../component/icon/index'

class TopCoins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            ID_LIST: [
                1, 1027, 2010, 1839, 825, 52, 72,
                6636, 3408, 5426, 7083, 1831, 1975,
                4687, 2, 4172, 3890, 8916, 3717, 512,
                1321, 3077, 5805, 2416, 2280, 1958,
                4943, 7278, 1765, 328, 3794, 7186,
                6719, 4195, 6783, 4256, 1376, 3635,
                1518, 4023, 4030, 5994, 2011, 3602,
                3718, 6892, 3957, 5034, 1274, 5692,
                4157, 6945, 2502, 131, 4066, 3155
            ],
            isLoad: false

        }
    }
    // https://web-api.coinmarketcap.com/v1/cryptocurrency/map?sort=cmc_rank
    getData = async () => {
        let rows = []
        const DB = this.state.ID_LIST
        for (let id = 0; id < DB.length; id++) {
            const element = DB[id]
            const response = await fetch(`https://web-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${element}`);
            const res = await response.json();
            if (res !== undefined) {
                let item = {}
                const data = res?.data[element]
                const percent = data.quote.USD?.percent_change_24h
                item.id = element
                item.percentVolume = parseFloat(percent)
                item.name = data.name
                item.price = data.quote.USD.price
                item.img = data.name + "-" + data.symbol
                rows[id] = item
            }
        }
        rows.sort((a, b) => {
            return b.percentVolume - a.percentVolume
        });
        this.setState({ list: rows })
        this.setState({ isLoad: true })
    }

    componentDidMount() {
        this.getData();

    }
    render() {
        const { title, navigation, route } = this.props
        const { list, isLoad } = this.state


        return (
            <View>
                {isLoad ?
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
                                            <Image
                                                style={{ width: 30, height: 30, left: 10 }}
                                                source={{ uri: `https://cryptologos.cc/logos/${list[0].img.replace(/\s+/g, '').toLowerCase()}-logo.png` }} />
                                        </View>
                                        <View style={{ marginTop: 8, marginLeft: 8 }}>
                                            <Text style={{ fontSize: 16 }}>{list[0]?.name}</Text>
                                            <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(list[0]?.price).toFixed(4)} $</Text>
                                            <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>▲ {Number(list[0]?.percentVolume).toFixed(2)}%</Text>
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
                                            <Image
                                                style={{ width: 30, height: 30, left: 10 }}
                                                source={{ uri: `https://cryptologos.cc/logos/${list[1].img.replace(/\s+/g, '').toLowerCase()}-logo.png` }} />
                                        </View>
                                        <View style={{ marginTop: 8, marginLeft: 8 }}>
                                            <Text style={{ fontSize: 16 }}>{list[1]?.name}</Text>
                                            <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(list[1]?.price).toFixed(4)} $</Text>
                                            <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>▲ {Number(list[1]?.percentVolume).toFixed(2)}%</Text>
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
                                            <Image
                                                style={{ width: 30, height: 30, left: 10 }}
                                                source={{ uri: `https://cryptologos.cc/logos/${list[2].img.replace(/\s+/g, '').toLowerCase()}-logo.png` }} />
                                        </View>
                                        <View style={{ marginTop: 8, marginLeft: 8 }}>
                                            <Text style={{ fontSize: 16 }}>{list[2]?.name}</Text>
                                            <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(list[2]?.price).toFixed(4)} $</Text>
                                            <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>▲ {Number(list[2]?.percentVolume).toFixed(2)}%</Text>
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
                                            <Image
                                                style={{ width: 30, height: 30, left: 10 }}
                                                source={{ uri: `https://cryptologos.cc/logos/${list[3].img.replace(/\s+/g, '').toLowerCase()}-logo.png` }} />
                                        </View>
                                        <View style={{ marginTop: 8, marginLeft: 8 }}>
                                            <Text style={{ fontSize: 16 }}>{list[3]?.name}</Text>
                                            <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(list[3]?.price).toFixed(4)} $</Text>
                                            <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>▲ {Number(list[3]?.percentVolume).toFixed(2)}%</Text>
                                        </View>

                                    </View>
                                </View>

                            </ScrollView>
                        </View>
                    </View>
                    :
                    <View>
                    </View>
                }
            </View>
        )
    }
}

export default TopCoins
