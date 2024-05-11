import { View, Text, Pressable, StatusBar, StyleSheet } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../constant/theme/theme'
import ThemeButton from '../global/component/ThemeButton'

const Home = () => {
  const {theme, toggleTheme} =useContext(ThemeContext)

  useEffect(()=>{
  console.log(theme.theme)

  }, [theme])

  return (
    <View className="flex-1" style={{backgroundColor: theme.backgroundColor}}>
      <StatusBar barStyle={`${theme.reverseTheme}-content`} backgroundColor={theme.backgroundColor} />
      <View className="w-100 h-50">
        <ThemeButton />
      </View>
      <View>
        <Text style={{color: theme.textColor}}>Open up App.js to start working on your app!</Text>
      </View>
    </View>
  )
}

export default Home
