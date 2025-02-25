import { View, Text, Button, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const APIScreen = () => {

  // 1st, assign the APi link to a const variable
  const dummy_API = 'https://jsonplaceholder.typicode.com/posts';

  const [apiData, setApiData] = useState([]);
  const [apiError, setApiError] =useState('');


  //2nd, creating a arrow function to call the axios
  const getApiData = ()=>{
    axios.get(dummy_API)
    .then((response)=>{
      console.log(response.data)
      setApiData(response.data) // stores api data into state
    })
    .catch((error)=>{
      console.log('unable to fetch data', error)
      setApiError(error)
    })

  }


  // 3rd, used useEffect to the arrow function created

  useEffect(()=>{

    getApiData()

  }, [])


  const RenderApiData = ({item})=>{
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
      </View>
    )
  }


  return (
    <View>
      <Text>APIScreen</Text>

      <FlatList 
      data={apiData}
      renderItem={RenderApiData}
      keyExtractor={(item)=> item.id}
      />
    </View>
  )
}

export default APIScreen