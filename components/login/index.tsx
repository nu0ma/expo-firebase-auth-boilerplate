import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Button } from 'native-base';
import firebase from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../reducer/actions';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    try {
      const { user } = await firebase.auth().signInAnonymously();
      //dispatch
      dispatch(setUser(user));
      console.log('user login');
      navigation.navigate('Home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Button onPress={handleSubmit}>
        <Text>Login</Text>
      </Button>
    </Container>
  );
};

export default Login;
