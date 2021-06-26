import React, { Component } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import buyCoinTab from '../../screen/detailscreen/buyCoin'
import technical from '../../screen/detailscreen/technical'
import statistics from '../../screen/detailscreen/statistics'
import comment from '../../screen/detailscreen/comment'


const Tab = createMaterialTopTabNavigator();
const HERO_HEIGHT = 120
const BOX_HEIGHT = 243

class DetailTabs extends Component {
    state = {
        hero_height: new Animated.Value(HERO_HEIGHT),
        box_height: new Animated.Value(BOX_HEIGHT)
    }

    render() {
        return (
            <Animated.View style={[styles.tabsContainer, { top: this.state.hero_height, height: this.state.box_height }]}>
                <Tab.Navigator tabBarOptions={{
                    style: { backgroundColor: '#F8F8F8', borderTopLeftRadius: 25 },
                    scrollEnabled: true,
                    activeTintColor: '#fff',
                    inactiveTintColor: '#000',
                    indicatorStyle: { backgroundColor: '#E432C1', borderRadius: 20, marginBottom: 8, height: 30, width: 100, marginLeft: 10 },
                    tabStyle: { width: 120 }
                }}>
                    <Tab.Screen name="Techincal" component={technical} listeners={{
                        focus: () => {
                            Animated.timing(this.state.hero_height, {
                                toValue: 120,
                                duration: 500,
                                useNativeDriver: false,
                            }).start()
                        }
                    }} />
                    <Tab.Screen name="statistics" component={statistics} listeners={{
                        focus: () => {
                            Animated.timing(this.state.hero_height, {
                                toValue: -150,
                                duration: 500,
                                useNativeDriver: false,
                            }).start()
                            Animated.timing(this.state.box_height, {
                                toValue: 518,
                                duration: 500,
                                useNativeDriver: false
                            }).start()
                        }
                    }} /> 
                    <Tab.Screen name="Comments" component={comment} listeners={{
                        focus: () => {
                            Animated.timing(this.state.hero_height, {
                                toValue: -150,
                                duration: 500,
                                useNativeDriver: false,
                            }).start()
                            Animated.timing(this.state.box_height, {
                                toValue: 518,
                                duration: 500,
                                useNativeDriver: false
                            }).start()
                        }
                    }} />
                    <Tab.Screen name="Buy Coin" component={buyCoinTab} listeners={{
                        focus: () => {
                            Animated.timing(this.state.hero_height, {
                                toValue: 120,
                                duration: 500,
                                useNativeDriver: false,
                            }).start()
                        }
                    }} />



                </Tab.Navigator>
            </Animated.View>
        )
    }
}
const styles = StyleSheet.create({
    tabsContainer: {
        top: 120,
        height: 243,
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderTopLeftRadius: 50,
    },
    headerBoxRow: {
        width: '100%',
        height: 41,
        top: 51,
        flexDirection: 'row',
    },
})

export default DetailTabs
