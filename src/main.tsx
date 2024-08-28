import { registerLicense } from "@syncfusion/ej2-base";
import "ag-grid-community/styles/ag-grid.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/routes.tsx";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhBYVB2WmFZfVpgdVdMZVVbQH5PMyBoS35RckVrW3xecHFcQmhcWEV2"
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
