import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Button } from 'native-base';
import firebase from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from '../../reducer/actions';

const Logout = ({ navigation }) => {
  // const dispatch = useDispatch();
  const onClick = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('error'));
    console.log('logout');
    navigation.navigate('Signin');
  };

  return (
    <Container>
      <Button onPress={onClick}>
        <Text>Logout</Text>
      </Button>
    </Container>
  );
};

export default Logout;
