import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View>
          <Image
          style={{
              width: 120, 
              height: 120, 
              resizeMode: 'contain',
          }}
            source={{
                uri: "https://brandlogos.net/wp-content/uploads/2021/12/uber-brandlogo.net_.png",
            }}
          />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});