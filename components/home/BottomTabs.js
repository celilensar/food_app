import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
export default function BottomTabs() {
  return (
    <View style={{
        flexDirection:"row",
        margin:8,
        marginHorizontal:20,
        justifyContent: "space-between",
    }}>
      <Icon  icon="home" text="Home"/>
      <Icon icon="search" text="Browse"/>
      <Icon icon="shopping-bag" text="Grocery"/>
      <Icon icon="receipt" text="Orders"/>
      <Icon icon="user" text="Account"/>
    </View>
  )
}

const Icon = (props) =>(
<TouchableOpacity >
<View >
<FontAwesome5 name={props.icon} size={24} style={{
    marginBottom:3,
    alignSelf: "center",
}}
/>
<Text style={{fontSize: 13}}>{props.text}</Text>
</View>
</TouchableOpacity>
)
    
