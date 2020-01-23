import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Button,
  Form,
  Input,
  Item,
  Card,
  Text,
  CardItem,
  Body
} from 'native-base';
import firebase from '../../firebase';
import { setUser, clearUser } from '../../reducer/actions';
import { useDispatch, useSelector } from 'react-redux';

type State = {
  user: firebase.User;
};

const Login = ({ navigation }) => {
  const currentUser = useSelector((state: State): firebase.User => state.user);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(setUser(user));
        console.log('currentUser :', currentUser);
        navigation.navigate('App');
      } else {
        dispatch(clearUser());
        navigation.navigate('Auth');
      }
    });
  }, []);

  const isFormValid = () => {
    return email && password;
  };

  const handleSubmit = async () => {
    if (isFormValid()) {
      try {
        const { user } = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        console.log(user);
        dispatch(setUser(user));
        navigation.navigate('App');
      } catch (err) {
        console.log(err.message);
        setError(true);
        setErrorMessage(err.message);
      }
    }
  };

  // const handleError = () => {
  //   if (error === '') {
  //     return <></>;
  //   } else {
  //     return (
  //       <Card>
  //         <Text>{error}</Text>
  //       </Card>
  //     );
  //   }
  // };

  return (
    <Container>
      <Form>
        <Item error={error}>
          <Input
            value={email}
            placeholder="E-mail"
            onChangeText={email => setEmail(email)}
            autoCapitalize="none"
          />
        </Item>
        <Item error={error}>
          <Input
            autoCapitalize="none"
            value={password}
            placeholder="Password"
            onChangeText={password => setPassword(password)}
          />
        </Item>
      </Form>
      <Button info block onPress={handleSubmit} style={styles.button}>
        <Text>Login</Text>
      </Button>

      <Text>{errorMessage}</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: { margin: 10 }
});

export default Login;
