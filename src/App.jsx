import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Authentication from "./components/Authentication/Authentication";
import VoiceRecorder from "./components/voiceRecorder/voiceRecorder";

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="/voicerecorder" element={<VoiceRecorder />} />
    </Routes>
  </>
  )
}
export default App;