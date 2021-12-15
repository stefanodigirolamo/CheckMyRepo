import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './src/routes/Home';
import {User} from './src/routes/User';
import {Repo} from './src/routes/Repo';
import {Provider} from 'react-redux';
import store from './redux/store';
import {Success} from './src/routes/Success';

const Stack = createStackNavigator();

const Router = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen name="User" component={User} options={{headerShown: false}} />
    <Stack.Screen name="Repo" component={Repo} options={{headerShown: false}} />
    <Stack.Screen name="Success" component={Success} options={{headerShown: false}} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
