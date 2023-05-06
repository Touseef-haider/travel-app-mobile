import Home from "./home";
import Login from "./login";
import SignUp from "./signup";
import Auth from "./stacks/auth";
import UnAuth from "./stacks/unAuth";

export const SCREENS = [
  {
    component: Login,
    name: "Login",
    stack: UnAuth,
  },
  {
    component: SignUp,
    name: "SignUp",
    stack: UnAuth,
  },
  {
    component: Home,
    name: "Home",
    stack: Auth,
  },
];
