import "../src/styles/globals.scss";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Authentication from "./components/Authentication/Authentication";
import VoiceRecorder from "./components/voiceRecorder/voiceRecorder";
import Dashboard from "./pages/Dashboard";

function App() {
  return (<>
    <Routes>
       <Route path="/" element={<LandingPage />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/voicerecorder" element={<VoiceRecorder />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </>
)}
export default App;