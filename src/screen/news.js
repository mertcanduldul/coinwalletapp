import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'

import { Bitcoin, Aa, Ethereum, Dogecoin, Tether, Kusama, Sushiswap, BinanceCoin, Shape } from '../component/icon/index'
import NewsHeader from '../component/header/newsHeader'
import TopCoins from './newsscreen/coinList'
import NewsList from './newsscreen/newsList'

class News extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView keyboardShouldPersistTaps='always' keyboardShouldPersistTaps='handled'>
                    <SafeAreaView>
                        <NewsHeader />
                        <TopCoins title="Top Coins" />
                        <TopCoins title="Gainers & Losers" />
                        <View style={{ flex: 1 }}>
                            <NewsList />
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </View>
        )
    }
}

export default News
