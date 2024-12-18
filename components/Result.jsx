import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

export function Result({ textColor, semaforizacion, enfermedad }) {
  let recomendation;
  if (enfermedad === "IRA") {
    recomendation = require("../assets/data/recomendationsIRA.json");
  } else if (enfermedad === "EDA") {
    recomendation = require("../assets/data/recomendationsEDA.json");
  } else {
    recomendation = require("../assets/data/recomendationsBOTH.json");
  }
  return (
    <View style={styles.selectedContainer}>
      <ScrollView style={styles.resultContainer}>
        <View>
          <Text style={[styles.title, { color: textColor }]}>
            Diagnostico Completo
          </Text>
          <Text style={styles.textRead}>
            {semaforizacion >= 3
              ? recomendation.rojo
              : semaforizacion !== 0
                ? recomendation.amarillo
                : recomendation.verde}
          </Text>
          <View style={styles.resultButtonContainer}>
            <Link asChild href="/SplashScreen">
              <Pressable style={styles.button}>
                <Text style={styles.selectButtonText}>Regresar</Text>
              </Pressable>
            </Link>
            <Image
              source={
                semaforizacion >= 3
                  ? require("../assets/images/traffic_light_1.png")
                  : semaforizacion !== 0
                    ? require("../assets/images/traffic_light_2.png")
                    : require("../assets/images/traffic_light_3.png")
              }
              style={styles.trafficImage}
            />
          </View>
        </View>
      </ScrollView>
      <Image
        style={styles.imageNurse}
        source={{
          uri: "https://i.ibb.co/1fWvRRr/Default-nurse-with-hand-in-pocket-looking-at-camera-34-angle-f-2-820f4cb6-516d-47b7-b113-6c7d0d45c80.png",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  selectedContainer: {
    marginTop: 40,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  resultContainer: {
    height: "50%",
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    borderRadius: 15,
  },
  title: {
    paddingTop: 10,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
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
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  textRead: {
    fontSize: 20,
  },
  resultButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  selectButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  trafficImage: {
    width: 50,
    height: 70,
    resizeMode: "contain",
    alignSelf: "flex-end",
  },
  imageNurse: {
    width: 150,
    height: "35%",
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: "flex-end",
  },
});
