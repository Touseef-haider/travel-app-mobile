import React from "react";
import { TextInput, View, Text } from "react-native";
import * as S from "./styles";

const Input = ({ onChange, placeholder, value, type, error, name }) => {
  return (
    <View>
      <TextInput
        keyboardType={type || "default"}
        style={S.Input}
        onChangeText={onChange}
        placeholder={placeholder}
        id={name}
        defaultValue={value}
      ></TextInput>
      {error !== "" && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
};

export default Input;
