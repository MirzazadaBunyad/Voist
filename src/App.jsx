import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Test from "./test";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <>
        <Route path="/" element={<Test />} />
      </>
    </>
  )
);
