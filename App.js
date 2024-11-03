import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { KidStatus } from "./components/KidStatus";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <KidStatus />
    </SafeAreaProvider>
  );
}
