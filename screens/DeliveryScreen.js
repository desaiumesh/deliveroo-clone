import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    return (
        <View className="bg-[#00CCBB] flex-1">
            <SafeAreaView className="mt-5 z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity className="bg-gray-100 rounded-full" onPress={() => navigation.navigate("Home")}>
                        <XMarkIcon size={30} color="#00CCBB"></XMarkIcon>
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>

                <View className="bg-white mx-5 my-2 p-6 rounded-md shadow-md z-50">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className=" text-lg text-gray-400">Estimated arrival</Text>
                            <Text className=" text-4xl font-bold">40-45 Minutes</Text>
                        </View>
                        <Image
                            className="h-20 w-20"
                            source={{ uri: "https://links.papareact.com/fls" }}
                        />
                    </View>
                    <Progress.Bar size={30} color='#00CCBB' indeterminate={true}></Progress.Bar>
                    <Text className="text-gray-500 mt-3">Your order at {restaurant.title} is being prepared</Text>
                </View>
            </SafeAreaView>
            <MapView provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                className="flex-1 -mt-10 z-0"
                mapType='mutedStandard'
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier='origin'
                    pinColor='#00CCBB'
                />
            </MapView>
            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-20">
                <Image
                    className="h-12 w-12 bg-gray-300 p-4 ml-5 rounded-full"
                    source={{ uri: "https://links.papareact.com/wru" }}

                />
                <View className="flex-1">
                    <Text className="text-lg">Abcd Efgh </Text>
                    <Text className="text-gray-400"> your rider</Text>
                </View>
                <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen;
