import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DetailsScreen = ({ navigation }) => {
  const itemId = navigation.getParam('itemId', 'NO-ID');
  const otherParam = navigation.getParam('otherParam', 'NO-ID');

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.push('Details', {
            itemId: (Math.random() * 100).toFixed(2)
          });
        }}
      >
        <Text>Go to Details ... again</Text>
      </TouchableOpacity>
      <Text>itemID:{JSON.stringify(itemId)}</Text>
      <Text>
        otherParam:
        {JSON.stringify(otherParam)}
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go Top" onPress={() => navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5
  }
});

export default DetailsScreen;
