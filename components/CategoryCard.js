import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CategoryCard({ imgUrl, title }) {
  return (
    <View>
      <Image
        source={{ uri: imgUrl }}
        className="h-20 w-20 rounded"
      />
      <Text>{title}</Text>
    </View>
  )
}