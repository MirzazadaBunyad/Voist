import {
  Route,
  Router,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/login/Login";
import Forgotpassword from "./components/forgotPassword/Forgotpassword";
import CreateAccount from "./components/createAccount/CreateAccount";
import Test from "./test";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <>
        <Route path="/" element={<Test />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
      </>
    </>
  )
);
