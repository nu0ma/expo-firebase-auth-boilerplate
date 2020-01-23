import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home';
import Details from './components/Details/';
import { Provider } from 'react-redux';
import { store } from './reducer/reducer';
import AuthLoadingScreen from './components/Auth/Login';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const AppStack = createStackNavigator({
  Home: Home,
  Details: Details
});

const AuthStack = createStackNavigator({
  Register: Register,
  Login: Login
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
