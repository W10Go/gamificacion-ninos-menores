import { View, Text, StyleSheet, Pressable } from "react-native";

export function Edad({ edad, setEdad, textColor, buttonColor }) {
  return (
    <View>
      {edad === 0 ? (
        <View>
          <Text style={[styles.title, { color: textColor }]}>
            Selecciona edad
          </Text>

          <Pressable
            style={[styles.button, { backgroundColor: buttonColor }]}
            onPress={() => setEdad(1)}
          >
            <Text style={styles.buttonText}>De 0 a 11 meses</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: buttonColor }]}
            onPress={() => setEdad(2)}
          >
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
