import { useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  FlatList,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import { Genero } from "../components/Genero";
import { Edad } from "../components/Edad";
import { Enfermedad } from "../components/Enfermedad";
import { RenderOption } from "../components/RenderOption";

export default function Sintomas() {
  const [color, setColor] = useState("");
  const [buttonColor, setButtonColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [genero, setGenero] = useState("none");
  const [edad, setEdad] = useState(0);
  const [enfermedad, setEnfermedad] = useState("none");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [semaforizacion, setSemaforizacion] = useState(0);
  const [options, setOptions] = useState([]); // Aquí cargaremos los síntomas
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (enfermedad === "IRA") {
      // Cargar síntomas de IRA
      setOptions(require("../assets/data/sintomasIRA.json"));
    } else if (enfermedad === "EDA") {
      // Cargar síntomas de EDA
      setOptions(require("../assets/data/sintomasEDA.json"));
    } else if (enfermedad === "AMBAS") {
      // Combinar síntomas de IRA y EDA
      const sintomasIRA = require("../assets/data/sintomasIRA.json");
      const sintomasEDA = require("../assets/data/sintomasEDA.json");
      setOptions([...sintomasIRA, ...sintomasEDA]); // Combina ambas listas
    } else {
      setOptions([]); // Si no hay enfermedad seleccionada, no mostrar nada
    }
  }, [enfermedad]);
  const updateSemaforizacion = () => {
    let newSemaforizacion = 0;
    selectedOptions.forEach((option) => {
      console.log(option.semaforizacion);

      if (option.semaforizacion === "amarilla") {
        newSemaforizacion += 1;
      } else {
        newSemaforizacion += 3;
      }
    });
    newSemaforizacion = newSemaforizacion - semaforizacion;
    setSemaforizacion((prevSem) => prevSem + newSemaforizacion);
  };

  const handleSelectOption = (option) => {
    const isRepeated = selectedOptions.includes(option);
    if (!isRepeated) {
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
      semaforizacion={semaforizacion}
    />
  );

  const numColumns = Platform.OS === "web" ? 1 : 1;

  useEffect(() => {
    if (genero === "girl") {
      setColor("#FCE4EC");
      setButtonColor("#F06292");
      setTextColor("#D81B60");
    } else {
      setColor("#e3f2fd");
      setButtonColor("#64b5f6");
      setTextColor("#0d47a1");
    }
  }, [genero]);

  const handleAlert = () => {
    setResult(1);
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.buttonContainer}>
        <Genero
          genero={genero}
          setGenero={setGenero}
          textColor={textColor}
          buttonColor={buttonColor}
        />
        {genero !== "none" ? (
          <Edad
            edad={edad}
            setEdad={setEdad}
            textColor={textColor}
            buttonColor={buttonColor}
          />
        ) : null}
        {edad !== 0 ? (
          <Enfermedad
            enfermedad={enfermedad}
            setEnfermedad={setEnfermedad}
            textColor={textColor}
            buttonColor={buttonColor}
          />
        ) : null}
        {enfermedad !== "none" && options.length > 0 && result === 0 ? (
          <View>
            <Text style={[styles.title, { marginTop: 20, color: textColor }]}>
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
                ListFooterComponentStyle={[styles.selectedContainer]}
                ListFooterComponent={
                  selectedOptions.length > 0 && (
                    <View>
                      <Text
                        style={[styles.selectedTitle, { color: textColor }]}
                      >
                        Opciones seleccionadas:
                      </Text>
                      {selectedOptions.map((option) => (
                        <View key={option.title}>
                          <Text
                            style={[
                              styles.selectedOption,
                              { color: textColor },
                            ]}
                          >
                            {option.title}
                          </Text>
                        </View>
                      ))}
                      {/* Botón antes de la imagen */}
                      <Pressable onPress={handleAlert} style={styles.button}>
                        <Text style={styles.selectButtonText}>
                          Realizar Diagnostico
                        </Text>
                      </Pressable>
                      <Image
                        source={
                          semaforizacion >= 3
                            ? require("../assets/images/traffic_light_1.png")
                            : require("../assets/images/traffic_light_2.png")
                        }
                        style={styles.trafficImage}
                      />
                    </View>
                  )
                }
              />
            </View>
          </View>
        ) : null}
        {result !== 1 ? (
          <View>
            <></>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
  },
  optionsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedContainer: {
    marginTop: 40,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  selectedTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  selectedOption: {
    fontSize: 16,
    marginBottom: 5,
  },
  trafficImage: {
    width: 50,
    height: 70,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#003366", // Azul medianoche para "Sí"
    paddingVertical: 8,
    borderRadius: 5,
    marginRight: 50,
    alignItems: "center",
    justifyContent: "center",

    width: "45%", // Botones ocupan el 45% del ancho
  },
  selectButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
