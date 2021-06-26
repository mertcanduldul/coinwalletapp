import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import Emtia from '../../screen/marketscreen/emtia'
import CryptoCoin from '../../screen/marketscreen/cryptocoin'

export class Tabs extends Component {
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    style: { backgroundColor: '#F8F8F8', borderTopLeftRadius: 25 },
                    scrollEnabled: true,
                    activeTintColor: '#fff', inactiveTintColor: '#000',
                    indicatorStyle: { backgroundColor: '#F21CC8', borderRadius: 20, marginBottom: 8, height: 30, width: 100, marginLeft: 10 },
                    tabStyle: { width: 120 }
                }}>
                <Tab.Screen name="Crypto Coin" component={CryptoCoin} />
                <Tab.Screen name="Emtia" component={Emtia} />
                <Tab.Screen name="Exchange" component={Emtia} />
                <Tab.Screen name="Index" component={Emtia} />
            </Tab.Navigator>
        )
    }
}

export default Tabs
