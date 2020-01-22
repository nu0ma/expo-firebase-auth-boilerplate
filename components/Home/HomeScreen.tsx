import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Button } from 'native-base';

const HomeScreen = ({ navigation }) => {
  return (
    <Container style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        small
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here'
          });
        }}
      >
        <Text>Move</Text>
      </Button>
      <Button onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
  // button: {
  //   backgroundColor: 'blue',
  //   padding: 10,
  //   borderRadius: 5
  // }
});

export default HomeScreen;
