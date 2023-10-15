import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'
import Categoriess from '../components/Categoriess'


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {

    navigation.setOptions({
      headerShown: false
    });

  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">

      {/**Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-3">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="h-7 w-7 bg-gray-300 p4 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-xs text-gray-400 font-bold">Deliver now!</Text>
          <Text className="text-xl font-bold">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB"></ChevronDownIcon>
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB"></UserIcon>
      </View>

      {/** Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder='Restaurents and Cuisines' keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB"></AdjustmentsVerticalIcon>
      </View>

      {/**Body */}
      <ScrollView className="bg-gray-100">
        {/**Categories */}
        <Categoriess></Categoriess>

        {/**Featured rows*/}


      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen;