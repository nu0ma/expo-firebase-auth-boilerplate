import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Text } from 'native-base';
import firebase from '../../firebase';
import Form from '../Details/Form';
import { setUser, clearUser } from '../../reducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import Logout from '../Logout';

type State = {
  user: firebase.User;
};

const HomeScreen = ({ navigation }) => {
  const currentUser = useSelector((state: State): firebase.User => state.user);
  // const dispatch = useDispatch();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('error'));
    console.log('logout');
    navigation.navigate('Auth');
  };
  return (
    <Container style={styles.container}>
      <Text>WelCome</Text>
      <Button
        rounded
        info
        style={styles.button}
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here'
          });
        }}
      >
        <Text>Detail Page</Text>
      </Button>
      {/* <Text>{currentUser.uid}</Text>
      <Text>TEST</Text> */}
      <Button style={styles.button} onPress={logout}>
        <Text>Logout</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: 10
  }
});

export default HomeScreen;
