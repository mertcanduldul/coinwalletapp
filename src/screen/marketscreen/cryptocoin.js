import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image, ActivityIndicator, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import produce from "immer"
import Toast from 'react-native-toast-message';

import { Star, Clock } from '../../component/icon/index'

class CryptoCoin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            coinData: [],
            list: [
                "dogecoin", "ethereum", "bitcoin",
                "nano", "waves", "monero", "pancakeswap",
                "stellar", "litecoin", "cardano",
                "tron", "neo", "binance-coin", "tezos",
                "xrp", "bitcoin-cash", "eos", "iota",
                "dash", "nem", "zcash", "omg", "moac"
            ],
            isLoad: false,
            isRefresh: false,
            isLatestTime: "green"
        }
    }

    coinInitiliazer = async () => {//REST-API
        this.setState({ isRefresh: true })
        let rows = []
        let coinList = this.state.list
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
                    coin.time = new Date().toLocaleTimeString('tr-TR', { hour12: false })
                    coin.img = `https://cryptologos.cc/logos/${coin.name.replace(/\s+/g, '').toLowerCase()}-logo.png`
                    data.priceUsd <= 1 ? coin.price = Number(data.priceUsd).toFixed(4) : coin.price = Number(data.priceUsd).toFixed(2)
                    coin.coinPercent = Number(data.changePercent24Hr).toFixed(2)

                    rows.push(coin)
                })
                .catch(err => new Error(err))
        }
        this.setState({ coinData: rows })
        this.setState({ isLoad: true })
        this.setState({ isRefresh: false })
        this.setState({ isLatestTime: "green" })
        // this.fetchData();
    }
    timeFunction = () => {
        setInterval(() => {
            Toast.show({
                type: 'error',
                text1: 'Tutamıyorum Zamanı',
                text2: 'Coinlerin güncel değerlerini öğrenmek için sayfayı kaydır ✌🏻',
            });
            this.setState({ isLatestTime: "red" })
        }, 60000)
    }

    /* FPS DROP İSSUE FUNCTİON
    fetchRealTimeData = () => {//websocket

        const requestCoinName = this.state.list
        const tradeWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${requestCoinName.join(',')}`)

        tradeWs.onmessage = (res) => {
            if (res !== undefined || res !== null) {
                let data = JSON.parse(res?.data)
                let row = []

                for (let i = 0; i < requestCoinName.length; i++) {
                    let uniqueCoin = {}
                    uniqueCoin.name = requestCoinName[i]?.toUpperCase()
                    uniqueCoin.id = i

                    const price = data[requestCoinName[i]]
                    uniqueCoin.price = price
                    let datetime = new Date().toLocaleTimeString('tr-TR', { hour12: false })
                    uniqueCoin.time = datetime

                    row[i] = uniqueCoin
                    var isAllDataFetchNumber = 0;
                    row.forEach(element => {
                        if (element.price !== undefined) {
                            isAllDataFetchNumber++;
                        }
                        if (isAllDataFetchNumber === row.length) {
                            this.setState(produce(state => {
                                for (let j = 0; j < row.length; j++) {
                                    try {

                                        state.coinData[j].price = row[j].price
                                        state.coinData[j].time = row[j].time

                                    } catch (error) {
                                    }

                                }
                            }))

                        }
                    });

                }
            }
            isAllDataFetchNumber = 0;
        }
    }
    fetchData = () => { // rest-api
        setInterval(async () => {
            let coinList = this.state.list
            const _data = this.state.coinData
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            for (let i = 0; i < coinList.length; i++) {
                const element = coinList[i];
                await fetch(`https://api.coincap.io/v2/assets/${element}`, requestOptions)
                    .then(response => {
                        if (response.ok && response.status >= 200 && response.status < 300)
                            return response.json()
                    })
                    .then(result => {

                        try {
                            let data = result.data
                            let price = Number(data.priceUsd).toFixed(4)
                            let datetime = new Date().toLocaleTimeString('tr-TR', { hour12: false })
                            let coinPercent = Number(data.changePercent24Hr).toFixed(4)

                            _data.forEach((item, index) => {
                                this.setState(produce(draft => {
                                    if (index == i) {
                                        draft.coinData[index].price = price
                                        draft.coinData[index].time = datetime
                                        draft.coinData[index].coinPercent = coinPercent
                                    }
                                }))
                            });
                        }
                        catch {
                            i++;
                            sleep = (ms) => {
                                return new Promise(resolve => setTimeout(resolve, ms));
                            }
                            sleep(2000)
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }, 8000)
    }
        */

    componentDidMount() {
        this.coinInitiliazer();
        this.timeFunction();
    }
    render() {
        const { navigation } = this.props
        const { arr, coinData, isRefresh, isLatestTime } = this.state

        const Item = ({ id, name, price, time, coinPercent, coinHoldingCount, coinHoldingPercent, img }) => (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Detail',
                    {
                        id,
                        name,
                        price,
                        time,
                        coinPercent,
                        coinHoldingCount,
                        coinHoldingPercent,
                    },
                )} >
                    <View style={styles.coinRow}>
                        <View>
                            <Image style={{ width: 30, height: 30, right: 10 }} source={{ uri: img }} />
                        </View>
                        <View style={{ width: '15%' }}>
                            <Text style={styles.coinHeader}>{name}</Text>
                            <Text style={styles.coinTime}><Clock color={isLatestTime} height={18} /> {time} </Text>
                        </View>
                        <View style={{ width: 100 }}>

                        </View>
                        {
                            coinPercent < 0 ? //YELLOW BALOON OR RED BALOON STATE
                                (<View style={styles.coinPriceBaloonRed}>
                                    <Text style={styles.coinPriceWhite}>{price} $</Text>
                                    <Text style={styles.coinPercent}>{coinPercent} % ▼</Text>
                                </View>)
                                :
                                (<View style={styles.coinPriceBaloon}>
                                    <Text style={styles.coinPrice}>{price} $</Text>
                                    <Text style={styles.coinPercent}>{coinPercent} % ▲</Text>
                                </View>)
                        }
                        <TouchableOpacity style={{ width: 25, alignItems: 'center' }}
                            onPress={() => {
                                let item = {
                                    id: id,
                                    name: name,
                                    price: price,
                                    time: time,
                                    coinPercent: coinPercent,
                                    marketcoin: false,
                                }
                                if (item !== null) {
                                    AsyncStorage.setItem(item.id + "", JSON.stringify(item)).catch((err) => console.log(err))
                                }
                                else {
                                    console.log("hata");
                                }
                            }
                            }>
                            <Star color="#ff9c00" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                <View style={styles.hr}></View>
            </View >
        );
        const renderItem = ({ item }) => (
            <Item
                id={item.id}
                name={item.name}
                price={item.price}
                time={item.time}
                coinPercent={item.coinPercent}
                coinHoldingCount={item.coinHoldingCount}
                coinHoldingPercent={item.coinHoldingPercent}
                img={item.img}
            />
        );
        const toastConfig = {
            type: 'error',
            position: 'top'
        }


        return (
            <View>

                {
                    this.state.isLoad == true ? (
                        <FlatList
                            data={coinData}
                            renderItem={renderItem}
                            keyExtractor={Item => Item.id}
                            refreshControl={
                                <RefreshControl
                                    refreshing={isRefresh}
                                    onRefresh={this.coinInitiliazer}
                                />
                            }
                        />

                    ) : ( // SKELETON LOADER VİEW
                        <View>
                            <View style={{ width: '100%', height: 100, paddingHorizontal: 20, position: 'absolute', margin: 10, top: 0 }}>
                                <View style={{ width: '20%', backgroundColor: '#a0a0a0', height: '60%', borderRadius: 100, justifyContent: 'center' }}>
                                    <ActivityIndicator size="large" color="white" />
                                </View>
                                <View style={{ width: '40%', backgroundColor: '#a0a0a0', height: '10%', left: '30%', bottom: '50%', borderRadius: 10 }}></View>
                                <View style={{ width: '60%', backgroundColor: '#a0a0a0', height: '10%', left: '30%', bottom: '40%', borderRadius: 10 }}></View>
                            </View>
                            <View style={{ width: '100%', height: 100, paddingHorizontal: 20, position: 'absolute', margin: 10, top: 100 }}>
                                <View style={{ width: '20%', backgroundColor: '#a0a0a0', height: '60%', borderRadius: 100, justifyContent: 'center' }}>
                                    <ActivityIndicator size="large" color="white" />
                                </View>
                                <View style={{ width: '40%', backgroundColor: '#a0a0a0', height: '10%', left: '30%', bottom: '50%', borderRadius: 10 }}></View>
                                <View style={{ width: '60%', backgroundColor: '#a0a0a0', height: '10%', left: '30%', bottom: '40%', borderRadius: 10 }}></View>
                            </View>
                            <View style={{ width: '100%', height: 100, paddingHorizontal: 20, position: 'absolute', margin: 10, top: 200 }}>
                                <View style={{ width: '20%', backgroundColor: '#a0a0a0', height: '60%', borderRadius: 100, justifyContent: 'center' }}>
                                    <ActivityIndicator size="large" color="white" />
                                </View>
                                <View style={{ width: '40%', backgroundColor: '#a0a0a0', height: '10%', left: '30%', bottom: '50%', borderRadius: 10 }}></View>
                                <View style={{ width: '60%', backgroundColor: '#a0a0a0', height: '10%', left: '30%', bottom: '40%', borderRadius: 10 }}></View>
                            </View>
                            <View style={{ width: '100%', height: 100, paddingHorizontal: 20, position: 'absolute', margin: 10, top: 300 }}>
                                <View style={{ width: '20%', backgroundColor: '#a0a0a0', height: '60%', borderRadius: 100, justifyContent: 'center' }}>
                                    <ActivityIndicator size="large" color="white" />
                                </View>
                                <View style={{ width: '40%', backgroundColor: '#a0a0a0', height: '10%', left: '30%', bottom: '50%', borderRadius: 10 }}></View>
                                <View style={{ width: '60%', backgroundColor: '#a0a0a0', height: '10%', left: '30%', bottom: '40%', borderRadius: 10 }}></View>
                            </View>
                            <View style={{ width: '100%', height: 100, paddingHorizontal: 20, position: 'absolute', margin: 10, top: 400 }}>
                                <View style={{ width: '20%', backgroundColor: '#a0a0a0', height: '60%', borderRadius: 100, justifyContent: 'center' }}>
                                    <ActivityIndicator size="large" color="white" />
                                </View>
                                <View style={{ width: '40%', backgroundColor: '#a0a0a0', height: '10%', left: '30%', bottom: '50%', borderRadius: 10 }}></View>
                                <View style={{ width: '60%', backgroundColor: '#a0a0a0', height: '10%', left: '30%', bottom: '40%', borderRadius: 10 }}></View>
                            </View>
                        </View>
                    )
                }
                <Toast ref={(ref) => Toast.setRef(ref)} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    coinRow: {
        backgroundColor: '#fff',
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20

    },
    coinHeader: {
        width: 150,
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
    coinPriceWhite: {
        fontSize: 14,
        marginTop: 3,
        fontFamily: 'Raleway',
        color: '#fff'

    },
    coinPercent: {
        fontSize: 14,
        width: 100,
        marginTop: 10,
        left: 10

    },

    coinPriceBaloon: {
        width: 110,
        height: 26,
        top: 0,
        borderRadius: 50,
        backgroundColor: '#2BFEBA',
        alignItems: 'center',
    },
    coinPriceBaloonRed: {
        width: 110,
        height: 26,
        top: 0,
        borderRadius: 50,
        backgroundColor: '#ff4d4d',
        alignItems: 'center',
    },
    hr: {
        width: '80%',
        height: 1,
        backgroundColor: '#e0e0e0',
        marginLeft: '10%'

    }
})

export default CryptoCoin