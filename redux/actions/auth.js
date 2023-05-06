import AsyncStorage from "@react-native-async-storage/async-storage";
import apiService from "../../services/apiService";
import { AUTH } from "../actionTypes";

export const login = (data, navigation) => {
  console.log(data);
  return async (dispatch) => {
    try {
      dispatch(request());
      const response = await apiService.login(data);
      if (response?.access_token) {
        console.log("resposs", response);
        dispatch({ type: AUTH.SUCCESS, payload: response });
        await AsyncStorage.setItem("token", response?.access_token);
        navigation.navigate("Home");
      } else {
        dispatch({
          type: AUTH.FAILURE,
          payload: response?.message,
        });
      }
    } catch (error) {
      dispatch({ type: AUTH.FAILURE, payload: error });
    }
  };
};

export const request = () => {
  return (dispatch) => {
    dispatch({
      type: AUTH.REQUEST,
      payload: true,
    });
  };
};
