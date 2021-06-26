import * as React from 'react';
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import Market from './screen/market';
import Favorite from './screen/favorite';
import Profile from './screen/profile';
import News from './screen/news';

import SvgFavorite from './component/icon/Favorite';
import Svgİncrease from './component/icon/Increase';
import SvgNews from './component/icon/News';
import SvgUser from './component/icon/User';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Market') {
            return (
              <LinearGradient colors={focused ? ['#F21CC8', '#FD9FEB'] : ['#fff', '#fff']} style={styles.item}>
                <Svgİncrease color={focused ? "#fff" : "#000"} />
              </LinearGradient>
            );
          } else if (route.name === 'Favorite') {
            return (
              <LinearGradient colors={focused ? ['#F21CC8', '#FD9FEB'] : ['#fff', '#fff']} style={styles.item}>
                <SvgFavorite color={focused ? "#fff" : "#000"} />
              </LinearGradient>
            );
          } else if (route.name === 'News') {
            return (
              <LinearGradient colors={focused ? ['#F21CC8', '#FD9FEB'] : ['#fff', '#fff']} style={styles.item}>
                <SvgNews color={focused ? "#fff" : "#000"} />
              </LinearGradient>
            );
          } else if (route.name === 'Profile') {
            return (
              <LinearGradient colors={focused ? ['#F21CC8', '#FD9FEB'] : ['#fff', '#fff']} style={styles.item}>
                <SvgUser color={focused ? "#fff" : "#000"} />
              </LinearGradient>
            );
          }
        },
      })}
        tabBarOptions={{
          showLabel: false,
          style: {
            borderTopRightRadius: 30
          }
        }}
      >
        <Tab.Screen name="Market" component={Market} />
        <Tab.Screen name="Favorite" component={Favorite} />
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    width: 48,
    alignItems: 'center'
  },
})

export default App