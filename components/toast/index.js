import { ToastAndroid, Platform, AlertIOS } from "react-native";

function toastify(msg) {
  if (Platform.OS === "android") {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    AlertIOS.alert(msg);
  }
}

export default toastify;
