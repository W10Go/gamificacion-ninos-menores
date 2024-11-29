import { Image } from "expo-image";
import { View, Text, Pressable, StyleSheet } from "react-native";

export function RenderOption({
  item,
  handleSelectOption,
  handleRejectedOption,
}) {
  return (
    <View style={styles.optionContainer}>
      <Text style={styles.optionTitle}>{item.title}</Text>
      {/* Utilizar la URL de item.image o fallback a kid.jpg */}
      <View style={styles.imageContainer}>
        <Image
          source={
            item.image
              ? { uri: item.image } // URL dinámica de item.image
              : require("../assets/images/kid.jpg") // Imagen predeterminada
          }
          style={styles.optionImage}
          onError={(error) =>
            console.log(`Error al cargar la imagen para ${item.title}:`, error)
          }
        />
        <Image
          source={
            item.semaforizacion === "roja"
              ? require("../assets/images/traffic_light_1.png")
              : require("../assets/images/traffic_light_2.png")
          }
          style={styles.trafficImage}
        />
      </View>
      <Text style={styles.optionDescription}>{item.description}</Text>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.acceptButton}
          onPress={() => handleSelectOption(item)}
        >
          <Text style={styles.selectButtonText}>Si</Text>
        </Pressable>
        <Pressable
          style={styles.rejectButton}
          onPress={() => handleRejectedOption(item)}
        >
          <Text style={styles.selectButtonText}>No</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  optionContainer: {
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    flex: 1,
    alignItems: "center",
  },
  optionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0d47a1",
    marginBottom: 10,
    textAlign: "center",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: "15%",
  },
  trafficImage: {
    width: 50,
    height: 70,
    resizeMode: "contain",
  },
  optionDescription: {
    fontSize: 20,
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row", // Los botones se alinearán en fila
    justifyContent: "center", // Espacio entre los botones
    width: "80%", // Asegura que ocupe el ancho completo
  },
  selectButton: {
    backgroundColor: "#64b5f6",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    width: "45%", // Botones ocupan el 45% del ancho
  },
  selectButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  acceptButton: {
    backgroundColor: "#003366", // Azul medianoche para "Sí"
    paddingVertical: 8,
    borderRadius: 5,
    marginRight: 50,
    alignItems: "center",
    justifyContent: "center",

    width: "45%", // Botones ocupan el 45% del ancho
  },
  rejectButton: {
    backgroundColor: "#B0BEC5", // Gris ceniza claro para "No"
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "45%", // Botones ocupan el 45% del ancho
  },
  selectedContainer: {
    marginTop: 40,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  selectedTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0d47a1",
  },
  selectedOption: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
});
