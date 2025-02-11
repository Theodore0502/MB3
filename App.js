import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
  const [bgColor, setBgColor] = useState("#FFFFFF");

  const colors = [
    { name: "GREEN", color: "green" },
    { name: "BLUE", color: "blue" },
    { name: "BROWN", color: "brown" },
    { name: "YELLOW", color: "yellow" },
    { name: "RED", color: "red" },
    { name: "BLACK", color: "black" },
  ];

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {colors.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, { backgroundColor: item.color }]}
          onPress={() => setBgColor(item.color)}
        >
          <Text style={styles.buttonText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;