import React from "react";
import { TextInput } from "react-native";
import * as S from "./styles";

const Input = ({ onChange, placeholder, value, defaultValue, type }) => {
  return (
    <TextInput
      keyboardType={type}
      style={S.Input}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
    ></TextInput>
  );
};

export default Input;
