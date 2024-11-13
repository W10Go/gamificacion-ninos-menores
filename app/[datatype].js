import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Detail({ recomendation }) {
  return (
    <Link href={`${recomendation.data}`}>
      <View>
        <Text>cosas</Text>
      </View>
    </Link>
  );
}
