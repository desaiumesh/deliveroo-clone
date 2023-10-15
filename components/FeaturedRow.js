import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({ id, title, description }) {
    return (
        <View>
            <View className="flex-row mt-4 justify-between items-center mx-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB"></ArrowRightIcon>
            </View>
            <Text className="px-4 text-gray-500 text-xs">{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    padding: 15
                }}
                className="pt-4"
                showsHorizontalScrollIndicator={false}
            >

                {/**Restaurent cards */}
                <RestaurantCard
                    id={123}
                    imgUrl='https://links.papareact.com/gn7'
                    title="Japenease"
                    rating={4.1}
                    genre="Japenease"
                    address="123 mains street"
                    short_description="test"
                    dishes={[]}
                    long={123}
                    lat={234} />

                <RestaurantCard
                    id={123}
                    imgUrl='https://links.papareact.com/gn7'
                    title="Japenease"
                    rating={4.1}
                    genre="Japenease"
                    address="123 mains street"
                    short_description="test"
                    dishes={[]}
                    long={123}
                    lat={234} />

                <RestaurantCard
                    id={123}
                    imgUrl='https://links.papareact.com/gn7'
                    title="Japenease"
                    rating={4.1}
                    genre="Japenease"
                    address="123 mains street"
                    short_description="test"
                    dishes={[]}
                    long={123}
                    lat={234} />
            </ScrollView>
        </View>
    )
}