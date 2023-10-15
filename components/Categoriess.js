import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categoriess() {
  return (
    <ScrollView contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
        }}
        horizontal showsHorizontalScrollIndicator={false}>
        <CategoryCard imgUrl='https://links.papareact.com/wru' title ='Testing'/>
        <CategoryCard imgUrl='https://links.papareact.com/wru' title ='Testing'/>
        <CategoryCard imgUrl='https://links.papareact.com/wru' title ='Testing'/>
    </ScrollView>
  )
}