import React, { Component } from 'react'
import { View } from 'react-native'

import DetailHeader from '../component/header/detailHeader'
import ChartComponent from '../component/item/chartComponent'
import DetailTabs from '../component/navigation/detailTabs'

class Detail extends Component {
  render() {
    const { navigation } = this.props
    const { name, price, time, coinPercent, coinHoldingCount, coinHoldingPercent } = this.props.route.params
    return (
      <View>
        <DetailHeader
          navigation={navigation}
          name={name}
          price={price}
          coinPercent={coinPercent}
          coinHoldingCount={coinHoldingCount}
          coinHoldingPercent={coinHoldingPercent}
        />
        <ChartComponent name={name} price={price} />
        {/* <DetailTabs /> */}
      </View>
    )
  }
}
export default Detail
