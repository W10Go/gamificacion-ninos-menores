import { Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

export function EButton({ recomendation }) {
  return (
    <Link href={`/${recomendation.data}`}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Ventilación e iluminación</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#64b5f6", // Azul brillante para los botones
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
    width: "80%", // Ancho del 80% del contenedor
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
});
