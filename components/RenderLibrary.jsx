import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

export function RenderLibrary({ item }) {
  const [pressed, setPressed] = useState(false);
  const handlePress = () => {
    setPressed(!pressed);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{item.title}</Text>
      </Pressable>
      {pressed ? (
        <View style={styles.textContainer}>
          <Text style={styles.recomendacionesText}>{item.recomendaciones}</Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#64b5f6", // Azul brillante para los botones
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "100%",

    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5, // Sombra para Android
  },
  buttonText: {
    color: "#fff", // Texto blanco para contraste
    fontSize: 18,
    fontWeight: "bold",
  },
  textContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  recomendacionesText: {
    backgroundColor: "#fff",
  },
});
