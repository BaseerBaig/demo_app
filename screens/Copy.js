import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Copy = () => {
const Students = [
    
        {
            id: 1,
            name: 'Baseer',
            place: 'cmy',
          },
          {
            id: 2,
            name: 'Abdul',
            place: 'Banglore',
          },
      
          {
            id: 3,
            name: 'Ashok',
            place: 'hydrabad',
          },
    
]

const a = Students.filter((item)=>item.name === 'Baseer')

console.log('Printing baseer data',a)

const ShowStudentsData = ({item}) =>{
    return(

<View>
    <Text>{item.name}</Text>
    <Text> {item.place}</Text>
</View>

    )
}
    
  return (

    <View>
        
      <Text>copy</Text>
<FlatList 
data={Students}
renderItem={ShowStudentsData}
keyExtractor={(item) =>{item.id}}

/>

    </View>
  )
}

export default Copy