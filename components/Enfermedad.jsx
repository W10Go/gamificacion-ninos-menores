import { View, Text, StyleSheet, Pressable } from "react-native";

export function Enfermedad({ enfermedad, setEnfermedad, textColor, buttonColor }) {
  return (
    <View>
      {enfermedad === "none" ? (
        <View>
          <Text style={[styles.title, { color: textColor }]}>Selecciona enfermedad</Text>
          <Pressable style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => setEnfermedad("IRA")}>
            <Text style={styles.buttonText}>IRA(Gripa)</Text>
          </Pressable>
          <Pressable style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => setEnfermedad("EDA")}>
            <Text style={styles.buttonText}>EDA(Diarrea)</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: buttonColor }]}
            onPress={() => setEnfermedad("AMBAS")}
          >
            <Text style={styles.buttonText}>IRA y EDA(Diarrea y gripa)</Text>
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
  },
  button: {
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

