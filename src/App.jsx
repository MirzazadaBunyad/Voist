import { Link, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Authentication from "./components/Authentication/Authentication";

function App() {
     return( <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/authentication" element={<Authentication />} />
        </Routes>
      </>
     )
}
export default App;