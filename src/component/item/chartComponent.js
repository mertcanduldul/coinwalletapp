import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

class ChartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: ["DEC 15", "DEC 20", "DEC 31", "JAN 2", "JAN 8", "JAN 15"],
            datasets: [
                {
                    data: [
                        1.001,
                        2.0089,
                        3.115,
                        2.02,
                        3.11,
                        1.05,
                        4.05
                    ]
                }
            ],

            isLoad: false
        }
    }
    fetchChartData = async () => {
        const _coinName = this.props.name
        const COIN_NAME = _coinName.split(' ')[2];

        let dateObj = await new Date();
        let month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
        let date = ('0' + dateObj.getDate()).slice(-2);
        let yesterdate = ('0' + (dateObj.getDate() - 1)).slice(-2);
        let year = dateObj.getFullYear();
        let hour = ('0' + dateObj.getHours()).slice(-2);
        let minute = ('0' + dateObj.getMinutes()).slice(-2);
        let today = year + '-' + month + '-' + date + "T" + hour + ":" + minute;
        let yesterday = year + '-' + month + '-' + yesterdate + "T" + hour + ":" + minute;

        const URL = `https://production.api.coindesk.com/v2/price/values/${COIN_NAME}?start_date=${yesterday}&end_date=${today}&ohlc=false`

        await fetch(URL)
            .then(res => res.json())
            .then(result => {
                if (result !== undefined) {
                    //new Date(result.data.entries[20][0]).toLocaleTimeString().substr(0, 5);
                    let arrTime = []
                    let arrPrice = []
                    for (let i = 0; i < 7; i++) {
                        const obj = new Date(result?.data.entries[10 * i][0]).toLocaleTimeString().substr(0, 5);
                        arrTime[i] = obj
                    }

                    for (let i = 0; i < 7; i++) {
                        const obj = parseFloat(result.data.entries[10 * i][1]).toFixed(2)
                        arrPrice[i] = obj

                    }
                    let nesned = { ...this.state.datasets }
                    nesned[0].data = arrPrice

                    this.setState({ data: { ...this.state.datasets.data, arrPrice } })
                    this.setState({ labels: arrTime })
                    this.setState({ isLoad: true })
                }
            })
            .catch(err => console.log(err))

    }
    componentDidMount() {
        this.fetchChartData();
    }

    render() {
        const { name } = this.props
        const { chartData, isLoad } = this.state
        return (
            <View>
                {
                    isLoad ?
                        <View style={styles.chartBox}>
                            <LineChart data={this.state}
                                width={Dimensions.get("window").width / 1.1}
                                height={220}
                                yAxisLabel="$"
                                yAxisSuffix="k"
                                yAxisInterval={1}
                                chartConfig={{
                                    backgroundColor: "#000",
                                    backgroundGradientFrom: "#fff",
                                    backgroundGradientTo: "#fff",
                                    decimalPlaces: 2, // optional, defaults to 2dp
                                    color: (opacity = 1) => `rgba(228, 50, 193, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(67, 64, 90, ${opacity})`,
                                    style: {
                                        borderRadius: 16
                                    },
                                    propsForDots: {
                                        r: "6",
                                        strokeWidth: "2",
                                        stroke: "#E432C1"
                                    }
                                }}
                                bezier
                                style={{
                                    marginVertical: 8,
                                    borderRadius: 16
                                }} />

                        </View>
                        :
                        <View></View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    chartBox: {
        top: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default ChartComponent
