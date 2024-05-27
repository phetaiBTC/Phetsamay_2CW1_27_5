import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const setInitialCount = () => {
    const initialCount = parseInt(inputValue, 10);
    if (!isNaN(initialCount)) {
      setCount(initialCount);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter initial count"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Button title="Set Initial Count" onPress={setInitialCount} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  counterText: {
    fontSize: 30,
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: 200,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    gap: 10,
  },
});

export default Counter;