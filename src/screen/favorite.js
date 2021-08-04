import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import FavoriteHeader from '../component/header/favoriteHeader'
import Detail from './detail'
import CoinList from '../component/item/coinListComponent'

const Stack = createStackNavigator();

class Favorite extends React.Component {
    render() {
        const { navigation } = this.props

        return (
            <View>
                <FavoriteHeader />
                <CoinList navigation={navigation} />
            </View>
        )
    }
}

const FavoriteStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default FavoriteStack
