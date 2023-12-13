import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Store } from "./Store/Store";
import { Provider } from "react-redux";
import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next  } from "react-i18next";

const apiKey = "c06xorC6TrV-SmOEGSt2Fg";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
.use(HttpBackend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  fallbackLng: "en",

  ns: ["default"],
  defaultNS: "default",

  supportedLngs: ["en","uz","ru"],
  
  backend: {
    loadPath: loadPath
  }
})
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <React.StrictMode >
        <Suspense fallback='Loading...'>
          <App />
        </Suspense>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
