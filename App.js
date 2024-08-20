import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Main } from "./components/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! now I'm here 👍</Text>
      <StatusBar style="auto" />
      <Main />
      <Button title="Pulsa aqui" onPress={() => alert("hola")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555",
    alignItems: "center",
    justifyContent: "center",
  },
});
