import React, { Component } from 'react'
import { View, StyleSheet,Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

class ChartComponent extends Component {
    render() {
        const charData = {
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
            ]
        }
        return (
            <View style={styles.chartBox}>
                <LineChart data={charData}
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
