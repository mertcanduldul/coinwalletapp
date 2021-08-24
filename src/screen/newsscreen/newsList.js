import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, Image, Linking } from 'react-native'
import { DOMParser } from 'xmldom';

export class NewsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            DATA: [
                {
                    id: 1,
                    newsIcon: 'Bitcoin',
                    newsText: 'Average Bitcoin Transaction Fee Hits Lowest Level Since January As Market Cools Down',
                    newsSource: 'Bloomberg UK',
                    newsTime: '  ● 1 Hour Ago',
                    href: ''
                },
            ],
            isLoad: false
        }

    }

    fetchNews = async () => {
        const parser = new DOMParser()
        const url = "https://tr.investing.com/news/cryptocurrency-news"
        await fetch(url)
            .then(response => response.text())
            .then(result => {
                const doc = parser.parseFromString(result, "text/html")
                const fetchData = []
                for (let i = 0; i < 10; i++) {
                    let item = {}
                    item.id = i;
                    item.newsText = doc.getElementsByClassName("title")[i + 6].textContent;
                    item.newsSource = "Investing.com";
                    item.newsTime = doc.getElementsByClassName("date")[i].textContent;
                    item.newsIcon = doc.getElementsByTagName("img")[i + 9].attributes[1].textContent;
                    item.href = "https://tr.investing.com" + doc.getElementsByClassName("title")[i + 6].attributes[0].textContent;
                    fetchData[i] = item
                }
                this.setState({ DATA: fetchData })
                this.setState({ isLoad: true })
            })
            .catch(err => console.log(err))
    }
    componentDidMount() {
        this.fetchNews();
    }
    render() {
        const { DATA, isLoad } = this.state;

        const Item = ({ newsText, newsSource, newsTime, newsIcon, href }) => {

            return (
                <TouchableOpacity onPress={() => { Linking.openURL(href) }}>
                    <View style={{ flexDirection: 'row', marginLeft: 15, height: 100, marginBottom: 20 }}>
                        <View style={{
                            width: 80, height: 80, backgroundColor: '#b0b0b0',
                            borderRadius: 15, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <View style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 70, height: 70, borderRadius: 10 }} source={{ uri: newsIcon }} />
                            </View>
                        </View>
                        <View style={{ width: '75%', marginHorizontal: 15, marginTop: 10 }}>
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
            <Item newsText={item.newsText} newsSource={item.newsSource} newsTime={item.newsTime} newsIcon={item.newsIcon} href={item.href} />
        );
        return (
            <View>
                <View style={{ flexDirection: 'row', marginBottom: 15, justifyContent: 'space-between', marginHorizontal: 20, marginTop: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>News</Text>
                    <TouchableOpacity onPress={() => { Linking.openURL("https://tr.investing.com/news/cryptocurrency-news") }}>
                        <Text style={{ fontSize: 20, color: '#4f63c6' }}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {
                        isLoad ?
                            <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
                            :
                            (
                                <View>
                                    <View style={{ flexDirection: 'row', marginLeft: 15, height: 100, marginBottom: 20 }}>
                                        <View style={{
                                            width: 80, height: 80, backgroundColor: '#b0b0b0',
                                            borderRadius: 15, justifyContent: 'center', alignItems: 'center'
                                        }}>
                                        </View>
                                        <View style={{ width: '75%', marginHorizontal: 15, }}>
                                            <View style={{ height: 10, width: 180, backgroundColor: '#b0b0b0', marginTop: 10 }} />
                                            <View style={{ marginTop: 20, flexDirection: 'row' }}>
                                                <View style={{ height: 10, width: 100, backgroundColor: '#b0b0b0' }} />
                                            </View>
                                            <Text style={{ marginLeft: 20, marginTop: 10 }}>LOADİNG...</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                    }
                </View>
            </View>
        )
    }
}

export default NewsList
