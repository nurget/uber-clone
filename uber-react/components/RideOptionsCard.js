import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Icon, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
    },
    {
        id: "Uber-XL-456",
        title: "UberXL",
        multiplier: 1.2,
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
    },
    {
        id: "Uber-LUX-789",
        title: "UberLUX",
        multiplier: 1.75,
        image:
            "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png",
    },
];

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);

  return (
    <View style={tw`bg-white flex-1`}>
        <View>
            <TouchableOpacity
            onPress={() => navigation.navigate("NavigateCard")}
            style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
            >
            <Icon name='chevron-left' type='fontawesome' />
            </TouchableOpacity>
            <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
        </View>

        <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item: { id, title, multiplier, image}, item }) => (
                <TouchableOpacity
                    onPress={() => setSelected(item)} 
                    style={tw`flex-row justify-between items-center px-10 ${
                        id === selected?.id && "bg-gray-200"
                    }`}
                >
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: "contain",
                        }}
                        source={{ uri: image }}
                    />
                    <View style={tw`-ml-6`}>
                        <Text style={tw`text-xl font-semibold`}>{title}</Text>
                        <Text>Travel Time...</Text>
                    </View>
                    <Text style={tw`text-xl`}>$99</Text>
                </TouchableOpacity>
            )}
        />

        <View>
            <TouchableOpacity 
                disabled={!selected} 
                style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
            >
                <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default RideOptionsCard;

const styles = StyleSheet.create({})