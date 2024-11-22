import { View, Pressable, Text, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { AmaticSC_400Regular } from '@expo-google-fonts/amatic-sc';
import { LinearGradient } from 'expo-linear-gradient';

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
      colors={["#bbdefb", "#64b5f6", "#0d47a1"]} // Degradado de azul claro a oscuro
      style={styles.container}
    >
      {/* Logo y título */}
      <Image
        source={{
          uri: "https://i.ibb.co/gSn16zk/Logo4.png",
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>Creciendo Sano</Text>

      {/* Botón "Ingresar" */}
      <Pressable style={styles.button} onPress={() => router.push("/SplashScreen")}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
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
    fontFamily: 'AmaticSC_400Regular',
    textShadowColor: "rgba(0, 0, 0, 0.5)", // Sombra negra semi-transparente
    textShadowOffset: { width: 2, height: 2 }, // Desplazamiento de la sombra
    textShadowRadius: 4, // Difusión de la sombra
  },
  button: {
    backgroundColor: "#64b5f6",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: "#000", // Sombra negra para el botón
    shadowOffset: { width: 0, height: 4 }, // Desplazamiento de la sombra
    shadowOpacity: 0.3, // Opacidad de la sombra
    shadowRadius: 6, // Difusión de la sombra
    elevation: 6, // Sombra para Android
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.4)", // Sombra negra semi-transparente para el texto del botón
    textShadowOffset: { width: 1, height: 1 }, // Desplazamiento de la sombra
    textShadowRadius: 2, // Difusión de la sombra
  },
});



