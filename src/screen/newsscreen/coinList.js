import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native'

class TopCoins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfGainers: [],
            listOfTopCoin: [],
            ID_LIST: [
                1, 1027, 2010, 1839, 825, 52, 72,
                6636, 3408, 5426, 7083, 1831, 1975,
                4687, 2, 4172, 3890, 8916, 3717, 512,
                1321, 3077, 5805, 2416, 2280, 1958,
                4943, 7278, 1765, 328, 3794, 7186,
                6719, 4195, 6783, 4256, 1376, 3635,
                1518, 4023, 4030, 5994, 2011, 3602,
                3718, 6892, 3957, 5034, 1274, 5692,
            ],
            isLoad1: false,
            isLoad2: false,
            gainersList: [
                "dogecoin", "ethereum", "bitcoin",
                "nano", "waves", "monero", "xrp",
            ],

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
        this.setState({ listOfGainers: rows })
        this.setState({ isLoad2: true })

    }
    coinInitiliazer = async () => {//REST-API
        let rows = []
        let coinList = this.state.gainersList
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
        for (let i = 0; i < coinList.length; i++) {
            const element = coinList[i];
            await fetch(`https://api.coincap.io/v2/assets/${element}`, requestOptions)
                .then(response => {
                    if (response.ok)
                        return response.json()
                })
                .then(result => {
                    result === undefined && i--
                    let coin = {}
                    let data = result?.data;

                    coin.id = data.rank
                    coin.name = data.name + " - " + data.symbol;
                    coin.thumbnail = data.name
                    coin.time = new Date().toLocaleTimeString('tr-TR', { hour12: false })
                    coin.img = `https://cryptologos.cc/logos/${coin.name.replace(/\s+/g, '').toLowerCase()}-logo.png`
                    data.priceUsd <= 1 ? coin.price = Number(data.priceUsd).toFixed(4) : coin.price = Number(data.priceUsd).toFixed(2)
                    coin.percentVolume = Number(data.changePercent24Hr).toFixed(2)

                    rows.push(coin)
                })
                .catch(err => new Error(err))
        }
        this.setState({ listOfTopCoin: rows })
        this.setState({ isLoad1: true })
    }

    componentDidMount() {
        this.getData();
        this.coinInitiliazer();

    }
    render() {
        const { title, navigation, route } = this.props
        const { listOfGainers, isLoad1, isLoad2, listOfTopCoin } = this.state

        return (
            <View>
                {isLoad1 && isLoad2 ?
                    (title == 'Top Coins' ?
                        // --- TOP COİN
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
                                                    source={{ uri: listOfTopCoin[0].img }} />
                                            </View>
                                            <View style={{ marginTop: 8, marginLeft: 8 }}>
                                                <Text style={{ fontSize: 16 }}>{listOfTopCoin[0]?.thumbnail}</Text>
                                                {
                                                    listOfTopCoin[0].percentVolume > 0 ?
                                                        (
                                                            <>
                                                                <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(listOfTopCoin[0]?.price).toFixed(4)} $</Text>
                                                                <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>▲ {Number(listOfTopCoin[0]?.percentVolume).toFixed(2)}%</Text>
                                                            </>
                                                        ) : (

                                                            <>
                                                                <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(listOfTopCoin[0]?.price).toFixed(4)} $</Text>
                                                                <Text style={{ fontSize: 16, color: 'red', marginTop: 10 }}>▼ {Number(listOfTopCoin[0]?.percentVolume).toFixed(2)}%</Text>
                                                            </>
                                                        )
                                                }
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
                                                    source={{ uri: listOfTopCoin[1].img }} />
                                            </View>
                                            <View style={{ marginTop: 8, marginLeft: 8 }}>
                                                <Text style={{ fontSize: 16 }}>{listOfTopCoin[1]?.thumbnail}</Text>
                                                {
                                                    listOfTopCoin[1].percentVolume > 0 ?
                                                        (
                                                            <>
                                                                <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(listOfTopCoin[1]?.price).toFixed(4)} $</Text>
                                                                <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>▲ {Number(listOfTopCoin[1]?.percentVolume).toFixed(2)}%</Text>
                                                            </>
                                                        ) : (

                                                            <>
                                                                <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(listOfTopCoin[1]?.price).toFixed(4)} $</Text>
                                                                <Text style={{ fontSize: 16, color: 'red', marginTop: 10 }}>▼ {Number(listOfTopCoin[1]?.percentVolume).toFixed(2)}%</Text>
                                                            </>
                                                        )
                                                }
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
                                                    source={{ uri: listOfTopCoin[2].img }} />
                                            </View>
                                            <View style={{ marginTop: 8, marginLeft: 8 }}>
                                                <Text style={{ fontSize: 16 }}>{listOfTopCoin[2]?.thumbnail}</Text>
                                                {
                                                    listOfTopCoin[2].percentVolume > 0 ?
                                                        (
                                                            <>
                                                                <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(listOfTopCoin[2]?.price).toFixed(4)} $</Text>
                                                                <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>▲ {Number(listOfTopCoin[2]?.percentVolume).toFixed(2)}%</Text>
                                                            </>
                                                        ) : (

                                                            <>
                                                                <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(listOfTopCoin[2]?.price).toFixed(4)} $</Text>
                                                                <Text style={{ fontSize: 16, color: 'red', marginTop: 10 }}>▼ {Number(listOfTopCoin[2]?.percentVolume).toFixed(2)}%</Text>
                                                            </>
                                                        )
                                                }
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
                                                    source={{ uri: listOfTopCoin[3].img }} />
                                            </View>
                                            <View style={{ marginTop: 8, marginLeft: 8 }}>
                                                <Text style={{ fontSize: 16 }}>{listOfTopCoin[3]?.thumbnail}</Text>
                                                {
                                                    listOfTopCoin[3].percentVolume > 0 ?
                                                        (
                                                            <>
                                                                <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(listOfTopCoin[3]?.price).toFixed(4)} $</Text>
                                                                <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>▲ {Number(listOfTopCoin[3]?.percentVolume).toFixed(2)}%</Text>
                                                            </>
                                                        ) : (

                                                            <>
                                                                <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(listOfTopCoin[3]?.price).toFixed(4)} $</Text>
                                                                <Text style={{ fontSize: 16, color: 'red', marginTop: 10 }}>▼ {Number(listOfTopCoin[3]?.percentVolume).toFixed(2)}%</Text>
                                                            </>
                                                        )
                                                }
                                            </View>

                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                        // --- END TOP COİN
                        :
                        // GAİNERS OR LOSERS
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
                                                    source={{ uri: `https://cryptologos.cc/logos/${listOfGainers[0].img.replace(/\s+/g, '').toLowerCase()}-logo.png` }} />
                                            </View>
                                            <View style={{ marginTop: 8, marginLeft: 8 }}>
                                                <Text style={{ fontSize: 16 }}>{listOfGainers[0]?.name}</Text>
                                                {
                                                    listOfTopCoin[1].percentVolume > 0 ?
                                                        (
                                                            <>
                                                                <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(listOfGainers[0]?.price).toFixed(4)} $</Text>
                                                                <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>▲ {Number(listOfGainers[0]?.percentVolume).toFixed(2)}%</Text>
                                                            </>
                                                        ) : (

                                                            <>
                                                                <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(listOfGainers[0]?.price).toFixed(4)} $</Text>
                                                                <Text style={{ fontSize: 16, color: 'red', marginTop: 10 }}>▼ {Number(listOfGainers[0]?.percentVolume).toFixed(2)}%</Text>
                                                            </>
                                                        )
                                                }
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
                                                    source={{ uri: `https://cryptologos.cc/logos/${listOfGainers[1].img.replace(/\s+/g, '').toLowerCase()}-logo.png` }} />
                                            </View>
                                            <View style={{ marginTop: 8, marginLeft: 8 }}>
                                                <Text style={{ fontSize: 16 }}>{listOfGainers[1]?.name}</Text>
                                                {
                                                    listOfTopCoin[2].percentVolume > 0 ?
                                                        (
                                                            <>
                                                                <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(listOfGainers[1]?.price).toFixed(4)} $</Text>
                                                                <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>▲ {Number(listOfGainers[1]?.percentVolume).toFixed(2)}%</Text>
                                                            </>
                                                        ) : (

                                                            <>
                                                                <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(listOfGainers[1]?.price).toFixed(4)} $</Text>
                                                                <Text style={{ fontSize: 16, color: 'red', marginTop: 10 }}>▼ {Number(listOfGainers[1]?.percentVolume).toFixed(2)}%</Text>
                                                            </>
                                                        )
                                                }
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
                                                    source={{ uri: `https://cryptologos.cc/logos/${listOfGainers[2].img.replace(/\s+/g, '').toLowerCase()}-logo.png` }} />
                                            </View>
                                            <View style={{ marginTop: 8, marginLeft: 8 }}>
                                                <Text style={{ fontSize: 16 }}>{listOfGainers[2]?.name}</Text>
                                                {
                                                    listOfTopCoin[3].percentVolume > 0 ?
                                                        (
                                                            <>
                                                                <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(listOfGainers[3]?.price).toFixed(4)} $</Text>
                                                                <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>▲ {Number(listOfGainers[3]?.percentVolume).toFixed(2)}%</Text>
                                                            </>
                                                        ) : (

                                                            <>
                                                                <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(listOfGainers[3]?.price).toFixed(4)} $</Text>
                                                                <Text style={{ fontSize: 16, color: 'red', marginTop: 10 }}>▼ {Number(listOfGainers[3]?.percentVolume).toFixed(2)}%</Text>
                                                            </>
                                                        )
                                                }
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
                                                    source={{ uri: `https://cryptologos.cc/logos/${listOfGainers[3].img.replace(/\s+/g, '').toLowerCase()}-logo.png` }} />
                                            </View>
                                            <View style={{ marginTop: 8, marginLeft: 8 }}>
                                                <Text style={{ fontSize: 16 }}>{listOfGainers[3]?.name}</Text>
                                                {
                                                    listOfTopCoin[3].percentVolume > 0 ?
                                                        (
                                                            <>
                                                                <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(listOfGainers[3]?.price).toFixed(4)} $</Text>
                                                                <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>▲ {Number(listOfGainers[3]?.percentVolume).toFixed(2)}%</Text>
                                                            </>
                                                        ) : (

                                                            <>
                                                                <Text style={{ fontSize: 16, color: '#888888', marginTop: 0 }}>{Number(listOfGainers[3]?.price).toFixed(4)} $</Text>
                                                                <Text style={{ fontSize: 16, color: 'red', marginTop: 10 }}>▼ {Number(listOfGainers[3]?.percentVolume).toFixed(2)}%</Text>
                                                            </>
                                                        )
                                                }
                                            </View>

                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                        // END LOSERS OR LOSERS
                    ) :
                    //--- SKELETON LOADİNG 
                    <View>
                        <View style={{ flexDirection: 'row', marginBottom: 15, justifyContent: 'space-between', marginHorizontal: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Loading...</Text>
                            <Text style={{ fontSize: 20, color: '#4f63c6' }}>See All</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 15, height: 150, marginRight: 10 }}>
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
                                        <View style={{ backgroundColor: 'gray', width: 50, height: 50, left: 10, borderRadius: 100, justifyContent: 'center' }}>
                                            <ActivityIndicator color="white" />
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 8, marginLeft: 8 }}>
                                        <View style={{ backgroundColor: 'gray', width: 70, height: 10, top: 30, borderRightColor: 'white' }} />

                                        <View style={{ backgroundColor: 'gray', width: 100, height: 10, top: 40, borderRightColor: 'white' }} />
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
                                        <View style={{ backgroundColor: 'gray', width: 50, height: 50, left: 10, borderRadius: 100, justifyContent: 'center' }}>
                                            <ActivityIndicator color="white" />
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 8, marginLeft: 8 }}>
                                        <View style={{ backgroundColor: 'gray', width: 70, height: 10, top: 30, borderRightColor: 'white' }} />

                                        <View style={{ backgroundColor: 'gray', width: 100, height: 10, top: 40, borderRightColor: 'white' }} />
                                    </View>

                                </View>
                            </View>

                        </View>


                    </View>
                    //--- END SKELETON LOADİNG
                }
            </View>
        )
    }
}

export default TopCoins
