import React from "react";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import Dashboard from "./dashboard/Dashboard";
import Header from "./header/Header";

const config = {
  auth: {
    clientId: "366fab79-6c61-4a24-8c2c-b2be2f48fe35",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },
};
const pca = new PublicClientApplication(config);

function App() {
  return (
    <MsalProvider instance={pca}>
      <Header />
      <Dashboard />
    </MsalProvider>
  );
}

export default App;
