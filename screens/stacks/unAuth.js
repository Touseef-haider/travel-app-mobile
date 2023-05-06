import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../login";
import SignUp from "../signup";

const UnAuth = createNativeStackNavigator();

const UnAuthStack = () => {
  return (
    <UnAuth.Navigator>
      <UnAuth.Screen name="Login" component={Login}></UnAuth.Screen>
      <UnAuth.Screen name="Signup" component={SignUp}></UnAuth.Screen>
    </UnAuth.Navigator>
  );
};

export default UnAuthStack;
