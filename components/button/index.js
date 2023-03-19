import React from "react";
import { Button, View, TouchableHighlight } from "react-native";
import { colors } from "../../utils/constant";
import * as S from "./styles";

const Btn = ({ onPress, title }) => {
  return (
    <TouchableHighlight style={S.BtnContainer} underlayColor={colors.primary}>
      <View style={S.Btn}>
        <Button title={title} onPress={onPress} color={colors.primary} />
      </View>
    </TouchableHighlight>
  );
};

export default Btn;
