import { Text, View } from "react-native";
import Input from "../../components/input/index";
import Button from "../../components/button/index";
import * as S from "./styles";

const Login = ({ navigation }) => {
  return (
    <View style={S.Container}>
      <Text style={S.LoginHeading}>Login</Text>
      <View
        style={{
          width: "100%",
          padding: 20,
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Input type="email-address" placeholder="Email" />
        <Input type="visible-password" placeholder="Password" />
        <Button title="Login" />
      </View>
      <Text style={{ marginBottom: 10 }}>Don't have account?</Text>
      <Button onPress={() => navigation.navigate("SignUp")} title="Signup" />
    </View>
  );
};

export default Login;
