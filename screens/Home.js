import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const Home = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image 
          style={styles.image}
          source={{
            url: "https://links.papareact.com/gzs"
        }}/>
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain" 
  }
})