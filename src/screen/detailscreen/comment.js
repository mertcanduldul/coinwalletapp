import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View, StyleSheet, TextInput } from 'react-native'

import { Down, Octagonal, Shape, User } from '../../component/icon/index'

class comment extends Component {
    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <User color="#000" />
                    <TextInput placeholder="you are able to comment here" style={styleMsg.input} />
                    <TouchableOpacity>
                        <Down color="#000" />
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styleMsg.row}>
                        <View style={styleMsg.headerText}>
                            <Text style={styleMsg.userNameText}>Martin Luther JR.</Text>
                            <Text style={styleMsg.time}>1 Minutes Ago</Text>
                        </View>
                        <View>
                            <Text style={styleMsg.msg}>
                                I have a dream that one day every valley shall be engulfed,
                                every hill shall be exalted and every mountain shall be made low,
                                the rough places will be made plains
                        </Text>
                        </View>
                    </View>
                    <View style={styleMsg.row}>
                        <View style={styleMsg.headerText}>
                            <Text style={styleMsg.userNameText}>Martin Luther JR.</Text>
                            <Text style={styleMsg.time}>1 Minutes Ago</Text>
                        </View>
                        <View>
                            <Text style={styleMsg.msg}>
                                I have a dream that one day every valley shall be engulfed,
                                every hill shall be exalted and every mountain shall be made low,
                                the rough places will be made plains
                        </Text>
                        </View>
                    </View>
                    <View style={styleMsg.row}>
                        <View style={styleMsg.headerText}>
                            <Text style={styleMsg.userNameText}>Martin Luther JR.</Text>
                            <Text style={styleMsg.time}>1 Minutes Ago</Text>
                        </View>
                        <View>
                            <Text style={styleMsg.msg}>
                                I have a dream that one day every valley shall be engulfed,
                                every hill shall be exalted and every mountain shall be made low,
                                the rough places will be made plains
                        </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styleMsg = StyleSheet.create({
    input: {
        borderColor: '#a5a5a5',
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        borderTopLeftRadius: 0,
        textAlign: 'center',
        color: '#000',
        width: '80%'
    },
    row: {
        width: '96%',
        left: '2%',
        height: 100,
        backgroundColor: '#E0E0E0',
        padding: 10,
        borderRadius: 20,
        borderColor: '#a0a0a0',
        marginBottom: 10
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '96%',
        left: '4%',
    },
    userNameText: {
        fontFamily: 'Raleway',
        fontSize: 18,
        color: '#000',
    },
    time: {
        fontSize: 12
    },
    msg: {
        padding: 10,
    }

})

export default comment
