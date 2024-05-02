import "../src/styles/globals.scss";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Authentication from "./components/Authentication/Authentication";
import Dashboard from "./pages/Dashboard";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <>
        <Route path="/" element={<Authentication />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </>
    </>
  )
);
