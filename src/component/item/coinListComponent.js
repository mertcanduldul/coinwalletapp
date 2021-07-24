import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, FlatList, RefreshControl } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Down, List } from '../../component/icon/index'
import CoinComponent from '../item/coinComponent'

class CoinList extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            loading: true,
            isRefresh: false, 

        }
    }
    componentDidMount() {
        for (let i = 0; i < 30; i++) {
            AsyncStorage.getItem(i + "").then((res) => {
                if (res !== null) {
                    let obj = JSON.parse(res)
                    this.setState({ data: [...this.state.data, obj] })
                }

            })
        }
    }

    onRefresh = () => {
        while (this.state.data.length) {
            this.state.data.pop()
        }
        this.setState({ isRefresh: false })
        for (let i = 0; i < 30; i++) {
            AsyncStorage.getItem(i + "").then((res) => {
                if (res !== null) {
                    let obj = JSON.parse(res)
                    this.setState({ data: [...this.state.data, obj] })
                }

            })
        }
    }

    render() {
        const { navigation } = this.props
        const { isRefresh, data, loading } = this.state

        const onLoadData = () => {
            const arr = []
            data.forEach(element => {
                if (arr.indexOf(element) == -1) {
                    arr.push(element)
                }
            });
            return arr
        }

        const renderItem = ({ item }) =>
            <CoinComponent
                id={item.id}
                name={item.name}
                price={item.price}
                time={item.time}
                coinPercent={item.coinPercent}
                marketcoin={item.marketcoin}
                coinHoldingCount={item.coinHoldingCount}
                coinHoldingPercent={item.coinHoldingPercent}
                onPress={() => {
                    navigation.navigate('Detail',
                        {
                            id:item.id,
                            name: item.name,
                            price: item.price,
                            time: item.time,
                            coinPercent: item.coinPercent,
                            coinHoldingCount: item.coinHoldingCount,
                            coinHoldingPercent: item.coinHoldingPercent
                        }
                    )
                }
                } />

        return (
            <View style={styles.coinListContainer}>
                <View style={styles.tableHeaderRow}>
                    <TouchableOpacity>
                        <View style={styles.tableCoinBox}>
                            <Text>Coin</Text>
                            <List color="#000" width="16" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.tablePriceBox}>
                            <Text>Price</Text>
                            <Down color="#000" width="16" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.tableStockBox}>
                            <Text>Stock</Text>
                            <Down color="#000" width="16" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.coinRow}>
                    <FlatList
                        data={onLoadData()}
                        renderItem={renderItem}
                        extraData={onLoadData()}
                        keyExtractor={(item, index) => index.toString()}
                        refreshControl={
                            <RefreshControl
                                refreshing={isRefresh}
                                onRefresh={this.onRefresh}
                            />
                        }
                    />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tradingbuttonBox: {
        width: '100%',
        height: 60,
        top: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tradingButton: {
        width: 182,
        height: 52,
        backgroundColor: '#a0f',
        borderRadius: 52,
        justifyContent: 'center',
        alignItems: 'center'
    },
    coinListContainer: {
        width: '100%',
        height: 505,
        top: 50,
        backgroundColor: '#fff',

    },
    tableHeaderRow: {
        flexDirection: 'row',
        position: 'absolute',
        width: '100%',
        height: 40,
        backgroundColor: '#F0F0F0',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: 20

    },
    tableCoinBox: {
        width: 80,
        height: 20,
        left: 34,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    tablePriceBox: {
        width: 80,
        height: 20,
        left: 30,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    tableStockBox: {
        width: 80,
        height: 20,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    coinRow: {
        height: 465,
        top: 40,
        backgroundColor: '#fff',

    }
})

export default CoinList
