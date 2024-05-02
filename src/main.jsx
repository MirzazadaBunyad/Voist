import ReactDOM from "react-dom/client";
import { router } from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekx1RXxbf1x0ZFBMZVRbQXJPMyBoS35RckVgWn5edXFdQ2VfV0Nz"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
