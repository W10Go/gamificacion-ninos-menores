import {
  Text,
  Image,
  Pressable,
  View,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import * as Progress from "react-native-progress";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const kid = require("../assets/images/kid.jpg");

// Obtener dimensiones de la pantalla para dispositivos móviles
const { width, height } = Dimensions.get("window");

export function KidStatus() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.row}>
          <Image source={kid} style={styles.image} />
          <View style={styles.statusContainer}>
            <MaterialIcons name="fastfood" size={50} color="black" />
            <Progress.Bar progress={0.3} width={100} />
            <FontAwesome5
              style={styles.iconPadding}
              name="shower"
              size={50}
              color="black"
            />
            <Progress.Bar progress={0.8} width={100} />
            <MaterialIcons
              style={styles.iconPadding}
              name="water-drop"
              size={50}
              color="black"
            />
            <Progress.Bar progress={0.2} width={100} />
            <View style={styles.tempRow}>
              <Text style={{ fontSize: 30 }}>36.5°</Text>
              <FontAwesome5 name="thermometer-half" size={50} color="black" />
            </View>
          </View>
        </View>
        <View style={[styles.row, styles.bottomRow]}>
          <Pressable onPress={() => {}}>
            {({ pressed }) => (
              <View style={styles.iconContainer}>
                <FontAwesome5 name="hospital-user" size={90} color="red" />
              </View>
            )}
          </Pressable>
          <Pressable onPress={() => {}}>
            {({ pressed }) => (
              <FontAwesome5 name="house-user" size={90} color="red" />
            )}
          </Pressable>
          <Pressable onPress={() => {}}>
            {({ pressed }) => (
              <MaterialIcons name="vaccines" size={90} color="red" />
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centrar en el eje vertical
    alignItems: "center", // Centrar en el eje horizontal
    backgroundColor: Platform.OS === "web" ? "#e3f2fd" : "#bbdefb", // Fondo para mejor visibilidad en web
  },
  innerContainer: {
    width: Platform.OS === "web" ? 400 : "100%", // Ancho fijo de 375px en web, 100% en móvil
    height: Platform.OS === "web" ? 700 : "100%", // Alto fijo de 667px en web (iPhone 6/7/8)
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: Platform.OS === "web" ? 280 : width * 0.7, // En web, 70% del contenedor, en móvil 60% del ancho de la pantalla
    height: Platform.OS === "web" ? 490 : height * 0.7, // En web, 70% del contenedor, en móvil 70% del alto de la pantalla
  },
  statusContainer: {
    width: Platform.OS === "web" ? 120 : width * 0.3, // En web, 70% del contenedor
    height: Platform.OS === "web" ? "100%" : height * 0.7,
    backgroundColor: Platform.OS === "web" ? "#e3f2fd" : "#bbdefb",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconPadding: {
    paddingVertical: 10,
  },
  tempRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  bottomRow: {
    width: Platform.OS === "web" ? "100%" : width * 1, // Ancho completo del contenedor
    height: Platform.OS === "web" ? "30%" : height * 0.3, // Ajuste del alto para mantener proporción
    backgroundColor: Platform.OS === "web" ? "#e3f2fd" : "#bbdefb",
    justifyContent: "center",
    paddingVertical: 20,
  },
  iconContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
