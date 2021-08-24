import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Shape } from '../icon/index'

class NewsHeader extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: 110 }}>
                <View style={{ position: 'absolute', zIndex: -1, top: -120, left: 0 }}>
                    <Shape />
                </View>
                <Text style={{ fontFamily: 'Raleway', fontSize: 22 }}>NEWS</Text>
            </View>
        )
    }
}

export default NewsHeader
