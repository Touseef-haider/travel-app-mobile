import { Text, View } from "react-native";
import Input from "../../components/input/index";
import Button from "../../components/button/index";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import toastify from "../../components/toast";

const schema = {
  email: "",
  password: "",
};

const Login = ({ navigation }) => {
  const [initialValues] = useState(schema);
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    email: yup.string().email().required("*email is required"),
    password: yup.string().required("*password is required"),
  });

  const formik = useFormik({
    validateOnChange: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (data) => {
      dispatch(login(data, navigation));
    },
  });

  console.log("----loading", loading, error, navigation);
  const { values, errors, handleSubmit, setFieldValue } = formik;

  return (
    <View style={S.Container}>
      <Text style={S.LoginHeading}>Login</Text>
      {error && toastify(error)}
      <View
        style={{
          width: "100%",
          padding: 20,
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Input
          type="email-address"
          error={errors.email}
          value={values.email}
          onChange={(text) => setFieldValue("email", text)}
          placeholder="Email"
        />
        <Input
          type="visible-password"
          value={values.password}
          error={errors.password}
          onChange={(text) => setFieldValue("password", text)}
          placeholder="Password"
        />
        <Button
          title={loading ? "Please wait ..." : "Login"}
          onPress={handleSubmit}
        />
      </View>
      <Text style={{ marginBottom: 10 }}>Don't have account?</Text>
      <Button onPress={() => navigation.navigate("SignUp")} title="Signup" />
    </View>
  );
};

export default Login;
