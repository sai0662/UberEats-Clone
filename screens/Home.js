import React from 'react';
import {SafeAreaView, ScrollView, Text, View } from 'react-native';
import RestaurentItems, { localRestaurents } from '../components/RestaurentItems';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import BottomTabs from '../components/BottomTabs';
import { Divider } from 'react-native-elements/dist/divider/Divider';

const YELP_API_KEY = ""

export default function Home() {
  const [restaurentData,setRestaurentData ] = React.useState(localRestaurents);
  return (
    <SafeAreaView style={{backgroundColor:"#eee",flex: 1}}> 
    <View style={{backgroundColor:"white",padding:15 }}> 
      <HeaderTabs />
      <SearchBar />
     
      </View>
      <ScrollView showsVerticalScrollIndicator={false}> 
      <RestaurentItems restaurentData={restaurentData} />
      
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs />
    </SafeAreaView>
  );
}