import React from 'react';
import { Text, View } from 'react-native';
import { style } from '../style';

export const Success = () => (
  <View style={style.successContainer}>
    <Text style={style.firstText}>All done! Repository sent.</Text>
    <Text style={style.secondText}>COOL</Text>
  </View>
);