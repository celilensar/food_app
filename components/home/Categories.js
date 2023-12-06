import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'


const items = [
    {
        image: require("../../assets/images/shopping-bag.png"),
        text: "Pick-up"
    },
    {
        image: require("../../assets/images/soft-drink.png"),
        text: "Soft Drinks"
    },
    {
        image: require("../../assets/images/bread.png"),
        text: "Bakery Items"
    },
    {
        image: require("../../assets/images/fast-food.png"),
        text: "Fast Foods"
    },
    {
        image: require("../../assets/images/deals.png"),
        text: "Deals"
    },
    {
        image: require("../../assets/images/coffee.png"),
        text: "Coffee & Tea"
    },
    {
        image: require("../../assets/images/desserts.png"),
        text: "Desserts"
    },
]

export default function Categories() {
  return (
    <View style={{backgroundColor:"#fff"}}>

    <ScrollView horizontal style={{flexDirection:"row"}}>

    {items.map((item,index)=> (

      <View key={index} style={{padding:8, marginRight:10,alignItems:"center"}}>
      <Image  source={ item.image}
      style={{
        width: 50,
        height: 40,
        resizeMode: "contain",
        alignItems:"center",
        
      }}/>
      <Text style={{fontSize:13, marginTop:3, fontWeight:"700"}}>{item.text}</Text>
      </View>
      ))}
    </ScrollView>
    </View>
  )
}