import React from 'react';
import { View ,SafeAreaView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import Detail from './detail'
import Tabs from '../component/navigation/marketTabs'
import MarketHeader from '../component/header/marketHeader'


const Stack = createStackNavigator();

class Market extends React.Component {
  render() {
  
    return (
      <View style={{ flex: 1 }}>
        <MarketHeader header="CoinMarket" />
        <Tabs />
      </View>
    )
  }
}
function MarketStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Market" component={Market} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default MarketStack