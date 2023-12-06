import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';




export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];


export default function RestaurantItems( {navigation, ...props}) {
  
  

  return (
    <>
    {props.restaurantData.map((restaurant,index) => (
      
    <TouchableOpacity key={index} activeOpacity={0.9} style={{marginBottom:20}} onPress={
      () => navigation.navigate("RestaurantDetail", {
        name: restaurant.name,
        image: restaurant.image_url,
        price: restaurant.price,
        reviews: restaurant.review_count,
        rating: restaurant.rating,
        categories: restaurant.categories

      })
    }
    >

      <View  style={{backgroundColor: "white", padding:10, paddingBottom:15, marginTop:10, borderRadius:10}}>
        <RestaurantImage image={restaurant.image_url}  />
        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
      </View>
    </TouchableOpacity>

    ))}
</>
  )
}



const RestaurantImage= (props) => (



<>

    <Image source={{uri: props.image}}
    style={{width: "100%",  height: 180,
    borderRadius:6
    }} 
/>
<TouchableOpacity style={{position:"absolute", right:20, top:20}} >
<MaterialIcons name="favorite-border" size={25} color="white"/>
</TouchableOpacity>
</>
);

const RestaurantInfo = (props) => (
    <View style={{flexDirection:"row", justifyContent: "space-between", marginTop:10, alignItems:"center"}}>
        <View>
            <Text style={{fontSize:16, fontWeight:"600", marginHorizontal:5}}>{props.name}</Text>
            <Text style={{color:"gray", marginHorizontal:5, marginTop:7}}>30 · 45 min</Text>
        </View>

        <View style={{backgroundColor:'#eee', marginRight:10, borderRadius:50, padding:7, alignItems: "center",justifyContent:"center"}}>

            <Text>{props.rating}</Text>
        </View>

    </View>
)