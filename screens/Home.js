import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import tw from 'twrnc';

const Home = () => {
  return (
    <SafeAreaView>
      <Text style={tw`text-red-500 p-10`}>I'm the home screen</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  text: {
    color: "blue"
  }
})