import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CreateAccount from "./components/createAccaunt/CreateAccount";
import Login from "./components/login/Login";
import Forgotpassword from "./components/forgotPassword/Forgotpassword";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/forgotpassword" element={<Forgotpassword />} />
    </>
  )
);
