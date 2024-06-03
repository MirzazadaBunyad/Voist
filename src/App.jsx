import "../src/styles/globals.scss";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Authentication from "./components/Authentication/Authentication";
import VoiceRecorder from "./components/voiceRecorder/VoiceRecorder";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./components/onBoarding/OnBoarding";
import { axiosInterceptorHandle } from "./utils/AxiosInterceptor";
import { useEffect } from "react";

function App() {
  let navigate = useNavigate();
  const windowLocation = useLocation().pathname;

  axiosInterceptorHandle(navigate);

  useEffect(() => {
    let localDataAuth = false;
    let localDataRefresh = false;

    localDataAuth = localStorage.getItem(
      import.meta.env.VITE_APP_ACCESS_KEYWORD
    );
    localDataRefresh = localStorage.getItem(
      import.meta.env.VITE_APP_REFRESH_KEYWORD
    );
    if (windowLocation === "/") {
      navigate("/");
    } else if (
      !localDataAuth &&
      !localDataRefresh &&
      windowLocation.startsWith("/dashboard")
    ) {
      navigate("/authentication");
    } else if (
      localDataAuth &&
      localDataRefresh &&
      windowLocation === "/authentication"
    ) {
      navigate("/dashboard");
    }
  }, [windowLocation]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/voicerecorder" element={<VoiceRecorder />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/onboarding" element={<OnBoarding />} />
      </Routes>
    </>
  );
}
export default App;
