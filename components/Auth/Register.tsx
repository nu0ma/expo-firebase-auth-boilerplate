import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Button,
  Form,
  Item,
  Input,
  Content,
  Text
} from 'native-base';
import firebase from '../../firebase';
import { setUser } from '../../reducer/actions';
import { useDispatch, useSelector } from 'react-redux';
import { firebaseCreateUser } from '../../utils/firebaseUtils';

type State = {
  user: firebase.User;
};

const Register = ({ navigation }) => {
  const currentUser = useSelector((state: State): firebase.User => state.user);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isFormValid = () => {
    return email && password;
  };

  const handleSubmit = async () => {
    if (isFormValid()) {
      try {
        const { user } = await firebaseCreateUser(email, password);
        dispatch(setUser(user));
        navigation.navigate('App');
      } catch (err) {
        console.log(err.message);
        setError(true);
        setErrorMessage(err.message);
      }
    }
  };
  return (
    <Container>
      <Content>
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
        <Button block style={styles.button} onPress={handleSubmit}>
          <Text>Sign In</Text>
        </Button>
        <Button
          style={styles.button}
          info
          block
          onPress={() => navigation.navigate('Login')}
        >
          <Text>If you have account, Go to Login Page</Text>
        </Button>
        <Text>{errorMessage}</Text>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: { margin: 10 }
});

export default Register;
