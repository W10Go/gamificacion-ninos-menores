import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  Platform,
} from "react-native";

export function Option({
  options,
  numColumns,
  handleSelectOption,
  selectedOptions,
}) {
  const renderItem = ({ item }) => (
    <View style={styles.optionContainer}>
      <Text style={styles.optionTitle}>{item.title}</Text>
      <Image source={{ uri: item.image }} style={styles.optionImage} />
      <Text style={styles.optionDescription}>{item.description}</Text>
      <Pressable
        style={styles.selectButton}
        onPress={() => handleSelectOption(item)}
      >
        <Text style={styles.selectButtonText}>Seleccionar</Text>
      </Pressable>
    </View>
  );
  return (
    <FlatList
      data={options}
      ListHeaderComponent={
        <Text style={[styles.title, { marginTop: 20 }]}>
          Selecciona los síntomas que tiene el niño
        </Text>
      }
      renderItem={renderItem}
      keyExtractor={(option) => option.title}
      key={numColumns} // Usar numColumns como clave para forzar el render
      numColumns={numColumns}
      contentContainerStyle={styles.flatListContainer}
      ListFooterComponent={
        selectedOptions.length > 0 && (
          <View style={styles.selectedContainer}>
            <Text style={styles.selectedTitle}>Opciones seleccionadas:</Text>
            {selectedOptions.map((option, index) => (
              <Text key={index} style={styles.selectedOption}>
                {option.title}
              </Text>
            ))}
          </View>
        )
      }
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "web" ? "#e3f2fd" : "#bbdefb",
    justifyContent: "center", // Centrar en el eje vertical
    alignItems: "center", // Centrar en el eje horizontal
    padding: 20,
  },
  flatListContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#0d47a1",
    textAlign: "center",
  },
  optionContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    margin: 10, // Añadir margen para que se separe en la cuadrícula
    flex: 1, // Para que el elemento ocupe espacio equitativo
    minWidth: 150, // Ancho mínimo para cada columna
    maxWidth: 200, // Ancho máximo para cada columna
    alignItems: "center", // Centrar el contenido
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0d47a1",
    marginBottom: 10,
    textAlign: "center",
  },
  optionImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionDescription: {
    fontSize: 12,
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  selectButton: {
    backgroundColor: "#64b5f6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  selectButtonText: {
    color: "#fff",
    fontWeight: "bold",
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
