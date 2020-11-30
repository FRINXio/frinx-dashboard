import React from "react";
import {MsalProvider} from "@azure/msal-react";
import {PublicClientApplication} from "@azure/msal-browser";
import Dashboard from "./dashboard/Dashboard";
import Header from "./header/Header";
import {LogLevel} from "@azure/msal-common";
import {authEnabled} from "./header/UserNav";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

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

function message() {
  const urlParams = new URLSearchParams(window.location?.search);
  const message = urlParams.get("message")
  const messageLevel = urlParams.get("message_level")

  // TODO this causes a warning in browser
  // Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node

  if (message) {
    switch (messageLevel) {
      default:
      case 'info':
        NotificationManager.info(message);
        break;
      case 'success':
        NotificationManager.success(message);
        break;
      case 'warning':
        NotificationManager.warning(message);
        break;
      case 'error':
        NotificationManager.error(message);
        break;
    }
  }
}

class App extends React.Component {
  componentDidMount() {
    message();
  }

  render() {
    if (authEnabled()) {
      return (
        <MsalProvider instance={pca}>
          <Header/>
          <Dashboard/>
          <NotificationContainer/>
        </MsalProvider>
      );
    } else {
      return (<>
        <Header/>
        <Dashboard/>
        <NotificationContainer correlationId="notificationContainer"/>
      </>);
    }
  }
}

export default App;
