import React, { Component } from 'react'
import { View } from 'react-native'
import { ProgressChart } from 'react-native-chart-kit'

export default class technical extends Component {
    render() {
        const data = {
            labels: ["Bear", "Bull"], // optional
            data: [0.3, 0.7],
            colors: ['rgba(112, 112, 112, 1)', 'rgba(76, 113, 240, 1)']
        };
        const chartConfig = {
            backgroundGradientFrom: "#f0f0f0",
            backgroundGradientFromOpacity: 1,
            backgroundGradientTo: "#f0f0f0",
            backgroundGradientToOpacity: 1,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 3, // optional, default 3
            barPercentage: 1,
            useShadowColorFromDataset: false// optional
        };
        return (
            <View>
                <ProgressChart
                    withCustomBarColorFromData={true}
                    data={data}
                    width={360}
                    height={220}
                    strokeWidth={8}
                    radius={16}
                    chartConfig={chartConfig}
                    hideLegend={false}
                />
            </View>
        )
    }
}
