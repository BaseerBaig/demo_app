import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ChildComponent from './ChildComponent';

const HomeScreen = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const gotoDetails = () => {
    navigation.navigate('Details', {name: 'Baseer', mobile: '9741790101'});
  };

  return (
    <View>
      <Text>SignUp Page</Text>
      <TextInput
        value={username}
        onChangeText={name => {
          setUserName(name);
        }}
        placeholder="Enter your User name"
      />

      <TextInput
        value={password}
        onChangeText={password => {
          setPassword(password);
        }}
        placeholder="Enter your Password"
      />

      <Button title="Submit" onPress={gotoDetails} />

      <ChildComponent name='baseer'/>

    </View>
  );
};

export default HomeScreen;
