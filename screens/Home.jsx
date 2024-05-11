import React, { useContext, useEffect, useState } from 'react'

import { View, StatusBar, SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native'

import { ThemeContext } from 'themes/theme'
import ThemeButton from 'buttons/ThemeButton'

import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'

const Home = () => {
  const { theme } = useContext(ThemeContext)
  const [showSearch, setShowSearch] = useState(false)
  const [locations, setLocations] = useState([1,2,3])

  const handleLocation = (loc)=>{
    console.log(loc)
  }

  return (
    <View className="flex-1 relative">
      <StatusBar barStyle={`${theme.reverseTheme}-content`} backgroundColor={theme.backgroundColor.main} />
      {theme.theme === 'light' ? (
        <View
          className="absolute w-full h-full"
          style={{ backgroundColor: theme.backgroundColor }}
        />
      ) : (
        <View
          className="absolute w-full h-full"
          style={{ backgroundColor: theme.backgroundColor().main }}
        />
      )}
      <SafeAreaView className="flex flex-1" >
        {/* Search bsection */}
        <View style={{ height: '7%' }} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={showSearch && { backgroundColor: theme.backgroundColor(0.2).secondary}}
          >
            {showSearch ? (
              <TextInput
                placeholder='Search City'
                placeholderTextColor={theme.primary.primary}
                className="pl-6 h-10 pb-1 flex-1 text-base text-white"
              />
            ) : null
            }
            <TouchableOpacity
              onPress={() => setShowSearch(!showSearch)}
              style={showSearch ? { backgroundColor: theme.backgroundColor().main, opacity: 3 } : { backgroundColor: theme.backgroundColor(0.3).secondary}}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassIcon size="25" color={theme.primary.primary} />

            </TouchableOpacity>
          </View>
          {
            (locations.length>0 && showSearch) ? (
              <View className="absolute w-full top-16 rounded-3xl" style={{backgroundColor: theme.backgroundColor(0.2).secondary}}>
                {
                  locations.map((loc, index) => {
                    let showBorder = index + 1 != locations.length
                    let borderClass = showBorder ? 'border-b-2 border-b-gray-400' : ''
                    console.log(borderClass)
                    return (
                      <TouchableOpacity 
                        onPress={()=> handleLocation(loc)}
                        key={index}
                        className={"flex-row items-center border-0 p-3 px-4 mb-1 "+borderClass}
                      >
                        <MapPinIcon size="20" color="gray" />
                        <Text className="text-lg ml-2" style={{color: theme.textColor}}>London, United Kingdom</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            ) : null
          }
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Home
