import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";

export default function AddScreen({ navigation }) {
  const [text, onChangeText] = useState("");
  return (
    <View style={styles.container}>
      <Text>Things to do: </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      
      <Button
        
        title="Add"
        onPress={() => {
          const todo = { text };
          navigation.navigate("Home", { todo });
        }}
      />
      <Button
        onPress={() => navigation.goBack()}
        title="Dismiss"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 160,
    margin: 22,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },



  

 
});
