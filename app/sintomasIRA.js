import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Pressable, Platform } from "react-native";

export default function SelectableOptions() {
  // Estado para acumular las opciones seleccionadas
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Datos de ejemplo para las opciones
  const options = [
    {
      title: "Niño bien",
      image: "../assets/images/niñoFeliz.jpg", // Reemplazar con la URL real
      description: "Alerta, despierto",
    },
    {
      title: "Buena respiración",
      image: "https://via.placeholder.com/150", // Reemplazar con la URL real
      description: "Niño que respira normal y sin dificultad",
    },
    {
      title: "Mala respiración",
      image: "https://via.placeholder.com/150", // Reemplazar con la URL real
      description: "Niño con dificultad para respirar o respiración rápida / respiración entrecortada, cansada, agitada, rápida o diferente de la normal",
    },
    // Agrega más opciones según sea necesario
    {
      title: "Niño letárgico",
      image: "https://via.placeholder.com/150",
      description: "Niño Letárgico, o inconsciente / inconsciente adormecido o no despierta con facilidad",
    },
    {
      title: "Ruidos al respirar",
      image: "https://via.placeholder.com/150",
      description: "Niño que hace ruidos al respirar: Acerque su oído a la boca y nariz del niño, para detectar ronquidos, silbidos, sonidos agudos y anormales durante la respiración.",
    },
    {
      title: "Niño con cianosis en reposo ",
      image: "https://via.placeholder.com/150",
      description: "Se pone morado cuando está quieto.",
    },
    {
      title: "Niño con cianosis cuando se agita ",
      image: "https://via.placeholder.com/150",
      description: "Se pone morado cuando se mueve.",
    },
    {
      title: "Niño con aleteo nasal ",
      image: "https://via.placeholder.com/150",
      description: "Ensancha más de lo usual la nariz para poder respirar",
    },
    {
      title: "Niño que usa músculos accesorios para respirar ",
      image: "https://via.placeholder.com/150",
      description: "Cuando respira se le hunden mucho las costillas y debajo de la clavícula",
    },
    {
      title: "Niño con tiraje subcostal ",
      image: "https://via.placeholder.com/150",
      description: "Hundimiento de la piel entre las costillas al respirar / necesita hacer un esfuerzo mucho mayor al respirar",
    },
    {
      title: "Niño con tos ",
      image: "https://via.placeholder.com/150",
      description: "Niño con tos por más de 15 días",
    },
    {
      title: "Niño con rigidez en la nuca",
      image: "https://via.placeholder.com/150",
      description: "No puede doblar el cuello ",
    },
    {
      title: "Niño con Intolerancia o rechazo a la vía oral ",
      image: "https://via.placeholder.com/150",
      description: "No puede comer o beber nada o vomita todo",
    },
    {
      title: "Niño con Alteración de estado de conciencia: Somnolencia o inconciencia ",
      image: "https://via.placeholder.com/150",
      description: "Niño que está muy dormido y no se despierta fácilmente o que no reacciona",
    },
    {
      title: "Niño con convulsiones ",
      image: "https://via.placeholder.com/150",
      description: "Niño con convulsiones o movimientos anormales en las últimas 72 horas.",
    },
    {
      title: "Niño con Cianosis o palidez extrema ",
      image: "https://via.placeholder.com/150",
      description: "Que esté con coloración morada o exageradamente pálido",
    },
    {
      title: "Niño con Llanto ",
      image: "https://via.placeholder.com/150",
      description: "Niño con Llanto inconsolable",
    },
    {
      title: "Niño con deposiciones con sangre ",
      image: "https://via.placeholder.com/150",
      description: "Niño con deposiciones con sangre – descarte lesiones en ano.",
    },
  
  ];

  // Función para manejar la selección de una opción
  const handleSelectOption = (option) => {
    setSelectedOptions((prevSelected) => [...prevSelected, option]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.title, { marginTop: 20}]}>Selecciona los síntomas que tiene el niño</Text>

      {options.map((option, index) => (
        <View key={index} style={styles.optionContainer}>
          <Text style={styles.optionTitle}>{option.title}</Text>
          
          {/* Imagen */}
          <Image source={{ uri: option.image }} style={styles.optionImage} />
          
          {/* Descripción */}
          <Text style={styles.optionDescription}>{option.description}</Text>
          
          {/* Botón para seleccionar la opción */}
          <Pressable
            style={styles.selectButton}
            onPress={() => handleSelectOption(option)}
          >
            <Text style={styles.selectButtonText}>Seleccionar</Text>
          </Pressable>
        </View>
      ))}

      {/* Mostrar las opciones seleccionadas */}
      {selectedOptions.length > 0 && (
        <View style={styles.selectedContainer}>
          <Text style={styles.selectedTitle}>Opciones seleccionadas:</Text>
          {selectedOptions.map((option, index) => (
            <Text key={index} style={styles.selectedOption}>
              {option.title}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Platform.OS === "web" ? "#e3f2fd" : "#bbdefb",
    padding: 20,
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
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0d47a1",
    marginBottom: 10,
  },
  optionImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionDescription: {
    fontSize: 14,
    marginBottom: 15,
    color: "#333",
  },
  selectButton: {
    backgroundColor: "#64b5f6",
    paddingVertical: 10,
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
