import React from 'react';
import { View ,Image,Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurents = [
{
  name:"Kritunga Restaurant",
  image_url:"https://lh5.googleusercontent.com/p/AF1QipMav2yK5nqnBPUVf2M94wCmn0NY3VvvglsnMv3g=w1080-k-no",
  price:"$$",
  reviews:1244,
  rating:4.5,
},
{
  name:"Benihena",
  image_url:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-829462,resizemode-1,msid-82666514/industry/services/hotels-/-restaurants/staggered-lockdowns-start-to-bite-battered-restaurants.jpg",
  price:"$$",
  reviews:1544,
  rating:4.8,
},
{
  name:"Barbique-Nation",
  image_url:"https://imgmedia.lbb.in/media/2019/12/5e098fae2335a92f5b3536f3_1577684910704.jpg",
  price:"$$",
  reviews:1644,
  rating:4.7,
},
{
  name:"Swagath-Grand",
  image_url:"https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2021/07/pune-restaurants.jpg?fit=1000%2C667&ssl=1",
  price:"$$",
  reviews:1021,
  rating:4.1,
},
];

export default function RestaurentItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
      {props.restaurentData.map((restaurent, index) => (
    <View key={index} style={{marginTop:10,padding:15,backgroundColor:"white"}}> 
        <RestaurentImage image={restaurent.image_url}/>
        <RestaurentInfo name={restaurent.name} rating={restaurent.rating}/>
    </View>
    ))}
    </TouchableOpacity>
  );
}

const RestaurentImage = (props) => (
    <>
    <Image 
    source={{uri:props.image, }}
    style={{width:"100%" ,height:180}}
    />
    <TouchableOpacity style={{position:"absolute",right:20,top:20}}>
        <MaterialCommunityIcons name='heart-outline' size={25} color="#fff"/>
    </TouchableOpacity>
    </>
);

const RestaurentInfo = (props) => (
    <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center",marginTop:10}}>
      <View>
    <Text style={{fontSize:15,fontWeight:"bold"}}>
    {props.name}
    </Text>
    <Text style={{fontSize:13,color:"grey"}}>
       30-45 - min 
    </Text>
    </View>
    <View style={{backgroundColor:"#eee",width:30,height:20,alignContent:"center",alignItems:'center',marginTop:-20,borderRadius:20}}>
    <Text>
    {props.rating}
    </Text>
    </View>
    </View>
)
