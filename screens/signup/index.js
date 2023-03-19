import { Text, View } from "react-native";
import Input from "../../components/input/index";
import Button from "../../components/button/index";
import * as S from "./styles";

const SignUp = ({ navigation }) => {
  return (
    <View style={S.Container}>
      <Text style={S.SignUpHeading}>SignUp</Text>
      <View
        style={{
          width: "100%",
          padding: 20,
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Input type="email-address" placeholder="Email" />
        <Input type="email-address" placeholder="First Name" />
        <Input type="email-address" placeholder="Last Name" />
        <Input type="visible-password" placeholder="Password" />
        <Button title="Sign Up" />
      </View>
      <Text style={{ marginBottom: 10 }}>Already have an account?</Text>
      <Button onPress={() => navigation.navigate("Login")} title="Login" />
    </View>
  );
};

export default SignUp;
