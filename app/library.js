import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable, Platform } from "react-native";

export default function Library() {
  const encyclopedia = require("../assets/data/data.json");
  const title = encyclopedia.titulo;
  const data = encyclopedia.data;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {data.map((element) => {
        return (
          <Link asChild href={"/"}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>{element.title}</Text>
            </Pressable>
          </Link>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centrar en el eje vertical
    alignItems: "center", // Centrar en el eje horizontal
    backgroundColor: Platform.OS === "web" ? "#e3f2fd" : "#bbdefb", // Fondo azul claro
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#0d47a1", // Azul oscuro para contraste
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
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
