import React from "react";
import {MsalProvider} from "@azure/msal-react";
import {PublicClientApplication} from "@azure/msal-browser";
import Dashboard from "./dashboard/Dashboard";
import Header from "./header/Header";
import {LogLevel} from "@azure/msal-common";
import {authEnabled} from "./header/UserNav";

const config = {
  auth: {
    clientId: process.env.REACT_APP_AD_CLIENT_ID || "",
    redirectUri: process.env.REACT_APP_AD_REDIRECT_URL || "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          case LogLevel.Info:
          default:
            console.info(message);
        }
      },
      // Do not log personal and org data
      piiLoggingEnabled: false
    },
  }
};

let pca = null
if (authEnabled()) {
  pca = new PublicClientApplication(config);
}

function App() {
  if (authEnabled()) {
    return (
      <MsalProvider instance={pca}>
        <Header/>
        <Dashboard/>
      </MsalProvider>
    );
  } else {
    return(<>
      <Header />
      <Dashboard />
    </>);
  }
}

export default App;
