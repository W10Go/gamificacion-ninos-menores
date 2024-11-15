import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  Platform,
} from "react-native";

export default function SelectableOptions() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = require("../assets/data/sintomasIRA.json");

  const handleSelectOption = (option) => {
    setSelectedOptions((prevSelected) => [...prevSelected, option]);
  };

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

  const numColumns = Platform.OS === "web" ? 3 : 1;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { marginTop: 20 }]}>
        Selecciona los síntomas que tiene el niño
      </Text>
      <FlatList
        data={options}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "web" ? "#e3f2fd" : "#bbdefb",
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
  },
  flatListContainer: {
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
    margin: 10,
    flex: 1,
    minWidth: 150,
    maxWidth: 200,
    alignItems: "center",
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
