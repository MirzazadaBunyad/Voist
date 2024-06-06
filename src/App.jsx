import "../src/styles/globals.scss";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import VoiceRecorder from "./components/voiceRecorder/VoiceRecorder";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./components/onBoarding/OnBoarding";
import Login from "./components/Authentication/login/Login";
import CreateAccount from "./components/Authentication/createAccount/CreateAccount";
import ForgotPassword from "./components/Authentication/forgotPassword/Forgotpassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/voicerecorder" element={<VoiceRecorder />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/onboarding" element={<OnBoarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="createaccount" element={<CreateAccount/>} />
        <Route path= "/forgetPassword" element={<ForgotPassword/>} />
      </Routes>
    </>
  );
}
export default App;