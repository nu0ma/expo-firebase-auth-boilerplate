import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);
