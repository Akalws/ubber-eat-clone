import { View, Text, SafeAreaView} from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import { ScrollView } from 'react-native';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
import React, { useEffect } from 'react';

const YELP_API_KEY = "BUl1SYe49QRO5EpgsdmKbCyHGj5nq-PjglCtATcr0HH3vuduUKBFKbuenWAuuU14I0DZhgYmvCLAT0bfe02jMRUcQe_4nnwBdZE842AL76m9U7ylzwBIvTireB-LYnYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

  const getRestaurantsFromYelp = ()=> {
    
    const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Rexburg";
   

    const apiOptions={
      headers:{
        Authorization:`Bearer ${YELP_API_KEY}`, 
      }
    };
  
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json)=>setRestaurantData(json.businesses));
    
  };

        
  useEffect(()=>{getRestaurantsFromYelp();},[]);

  return (
    <SafeAreaView style={{backgroundColor:"#eee", flex:1 }}>
        <View style ={{backgroundColor:"#fff",padding:15}}>
      <HeaderTabs/>
      <SearchBar/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItems restaurantData ={restaurantData}/>
        </ScrollView>
    </SafeAreaView>
  )
};