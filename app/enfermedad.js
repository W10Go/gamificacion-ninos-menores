import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable, Platform } from "react-native";

export default function ThreeButtons() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona enfermedad</Text>

      <View style={styles.buttonContainer}>
        {/* Botón 1 */}
        <Link asChild href={"/sintomasIRA"}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>IRA(Gripa)</Text>
          </Pressable>
        </Link>

        {/* Botón 2 */}
        <Link asChild href={"/opcion2"}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>EDA(Diarrea)</Text>
          </Pressable>
        </Link>

        {/* Botón 3 */}
        <Link asChild href={"/opcion3"}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>IRA y EDA(Diarrea y gripa)</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Platform.OS === "web" ? "#e3f2fd" : "#bbdefb",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#0d47a1",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#64b5f6",
    paddingVertical: 15,
    borderRadius: 10,
    width: "80%", // Cada botón ocupa el 80% del ancho
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20, // Espacio entre botones
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
