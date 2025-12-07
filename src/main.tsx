import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import GoogleMapsProvider from "./components/GoogleMapsProvider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <GoogleMapsProvider>
      <App />
    </GoogleMapsProvider>
  </HelmetProvider>
);
