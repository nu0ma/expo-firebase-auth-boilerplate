import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home';
import Details from './components/Details/';
import Login from './components/login/Login';

const RootNavigator = createStackNavigator(
  {
    Home: Home,
    Details: Details,
    Login: Login
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
