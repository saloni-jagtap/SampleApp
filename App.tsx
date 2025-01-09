/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  // State to keep track of the counter
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Function to decrement the counter
  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.counter}>Counter: {counter}</Text>
      <Button title="Increment Counter" onPress={incrementCounter} />
      <Button title="Decrement Counter" onPress={decrementCounter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default App;
