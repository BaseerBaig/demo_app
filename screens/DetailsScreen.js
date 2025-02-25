import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useNavigation,useRoute } from '@react-navigation/native'

const DetailsScreen = () => {

  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
   const {name,mobile} = route.params;

  const gotoHome = () =>{
    navigation.navigate('Home');
  }
  return (
    <View>
      <Text>Login Page</Text>

      <TextInput 
      value={username}
      onChangeText={(name)=>{setUserName(name)}}
      placeholder='Enter your UserName'
      />

      <TextInput 
      value= {password}
      onChangeText={(Text)=>{setPassword(Text)}}
      placeholder='Enter your Password'
      />


      <Button 
      title='Submit'
      onPress={gotoHome}
      />
      <Text> my name is {name} and phone no is {mobile} </Text>
    </View>
  )
}

export default DetailsScreen