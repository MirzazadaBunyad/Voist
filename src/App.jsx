import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Authentication from "./components/Authentication/Authentication";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <>
        <Route path="/" element={<Authentication />} />
      </>
    </>
  )
);
