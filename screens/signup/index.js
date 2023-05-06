import { Text, View } from "react-native";
import Input from "../../components/input/index";
import Button from "../../components/button/index";
import * as S from "./styles";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { useMutation } from "react-query";
import apiService from "../../services/apiService";
import toastify from "../../components/toast";

const schema = {
  first_name: "",
  last_name: "",
  password: "",
  email: "",
};

const SignUp = ({ navigation }) => {
  const [initialValues] = useState(schema);
  const signUpMutation = useMutation((data) => apiService.register(data), {
    onSuccess: (data) => {
      toastify(data?.message);
    },
    onError: (data) => {
      toastify(data?.message);
    },
  });
  const validationSchema = yup.object({
    first_name: yup.string().trim().required("firstName is required"),
    last_name: yup.string().trim().required("lastName is required"),
    email: yup.string().email().trim().required("email is required"),
    password: yup.string().trim().required("password is required"),
  });

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    validateOnChange: true,
    onSubmit: (data) => {
      console.log("dataata", data);
      signUpMutation.mutate(data);
    },
  });

  const { values, errors, setFieldValue, handleSubmit } = formik || {};
  console.log(values);
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
        <Input
          type="email-address"
          value={values.email}
          error={errors.email}
          name="email"
          onChange={(text) => {
            setFieldValue("email", text);
          }}
          placeholder="Email"
        />
        <Input
          value={values.first_name}
          error={errors.first_name}
          name="first_name"
          placeholder="First Name"
          onChange={(text) => {
            setFieldValue("first_name", text);
          }}
        />
        <Input
          value={values.last_name}
          error={errors.last_name}
          name="last_name"
          placeholder="Last Name"
          onChange={(text) => {
            setFieldValue("last_name", text);
          }}
        />
        <Input
          type="visible-password"
          value={values.password}
          error={errors.password}
          onChange={(text) => {
            setFieldValue("password", text);
          }}
          name="password"
          placeholder="Password"
        />
        <Button title="Sign Up" onPress={handleSubmit} />
      </View>
      <Text style={{ marginBottom: 10 }}>Already have an account?</Text>
      <Button onPress={() => navigation?.navigate("Login")} title="Login" />
    </View>
  );
};

export default SignUp;
