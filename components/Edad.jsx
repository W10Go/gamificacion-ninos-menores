import { View, Text, StyleSheet, Pressable } from "react-native";

export function Edad({ edad, setEdad }) {
  return (
    <View>
      {edad === 0 ? (
        <View>
          <Text style={styles.title}>Selecciona edad</Text>

          <Pressable style={styles.button} onPress={() => setEdad(1)}>
            <Text style={styles.buttonText}>De 0 a 11 meses</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => setEdad(2)}>
            <Text style={styles.buttonText}>De 1 a 5 años</Text>
          </Pressable>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#0d47a1", // Azul oscuro para contraste
  },
  button: {
    backgroundColor: "#64b5f6", // Azul brillante para los botones
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
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
