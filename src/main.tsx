import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GoogleMapsProvider from "./components/GoogleMapsProvider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <GoogleMapsProvider>
    <App />
  </GoogleMapsProvider>
);
