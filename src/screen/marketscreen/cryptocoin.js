import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Aa, Star } from '../../component/icon/index'
import DATA from '../../db/DATA.json'
import axios from 'axios';

//const RNFS = require('react-native-fs')

class CryptoCoin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            coinData: [],
        }
    }

    getData = async () => { // CoinMarketCap
        let coinArr = []
        let uniqueCoin = {}
        //wss://stream.coinmarketcap.com/price/latest
        //https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=bitcoin&start=1&limit=6&category=spot&sort=cmc_rank_advanced
        const response = await fetch("https://web-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1");
        const res = await response.json();
        const data = res?.data[1]
        //console.log(data)
        uniqueCoin.id = 0
        uniqueCoin.name = data?.name
        uniqueCoin.price = Math.round(data?.quote.USD.price)
        uniqueCoin.percent = data?.quote.USD.percent_change_24h
        coinArr[0] = uniqueCoin
        this.setState({ coinData: coinArr })
    }
    getCoinData = async () => { // CoinCap APİ 2.0
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        let coinArr = []
        let uniqueCoin = {}
        const conn = await fetch("https://api.coincap.io/v2/assets/bitcoin", requestOptions);
        const res= await conn.json();
        const data=res?.data;
        uniqueCoin.name=data.name
        uniqueCoin.rank=1
        uniqueCoin.price=Math.round(data.priceUsd)
        coinArr[0]=uniqueCoin
        this.setState({ coinData: coinArr })
    }

    componentDidMount() { 
        //this.getData();

        // const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin')
        // pricesWs.onmessage=(res)=>{
        //     console.log(res.data)
        // }
        
        this.getCoinData();




    }
    render() {
        const { navigation } = this.props
        const { arr, coinData } = this.state




        const Item = ({ id, name, price, time, coinPercent, coinHoldingCount, coinHoldingPercent }) => (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Detail',
                    {
                        id,
                        name,
                        price,
                        time,
                        coinPercent,
                        coinHoldingCount,
                        coinHoldingPercent
                    },
                )} >
                    <View style={styles.coinRow}>
                        <View style={{ width: '15%' }}>
                            <Text style={styles.coinHeader}>{name}</Text>
                            <Text style={styles.coinTime}>{time}</Text>
                        </View>
                        <View style={{ width: 100 }}>
                            <Aa width="100" color="red" />
                        </View>
                        <View style={styles.coinPriceBaloon}>
                            <Text style={styles.coinPrice}>{price} $</Text>
                            <Text style={styles.coinPercent}>{coinPercent}</Text>
                        </View>
                        <TouchableOpacity style={{ width: 25, alignItems: 'center' }}
                            onPress={() => {
                                let item = {
                                    id: id,
                                    name: name,
                                    price: price,
                                    time: time,
                                    coinPercent: coinPercent,
                                    marketcoin: false
                                }
                                if (item !== null) {
                                    AsyncStorage.setItem(item.id + "", JSON.stringify(item)).catch((err) => console.log(err))
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
            />
        );
        return (
            <View>
                <FlatList
                    data={coinData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
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
        marginTop: 10,
        left: 10

    },
    coinPriceBaloon: {
        width: 81,
        height: 26,
        top: 0,
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

export default CryptoCoin