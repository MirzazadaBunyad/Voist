import "../src/styles/globals.scss";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Authentication from "./components/Authentication/Authentication";
import Login from "./components/Authentication/login/Login";
import CreateAccount from "./components/Authentication/createAccount/CreateAccount";
import VoiceRecorder from "./components/voiceRecorder/VoiceRecorder";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./components/onBoarding/OnBoarding";
import { axiosInterceptorHandle } from "./utils/AxiosInterceptor";
import { useEffect } from "react";
import ForgotPassword from "./components/Authentication/forgotPassword/Forgotpassword";
import SendToEmail from "./components/Authentication/forgotPassword/sendToEmail/SendToEmail";
import CodeBelow from "./components/Authentication/forgotPassword/codeBelow/CodeBolow";
import NewPassword from "./components/Authentication/forgotPassword/newPassword/NewPassword";
import Successfully from "./components/Authentication/forgotPassword/successfully/Successfully";


function App() {
  let navigate = useNavigate();
  const windowLocation = useLocation().pathname;

  axiosInterceptorHandle(navigate);

  useEffect(() => {
    let localDataAuth = false;
    let localDataRefresh = false;

    localDataAuth = localStorage.getItem(import.meta.env.VITE_APP_ACCESS_KEYWORD);
    localDataRefresh = localStorage.getItem(import.meta.env.VITE_APP_REFRESH_KEYWORD);

    if (windowLocation === "/") {
      navigate("/");
    } else if (!localDataAuth && !localDataRefresh && windowLocation.startsWith("/dashboard")) {
      navigate("/authentication/login");
    } else if (localDataAuth && localDataRefresh && windowLocation === "/authentication/login") {
      navigate("/dashboard");
    }
  }, [windowLocation, navigate]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/voicerecorder" element={<VoiceRecorder />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/onboarding" element={<OnBoarding />} />
      
      <Route path="/authentication" element={<Authentication />}>
        <Route path="login" element={<Login />} />
        <Route path="createaccount" element={<CreateAccount />} />
        </Route>
        <Route path="/authentication/forgotPassword" element={<ForgotPassword/>} >
          <Route path="sendtoemail" element={<SendToEmail/>} />
          <Route path="codebelow" element={<CodeBelow/>} />
          <Route path="newpassword" element={<NewPassword/>} />
          <Route path="successfully" element={<Successfully/>} />
        </Route>
    </Routes>
  );
}

export default App;
