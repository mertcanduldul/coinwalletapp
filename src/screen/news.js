import React, { Component } from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'

import NewsHeader from '../component/header/newsHeader'
import TopCoins from './newsscreen/coinList'
import NewsList from './newsscreen/newsList'

class News extends Component {
    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView keyboardShouldPersistTaps='always' keyboardShouldPersistTaps='handled'>
                    <NewsHeader />
                    <TopCoins title="Top Coins" navigation={this.props.navigation} route="Crypto Coin" />
                    <TopCoins title="Gainers & Losers" navigation={this.props.navigation} route="Emtia" />
                    <View style={{ flex: 1 }}>
                        <NewsList />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default News
