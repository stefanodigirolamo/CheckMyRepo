import React, { useState } from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getUserName } from '../../redux/userSlice/userSlice';
import { BackButton } from '../components/BackButton';
import { style } from '../style';

export const User = ({ navigation }) => {
  const [userName, setUserName] = useState<string>(null);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(getUserName(userName))
    navigation.navigate('Home')
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <BackButton routeName="USER" />
        <TextInput
          style={style.input}
          onChangeText={setUserName}
          value={userName}
          placeholder="Type your github username"
          placeholderTextColor="#C8C6C4"
        />
        <TouchableOpacity
          onPress={() => handleSubmit()}>
          <Text style={style.buttonLabel}>DONE</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};