import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Text } from 'native-base';
import firebase from '../../firebase';
import { useSelector } from 'react-redux';
import { firebaseLogOut } from '../../utils/firebaseUtils';

type State = {
  user: firebase.User;
};

const HomeScreen = ({ navigation }) => {
  const currentUser = useSelector((state: State): firebase.User => state.user);

  const logout = () => {
    firebaseLogOut();
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
