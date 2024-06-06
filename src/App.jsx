import "../src/styles/globals.scss";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import VoiceRecorder from "./components/voiceRecorder/VoiceRecorder";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./components/onBoarding/OnBoarding";
import CreateAccount from "./components/Authentication/createAccount/CreateAccount";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/createaccount' element={<CreateAccount />} />
        <Route path="/voicerecorder" element={<VoiceRecorder />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/onboarding" element={<OnBoarding />} />
      </Routes>
    </>
  );
}
export default App;