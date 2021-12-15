import React, { useState } from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getUserRepo } from '../../redux/userSlice/userSlice';
import { BackButton } from '../components/BackButton';
import { style } from '../style';

export const Repo = ({ navigation }) => {
  const [repoName, setRepoName] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(getUserRepo(repoName))
    navigation.navigate('Home')
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <BackButton routeName="REPOSITORY" />
        <TextInput
          style={style.input}
          onChangeText={setRepoName}
          value={repoName}
          placeholder="Type your repository name"
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