import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable, Platform } from "react-native";

export default function NewLibrary() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona edad</Text>

      <View style={styles.buttonContainer}>
        {/* Fila superior de botones */}
        <View style={styles.buttonRow}>
          <Link asChild href={"/enfermedad"}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>De 0 a 11 meses</Text>
            </Pressable>
          </Link>

          <Link asChild href={"/enfermedad"}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>1 año</Text>
            </Pressable>
          </Link>

          <Link asChild href={"/enfermedad"}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>2 años</Text>
            </Pressable>
          </Link>
        </View>

        {/* Fila inferior de botones */}
        <View style={styles.buttonRow}>
          <Link asChild href={"/enfermedad"}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>3 años</Text>
            </Pressable>
          </Link>

          <Link asChild href={"/enfermedad"}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>4 años</Text>
            </Pressable>
          </Link>

          <Link asChild href={"/enfermedad"}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>5 años</Text>
            </Pressable>
          </Link>
        </View>
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
  buttonRow: {
    flexDirection: "row", // Alinea los botones en una fila
    justifyContent: "space-between", // Espacio entre los botones
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#64b5f6",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "30%", // Cada botón ocupará el 30% del ancho
    alignItems: "center",
    justifyContent: "center", // Centra el contenido verticalmente
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
