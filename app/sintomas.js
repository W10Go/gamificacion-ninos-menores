import { useEffect, useState } from "react";

import { Text, View, FlatList, StyleSheet, Platform } from "react-native";
import { Genero } from "../components/Genero";
import { Edad } from "../components/Edad";
import { Enfermedad } from "../components/Enfermedad";
import { RenderOption } from "../components/RenderOption";

export default function Sintomas() {
  const [color, setColor] = useState("");
  const [genero, setGenero] = useState("none");
  const [edad, setEdad] = useState(0);
  const [enfermedad, setEnfermedad] = useState("none");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = require("../assets/data/sintomasIRA.json");
  const [semaforizacion, setSemaforizacion] = useState(0);
  let oldSem = semaforizacion;

  const updateSemaforizacion = () => {
    let newSemaforizacion = 0;
    selectedOptions.forEach((option) => {
      if (option.semaforizacion === "amarilla") {
        newSemaforizacion += 1;
      } else {
        newSemaforizacion += 3;
      }
    });
    setSemaforizacion(newSemaforizacion);
    oldSem = semaforizacion;
  };
  const handleSelectOption = (option) => {
    const isRepeated = selectedOptions.includes(option);
    if (!isRepeated) {
      // Si no está seleccionada, agregarla al array
      setSelectedOptions((prevSelected) => [...prevSelected, option]);
      updateSemaforizacion();
    }
  };
  const handleRejectedOption = (option) => {
    const isRepeated = selectedOptions.includes(option);
    if (isRepeated) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
      updateSemaforizacion();
    }
  };

  const renderItem = ({ item }) => (
    <RenderOption
      item={item}
      handleSelectOption={handleSelectOption}
      handleRejectedOption={handleRejectedOption}
    />
  );

  const numColumns = Platform.OS === "web" ? 1 : 1;

  useEffect(() => {
    if (genero === "girl") {
      setColor(Platform.OS === "web" ? "#f4c6d1" : "#f0a6c1");
    } else {
      // Colores iniciales (o si no hay género seleccionado)
      setColor(Platform.OS === "web" ? "#e3f2fd" : "#bbdefb");
    }
  }, [genero]);
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.buttonContainer}>
        <Genero genero={genero} setGenero={setGenero} />

        {genero !== "none" ? <Edad edad={edad} setEdad={setEdad} /> : <></>}
        {edad !== 0 ? (
          <Enfermedad enfermedad={enfermedad} setEnfermedad={setEnfermedad} />
        ) : (
          <></>
        )}
        {enfermedad !== "none" ? (
          <View>
            <Text style={[styles.title, { marginTop: 20 }]}>
              Selecciona los síntomas que tiene{" "}
              {genero === "girl" ? "la niña" : "el niño"}
            </Text>
            <View style={styles.optionsContainer}>
              <FlatList
                data={options}
                renderItem={renderItem}
                keyExtractor={(option) => option.title}
                numColumns={numColumns}
                contentContainerStyle={styles.flatListContainer}
                ListFooterComponentStyle={[
                  styles.selectedContainer,
                  { borderColor: oldSem >= 3 ? "#FF9800" : "#F44336" },
                ]}
                ListFooterComponent={
                  selectedOptions.length > 0 && (
                    <View>
                      <Text style={styles.selectedTitle}>
                        Opciones seleccionadas:
                      </Text>
                      {selectedOptions.map((option) => (
                        <View>
                          <Text
                            key={option.title}
                            style={styles.selectedOption}
                          >
                            {option.title}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )
                }
              />
            </View>
          </View>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centrar en el eje vertical
    alignItems: "center", // Centrar en el eje horizontal
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#0d47a1", // Azul oscuro para contraste
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
  },

  flatListContainer: {
    paddingBottom: 20,
    justifyContent: "center", // Centrar en el eje vertical
  },
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
  optionsContainer: {
    flex: 1,
    justifyContent: "center", // Centrar en el eje vertical
    alignItems: "center", // Centrar en el eje horizontal
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#0d47a1",
    marginBottom: 10,
    textAlign: "center",
  },
  optionImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionDescription: {
    fontSize: 12,
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
    backgroundColor: "#0d47a1", // Verde para aceptar
    paddingVertical: 8,
    borderRadius: 5,
    marginRight: 50,
    alignItems: "center",
    justifyContent: "center",

    width: "45%", // Botones ocupan el 45% del ancho
  },
  rejectButton: {
    backgroundColor: "#F44336", // Rojo para rechazar
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
    borderWidth: 10,
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
