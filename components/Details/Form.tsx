import React, { useState } from 'react';
import { Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Input } from 'native-base';
import firebase from '../../firebase';

const Form = () => {
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    const db = await firebase.firestore();
    try {
      db.collection('texts')
        //TODO:docをユーザーに
        .doc('test')
        .set({
          text: text
        });
      console.log('data is submitted');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
        value={text}
        onChangeText={text => setText(text)}
        onSubmitEditing={handleSubmit}
      />
      <Text>{text}</Text>
    </Container>
  );
};

export default Form;
