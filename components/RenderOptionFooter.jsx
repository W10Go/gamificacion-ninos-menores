import { View, Text, Pressable, StyleSheet } from "react-native";

export function RenderOptionFooter({
  textColor,
  selectedOptions,
  handleAlert,
}) {
  return (
    <View>
      <Text style={[styles.selectedTitle, { color: textColor }]}>
        Opciones seleccionadas:
      </Text>
      {selectedOptions.map((option) => (
        <View key={option.title}>
          <Text style={[styles.selectedOption, { color: textColor }]}>
            {option.title}
          </Text>
        </View>
      ))}
      <Pressable onPress={handleAlert} style={styles.button}>
        <Text style={styles.selectButtonText}>Realizar Diagnostico</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#003366", // Azul medianoche para "Sí"
    paddingVertical: 8,
    borderRadius: 5,
    marginRight: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "45%", // Botones ocupan el 45% del ancho
    height: "40",
  },
  selectButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  selectedTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  selectedOption: {
    fontSize: 20,
    marginBottom: 5,
  },
});
