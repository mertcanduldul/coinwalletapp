import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, FlatList, TouchableOpacity, RefreshControl } from 'react-native'

import { Down, User } from '../../component/icon/index'

class comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentText: ""
        }
    }
    render() {
        const DATA = [
            {
                "id": "0",
                "name": "Martin Luther JR.",
                "time": "1 Minutes Ago",
                "text": "I have a dream that one day every valley shall be engulfed, every hill shall be exalted and every mountain shall be made low,the rough places will be made plains"
            },
            {
                "id": "1",
                "name": "Martin Luther JR.",
                "time": "1 Minutes Ago",
                "text": "I have a dream that one day every valley shall be engulfed, every hill shall be exalted and every mountain shall be made low,the rough places will be made plains"
            },
        ]
        const Comment = ({ name, time, text }) => {
            return (
                <View style={styleMsg.row}>
                    <View style={styleMsg.headerText}>
                        <Text style={styleMsg.userNameText}>{name}</Text>
                        <Text style={styleMsg.time}>{time}</Text>
                    </View>
                    <View>
                        <Text style={styleMsg.msg}>{text}</Text>
                    </View>
                </View>
            )
        }
        const renderItem = ({ item }) => (
            <Comment name={item.name} time={item.time} text={item.text} />
        );
        const changeText = (text) => {
            this.setState({ commentText: text })
        }
        const addComment = () => {

            let value = this.state.commentText
            let name = "Donald Trump"
            let id = parseInt(DATA.length)
            let obj = { "id": id, "name": name, "text": value }
            DATA[DATA.length] = obj

        }
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <User color="#000" />
                    <TextInput onChangeText={(text) => changeText(text)} placeholder="you are able to comment here" style={styleMsg.input}>
                        {this.state.commentText}
                    </TextInput>
                    <TouchableOpacity onPress={() => addComment()}>
                        <Down color="#000" />
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        data={DATA}
                        extraData={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        refreshControl={
                            <RefreshControl
                                refreshing={false}
                                onRefresh={this.addComment}
                            />
                        }
                    />
                </View>

            </View >
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
        width: '80%',
        height: 40
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
