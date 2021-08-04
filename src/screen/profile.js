import React, { Component } from 'react'
import { Text, View, SafeAreaView,Linking } from 'react-native'

import { Shape } from '../component/icon/index'

export class Profile extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: 100 }}>
                    <View style={{ position: 'absolute', zIndex: -1, top: -110, left: 0 }}>
                        <Shape />
                    </View>
                    <Text style={{ fontFamily: 'Raleway', fontSize: 22 }}>PROFİLE</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', top: 50 }}>
                    <Text style={{ fontSize: 22, height: 50, fontFamily: 'Raleway', }}>UYGULAMAYI HAZIRLAYAN</Text>
                    <Text style={{ fontFamily: 'Raleway', fontSize: 20 }}>MERT CAN DÜLDÜL</Text>
                    <Text style={{ top: 20, fontSize: 18, fontFamily: 'Raleway' }} onPress={() => Linking.openURL('http://instagram.com/m.duldul')}>Instagram : m.duldul</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default Profile
