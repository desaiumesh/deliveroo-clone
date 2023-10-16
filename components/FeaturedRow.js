import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import client from '../sanity'

const FeaturedRow = ({ id, title, description }) => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {

        client.fetch(`
        *[_type=="featured" && _id == $id]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
                type ->{
                 name
                }
            }
          }[0]
          `, { id: id })
            .then(data => { setRestaurants(data?.restaurants) });

    }, [id]);

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

                {restaurants?.map(restaurants => (<RestaurantCard
                    key={restaurants._id}
                    id={restaurants._id}
                    imgUrl={restaurants.image}
                    title={restaurants.name}
                    rating={restaurants.rating}
                    genre={restaurants.type?.name}
                    address={restaurants.address}
                    short_description={restaurants.short_description}
                    dishes={restaurants.dishes}
                    long={restaurants.long}
                    lat={restaurants.lat} />))}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow;