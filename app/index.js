import { View, Pressable, Text, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { AmaticSC_400Regular } from "@expo-google-fonts/amatic-sc";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

export default function Index() {
  const router = useRouter();

  // Cargar la fuente Amatic SC
  const [fontsLoaded] = useFonts({
    AmaticSC_400Regular,
  });

  // Esperar a que la fuente se cargue
  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#bbdefb", "#64b5f6", "#0d47a1"]}
      style={styles.gradientContainer} // Degradado de azul claro a oscuro
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={{
              uri: "https://www.udea.edu.co/wps/wcm/connect/udea/99fc43e7-7a64-45bd-97fc-96639b70813d/logosimbolo-vertical.png?MOD=AJPERES&CVID=ljeLvHr",
            }}
            style={styles.udeaLogo}
          />
          <Image
            source={{
              uri: "https://i.ibb.co/SvyFDW2/Logo-UPB-MEN-CS6-1.png",
            }}
            style={styles.upbLogo}
          />
        </View>
        <View style={styles.appContainer}>
          <Image
            source={{
              uri: "https://i.ibb.co/gSn16zk/Logo4.png",
            }}
            style={styles.logo}
          />
          <Text style={styles.title}>Creciendo Sano</Text>

          <Pressable
            style={styles.button}
            onPress={() => router.push("/SplashScreen")}
          >
            <Text style={styles.buttonText}>Ingresar</Text>
          </Pressable>
          <Link asChild href="/creditos">
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Creditos</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
  },
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 55,
    color: "#fff",
    marginBottom: 40,
    fontFamily: "AmaticSC_400Regular",
    textShadowColor: "rgba(0, 0, 0, 0.5)", // Sombra negra semi-transparente
    textShadowOffset: { width: 2, height: 2 }, // Desplazamiento de la sombra
    textShadowRadius: 4, // Difusión de la sombra
  },
  button: {
    backgroundColor: "#2196F3", // Azul ligeramente más oscuro para los botones
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 20,
    width: "80%", // Ancho del 80% del contenedor
    alignItems: "center",
    shadowColor: "#0d47a1", // Azul oscuro para sombra
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5, // Sombra para Android
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.4)", // Sombra negra semi-transparente para el texto del botón
    textShadowOffset: { width: 1, height: 1 }, // Desplazamiento de la sombra
    textShadowRadius: 2, // Difusión de la sombra
  },
  udeaLogo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    contentFit: "contain",
    resizeMode: "contain",
  },
  upbLogo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: "contain",
    marginLeft: "50%",
  },
});
