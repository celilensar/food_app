import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function SearchBar({cityHandler}) {
  return (
    <View style={{marginTop:15, flexDirection:"row"}}>
      <GooglePlacesAutocomplete
        query={{key: 'AIzaSyB14X6U48eAPrBD7tjSBXkPp1x-8SegK8g'}}
        onPress={(data, details= null) =>{
          console.log(data.description)
          const city = data.description.split(",")[0]
          cityHandler(city)
        }}
      placeholder='Search'
      styles={{

        textInput: {
            backgroundColor:"#eee",
            borderRadius:20,
            fontWeight: "700",
            marginTop:7,
            
        },
        textInputContainer: {
            backgroundColor:"#eee",
            borderRadius: 50,
            flexDirection:"row",
            alignItems:"center",
            

        }

      }}
      renderLeftButton={()=> (
        <View style={{marginLeft:10}}>
            <Entypo name="location-pin" size={24} color="black" />
        </View>
      )}

      renderRightButton={() => (
       <View style={{
        flexDirection:"row",
        marginRight:8,
        backgroundColor:"white",
        borderRadius:40,
        padding:10
       }}>

           <MaterialCommunityIcons name="clock-time-two" size={20} color="black" />
           <Text>Search</Text>
       </View>
      )}
      />
    </View>
  )
}