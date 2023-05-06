import * as React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import store from "./redux/store";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UnAuthStack from "./screens/stacks/unAuth";
import AuthStack from "./screens/stacks/auth";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const client = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  useEffect(async () => {
    const token = await AsyncStorage.getItem("token");
    console.log(token);
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator>
            {isAuthenticated ? (
              <Stack.Screen
                name="Auth"
                options={{ headerShown: false }}
                component={AuthStack}
              ></Stack.Screen>
            ) : (
              <Stack.Screen
                name="UnAuth"
                options={{ headerShown: false }}
                component={UnAuthStack}
              ></Stack.Screen>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}
