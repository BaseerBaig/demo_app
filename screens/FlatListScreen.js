import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'


const Students = [
    {
        id:1,
        name:'Baseer',
        email:'abc@gmail.com',
        place:'bangalore',
        mobile:'9898989898'
    },
    {
        id:2,
        name:'Hameed',
        email:'Hameed@gmail.com',
        place:'pune',
        mobile:'9898989898'
    },
    {
        id:3,
        name:'Ashok',
        email:'jahan@gmail.com',
        place:'Hyderabad',
        mobile:'9898989898'
    },
    
]

const FlatListScreen = () => {

    const renderStudentData=({item})=>{
        return(
        <View style={{width:300, height:100, borderWidth:1, gap:5, justifyContent:'center', alignItems:'center', marginBottom:20}}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.place}</Text>
        </View>
        )
    }

  return (
    <View style={{flex:1}}>
      <Text>FlatList Demo</Text>


      <FlatList
      data={Students}
      renderItem={renderStudentData}
      keyExtractor={(item)=>item.id}
      />
      
    </View>
  )
}

export default FlatListScreen