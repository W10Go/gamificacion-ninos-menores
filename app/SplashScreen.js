// SplashScreen.js
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useRouter } from "expo-router"; // Para navegar entre pantallas

export default function SplashScreen() {
  const router = useRouter();

  // Función que se llama al presionar el botón "Ingresar"
  const handleIngresar = () => {
    router.push("/index");  // Redirige a la pantalla principal (index.js)
  };

  return (
    <View style={styles.container}>
      {/* Carga la imagen desde una URL */}
      <Image
        source={{ uri: "https://www.example.com/path/to/your/logo.jpg" }}  // Sustituye esta URL con la de tu logo
        style={styles.logo}
      />
      <Text style={styles.title}>Nombre de la App</Text>

      {/* Botón "Ingresar" */}
      <Pressable style={styles.button} onPress={handleIngresar}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centrado verticalmente
    alignItems: "center",     // Centrado horizontalmente
    backgroundColor: "#f8bbd0", // Fondo rosado claro
  },
  logo: {
    width: 200,   // Ancho del logo
    height: 200,  // Alto del logo
    marginBottom: 20,  // Espacio entre el logo y el título
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#d81b60", // Color rosado oscuro para el título
  },
  button: {
    backgroundColor: "#d81b60", // Fondo rosado para el botón
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff", // Texto blanco para el botón
    fontSize: 18,
    fontWeight: "bold",
  },
});
