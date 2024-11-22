import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreen() {
  return (
    <LinearGradient
      colors={["#e3f2fd", "#bbdefb", "#64b5f6"]} // Degradado con tonos azules más claros
      style={styles.container}
    >
      <Text style={styles.title}>Bienvenido</Text>

      <View style={styles.buttonContainer}>
        {/* Botón que lleva a la página de enciclopedia */}
        <Link asChild href="/library">
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Enciclopedia</Text>
          </Pressable>
        </Link>

        {/* Botón que lleva a la página de síntomas */}
        <Link asChild href="/sintomas">
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Identificar Enfermedad</Text>
          </Pressable>
        </Link>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centrado en el eje vertical
    alignItems: "center", // Centrado en el eje horizontal
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
    backgroundColor: "#2196F3", // Azul ligeramente más oscuro para los botones
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 20,
    width: "80%", // Ancho del 80% del contenedor
    alignItems: "center",
    shadowColor: "#0d47a1", // Azul oscuro para sombra
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5, // Sombra para Android
  },
  buttonText: {
    color: "#fff", // Texto blanco para contraste
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: "#1976d2", // Color de la sombra del texto
    textShadowOffset: { width: 1, height: 1 }, // Desplazamiento de la sombra
    textShadowRadius: 5, // Radio de la sombra
  },
});
