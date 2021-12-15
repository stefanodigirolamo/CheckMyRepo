import React, { useMemo, useState } from 'react';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNetInfo } from '@react-native-community/netinfo';
import {
  handleCheckRepo,
  handleContainerBackground,
  handleError,
  handleSendUserInfo,
} from '../utils/utils';
import { style } from '../style';

export const Home = ({ navigation }) => {
  const { name, repository } = useSelector((state: RootState) => state);
  const [isRepoExsist, setIsRepoExsist] = useState<boolean>();
  const [isConnected, setIsConnected] = useState<boolean>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const netInfo = useNetInfo();

  const data = `sender: Stefano Di Girolamo, https://github.com/${name}/${repository}`;

  useEffect(() => {
    setIsConnected(netInfo.isConnected);
  }, []);

  useEffect(() => {
    if (isRepoExsist === true) {
      navigation.navigate('Success');
      handleSendUserInfo(data)
    }
  }, [isRepoExsist]);

  const containerBackground = useMemo(() => {
    return handleContainerBackground(isRepoExsist);
  }, [isRepoExsist]);

  const handleErrorMessage = useMemo(() => {
    return handleError(isRepoExsist, isConnected, setErrorMessage);
  }, [isRepoExsist, isConnected]);

  const handleSubmit = () => {
    handleErrorMessage;
    handleCheckRepo(name, repository, setIsRepoExsist);
  };

  return (
    <View style={[style.homeContainer, { backgroundColor: containerBackground }]}>
      <View>
        <Text style={style.firstTitle}>Set the repository address</Text>
        <Text style={style.secondTitle}>github.com</Text>
        <View style={style.routesContainer}>
          <Text
            style={style.routeText}
            onPress={() => navigation.navigate('User')}>
            /{!name ? 'user' : name}
          </Text>
          <Text
            style={style.routeText}
            onPress={() => navigation.navigate('Repo')}>
            /{!repository ? 'repo' : repository}
          </Text>
        </View>
        <Text style={style.errorMessage}>{errorMessage}</Text>
      </View>
      <TouchableOpacity onPress={() => handleSubmit()}>
        <Text style={style.buttonLabel}>CHECK</Text>
      </TouchableOpacity>
    </View>
  );
};
