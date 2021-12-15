import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';

interface BackButtonProps {
  routeName: string
}

export const BackButton: React.FC<BackButtonProps> = ({ routeName }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
      <Image source={require('../../img/back.png')} />
      <Text style={styles.text}>{routeName}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  text: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold"
  }
});