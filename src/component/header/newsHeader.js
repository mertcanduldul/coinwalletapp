import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Shape } from '../icon/index'

class NewsHeader extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 100 }}>
                <View style={{ position: 'absolute', zIndex: -1, top: -110, left: 0 }}>
                    <Shape />
                </View>
                <Text style={{ fontFamily: 'Raleway', fontSize: 22 }}>NEWS</Text>
            </View>
        )
    }
}

export default NewsHeader
