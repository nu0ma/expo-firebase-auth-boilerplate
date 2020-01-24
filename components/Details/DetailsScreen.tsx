import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Container, Button } from 'native-base';

const DetailsScreen = ({ navigation }) => {
  const itemId = navigation.getParam('itemId', 'NO-ID');
  const otherParam = navigation.getParam('otherParam', 'NO-ID');

  return (
    <Container style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        info
        style={styles.button}
        onPress={() => {
          navigation.push('Details', {
            itemId: (Math.random() * 100).toFixed(2)
          });
        }}
      >
        <Text>Change id</Text>
      </Button>
      <Text>itemID:{JSON.stringify(itemId)}</Text>
      <Text>
        otherParam:
        {JSON.stringify(otherParam)}
      </Text>
      <Button info style={styles.button} onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </Button>
      <Button info style={styles.button} onPress={() => navigation.popToTop()}>
        <Text>Top Page</Text>
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

export default DetailsScreen;
