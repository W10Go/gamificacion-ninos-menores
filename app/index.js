import { View, Pressable, Text, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { AmaticSC_400Regular } from '@expo-google-fonts/amatic-sc';

export default function Index() {
  const router = useRouter();

  // Cargar la fuente Amatic SC
  const [fontsLoaded] = useFonts({
    AmaticSC_400Regular,
  });

  // Esperar a que la fuente se cargue
  if (!fontsLoaded) {
    return null; // Puedes poner un cargador o un componente vacío mientras se carga la fuente
  }

  return (
    <View style={styles.container}>
      {/* Logo y título */}
      <Image
        source={{
          uri: "https://i.ibb.co/gSn16zk/Logo4.png", // URL de tu logo
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>Creciendo Sano</Text>

      {/* Botón "Ingresar" */}
      <Pressable style={styles.button} onPress={() => router.push("/SplashScreen")}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centrado vertical
    alignItems: "center", // Centrado horizontal
    backgroundColor: "#bbdefb", // Fondo azul claro
  },
  logo: {
    width: 200, // Ancho del logo
    height: 200, // Alto del logo
    marginBottom: 20, // Espacio entre el logo y el título
  },
  title: {
    fontSize: 35, // Tamaño más grande para el título
    fontWeight: "bold", // Puedes ajustar esto si lo deseas
    color: "#0d47a1", // Azul oscuro para el título
    marginBottom: 20, // Espacio entre el título y el botón
    fontFamily: 'AmaticSC_400Regular', // Usar la fuente Amatic SC
  },
  button: {
    backgroundColor: "#64b5f6", // Azul brillante para el botón
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff", // Texto blanco para el botón
    fontSize: 18,
    fontWeight: "bold",
  },
});



