import React from 'react';
import { Container, Button, Text } from 'native-base';
import firebase from '../../firebase';

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
