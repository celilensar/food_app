import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'

export default function Home({navigation}) {
const YELP_API_KEY= "N-BmeaatheV4AaFUzNvpe0KihPS185GZq7UsFlQ66j_cI1TuCBH0ieA5Z2GiwjcjEMozxTCBRgE19qblWlc6HArLuiu8RgwNbfo4hJM5mwuTIa43NFcloxQ_LDR-ZHYx"
const [restaurantData,setRestaurantData] = useState(localRestaurants)
const [city,setCity]=useState('Istanbul')
const [activeTab, setActiveTab] = useState("Delivery")

const getRestaurantsFromYelp= () =>{
  const yelpUrl=`https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
  
  const apiOptions = {
    headers: {
      Authorization : `bearer ${YELP_API_KEY}`,
    }
  }
  return fetch(yelpUrl,apiOptions)
  .then((res)=> res.json())
  .then((json) => setRestaurantData(
  json.businesses
  )
  )
}

useEffect(()=>{ 
  getRestaurantsFromYelp()
},[city, activeTab])

  

  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex:1}}>
      <View style={{backgroundColor: "white", padding:15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItems restaurantData={restaurantData} navigation= {navigation} />
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs/>
    </SafeAreaView>
  )
}