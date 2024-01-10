import Loginscreen from "./Loginscreen";
import Register from "./Register";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <Loginscreen />
      {/* <Register /> */}
    </NavigationContainer>
  );
}
