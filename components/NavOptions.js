import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'twrnc';

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen"
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EastScreen"
  }
]

const NavOptions = () => {
  const navigation = useNavigation()
  return (
    <FlatList data={data} horizontal keyExtractor={item => item.id} renderItem={({item}) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2`} onPress={() => navigation.navigate(item.screen)}>
          <View>
            <Image style={styles.itemImage} source={{url: item.image}} />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name='arrowright' color="white" type='antdesign'/>
          </View>
        </TouchableOpacity>
    )}/>
  )
}

export default NavOptions

const styles = StyleSheet.create({
  itemImage: {
    width: 120,
    height: 120,
    resizeMode: "contain"
  }
})