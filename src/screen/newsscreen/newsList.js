import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'

import { Bitcoin } from '../../component/icon/index'

export class NewsList extends Component {
    render() {
        const DATA = [
            {
                id: 1,
                NewsIcon: 'Bitcoin',
                newsText: 'Average Bitcoin Transaction Fee Hits Lowest Level Since January As Market Cools Down',
                newsSource: 'Bloomberg UK',
                newsTime: '  ● 1 Hour Ago'
            },
            {
                id: 2,
                NewsIcon: 'Bitcoin',
                newsText: 'Bitcoin Mining Soars in Argentina Amid Cheap,Subsidized Energy',
                newsSource: 'CNN',
                newsTime: '  ● 2 Hour Ago'
            },
            {
                id: 3,
                NewsIcon: 'Ethereum',
                newsText: 'GG WP EASY',
                newsSource: 'Şututgart',
                newsTime: '  ● 1 Hour Ago'
            },
            {
                id: 4,
                NewsIcon: 'Dogecoin',
                newsText: 'Average Bitcoin Transaction Fee Hits Lowest Level Since January As Market Cools Down',
                newsSource: 'TR Piyasası',
                newsTime: '  ● 3 Hour Ago'
            },
            {
                id: 5,
                NewsIcon: 'Tether',
                newsText: 'Average Bitcoin Transaction Fee Hits Lowest Level Since January As Market Cools Down',
                newsSource: 'Bloomberg UK',
                newsTime: '  ● 4 Hour Ago'
            },


        ]
        const Item = ({ newsText, newsSource, newsTime, NewsIcon }) => {
            return (
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginLeft: 15, height: 100, marginBottom: 20 }}>
                        <View style={{
                            width: 80, height: 80, backgroundColor: '#b0b0b0',
                            borderRadius: 15, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <View style={{ width: 40 }}>
                                <Bitcoin color="black" />
                            </View>
                        </View>
                        <View style={{ width: '75%', marginHorizontal: 15, }}>
                            <View>
                                <Text style={{ fontWeight: '700', fontSize: 16 }}>
                                    {newsText}
                                </Text>
                            </View>
                            <View style={{ marginTop: 20, flexDirection: 'row' }}>
                                <Text >{newsSource}</Text>
                                <Text style={{ color: '#a0a0a0' }}>{newsTime}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        const renderItem = ({ item }) => (
            <Item newsText={item.newsText} newsSource={item.newsSource} newsTime={item.newsTime} />
        );
        return (
            <View>
                <View style={{ flexDirection: 'row', marginBottom: 15, justifyContent: 'space-between', marginHorizontal: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>News</Text>
                    <TouchableOpacity><Text style={{ fontSize: 20, color: '#4f63c6' }}>See All</Text></TouchableOpacity>
                </View>
                <View>
                    <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
                </View>
            </View>
        )
    }
}

export default NewsList
