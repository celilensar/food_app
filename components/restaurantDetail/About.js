import { View, Text, Image } from 'react-native'
import React from 'react'

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image: "https://media-cdn.tripadvisor.com/media/photo-s/1c/2f/33/2d/healthy-bowl-frische.jpg",
  price : "$$",
  reviews: "1502",
  rating : 4.5,
  categories: [{title: "Thai"}, {title: "Comfort Food"} ]

}



export default function About(props) { 

const {name, image, price , reviews , rating, categories} = props.route.params
const formattedCategories= categories.map((cat) => cat.title).join(" · ");
const description= `${formattedCategories} ${price ? " · " + price : " "} · 💳 · ${rating} · ⭐ (${reviews})`

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name}/>
      <RestaurantDescription description={description}/>
    </View>
  )
}

const RestaurantImage= (props) => (
    <Image source={{uri: props.image}} style={{ width:"100%", height:180}}/>

)

const RestaurantName= (props) =>(
    <Text style={{fontSize:20, fontWeight:"600", marginHorizontal:10, marginTop:10}}>{props.name}</Text>
)

const RestaurantDescription = (props) => (
    <Text style={{
        marginTop:10,
        marginHorizontal:10,
        // color: "gray",
        fontWeight:"500"
        
    }}>{props.description}</Text>
)