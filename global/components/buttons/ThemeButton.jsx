import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from 'themes/theme'
import { MaterialIcons } from '@expo/vector-icons';

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)


  return (
    <View>
      {theme.theme === 'light' ? (
        <TouchableOpacity  onPress={toggleTheme}>
          <View className="rounded-full bg-black w-10 h-10 flex items-center justify-center ">
            <MaterialIcons name="light-mode" size={24} color="white" />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity  onPress={toggleTheme}>
          <View className="rounded-full bg-white w-10 h-10 flex items-center justify-center ">
            <MaterialIcons name="dark-mode" size={24} color="black" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default ThemeButton