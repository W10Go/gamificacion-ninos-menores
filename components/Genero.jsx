import { View, Text, StyleSheet, Pressable } from "react-native";

export function Genero({ genero, setGenero, textColor, buttonColor }) {
  return (
    <View>
      {genero === "none" ? (
        <View>
          <Text style={[styles.title, { color: textColor }]}>Selecciona género</Text>

          <Pressable style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => setGenero("boy")}>
            <Text style={styles.buttonText}>Niño</Text>
          </Pressable>
          <Pressable style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => setGenero("girl")}>
            <Text style={styles.buttonText}>Niña</Text>
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
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

