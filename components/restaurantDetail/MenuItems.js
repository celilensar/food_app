import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch } from 'react-redux'
const foods = [ 
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
  },
  {
    title: "Tandoori Chicken",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$17.50",
    image: "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
  },
  {
    title: "Chilaquiles",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image: "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
  }
]

const styles = StyleSheet.create({
  menuItemStyle:{ 
  flexDirection : 'row',
  justifyContent: "space-between",
  margin: 20,
  paddingRight:30
  },
  titleStyle : {
    fontSize: 19,
    fontWeight: "600",
    marginBottom: 5
  }
})

export default function MenuItems({restaurantName}) {

const dispatch = useDispatch();

const selectItem = (item, checkBoxValue) =>
dispatch({
  type: "ADD_TO_CART",
  payload: {...item, 
  restaurantName : restaurantName,
  checkBoxValue: checkBoxValue}
})

  return (
    <>
  <ScrollView>
    {foods.map((food,index) => (
    <View key={index}>

    <View style={styles.menuItemStyle}>
      <BouncyCheckbox iconStyle={{ borderRadius:1, borderColor:"#eeee" }}
      fillColor= "green" 
      onPress={(checkBoxValue)=> selectItem(food, checkBoxValue)}
     
      />
      <FoodInfo food={food} />
      <FoodImage food={food}/>
      <Divider width={0.5}/>
    </View>
    <Divider width={0.5} style={{marginHorizontal:30}}/>
    </View>
    

    ))}

  </ScrollView>
</>
  )
}


const FoodInfo = ( props ) => (
  <View style={{width:200}}>
    <Text style={styles.titleStyle}>{props.food.title} </Text>
    <Text style={{fontSize:14}}> {props.food.description} </Text>
    <Text style={{fontWeight: 500, marginTop:5 }}> {props.food.price} </Text>
  </View>
)

const FoodImage= (props) => (
  <View>
    <Image source={{ uri : props.food.image}} 
    style={{ width: 90, height:90,borderRadius: 8, marginRight:20}}/>
  </View>
)