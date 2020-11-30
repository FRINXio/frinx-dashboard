import React, { useEffect } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import "./Header.css";

// Set ID token (JWT) to cookie
function setCookieWithToken(value) {
  document.cookie = `BearerToken=${value.idToken}; SameSite=None; Secure; path=/`;
}

function removeCookieToken() {
  document.cookie = `BearerToken=;  expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

export function authEnabled() {
  return process.env.REACT_APP_AUTH_ENABLED === "true";
}

const UserNav = () => {
  const { instance, accounts, inProgress } = useMsal();
  useEffect(() => {
    if (inProgress === "none" && accounts.length > 0) {

      const authResultPromise = instance.acquireTokenSilent({
        account: accounts[0],
        scopes: ["User.Read"],
      });

      // TODO now the token is in localStorage and also in cookie ... is that OK ?
      authResultPromise.then(value => {
        setCookieWithToken(value);
      })
    }
  }, [inProgress, accounts, instance]);

  return (
    <div className="user-nav">
      <UnauthenticatedTemplate>
        <Button
          disabled={!authEnabled()}
          onClick={() => {
            instance.loginPopup({
              scopes: ["openid", "profile", "User.Read.All"],
            });
          }}
        >
          Login
        </Button>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        {(authProps) => {
          return (
            <DropdownButton title={authProps.accounts[0].username} alignRight>
              <Dropdown.Item
                onClick={() => {
                  try {
                    instance.logout();
                  } catch(e) {
                    throw e;
                  } finally {
                    removeCookieToken();
                  }
                }}
              >
                Logout
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  window.open("https://myaccount.microsoft.com/?client_id=" + authProps.accounts[0].localAccountId);
                }}
              >
                Profile
              </Dropdown.Item>
            </DropdownButton>
          );
        }}
      </AuthenticatedTemplate>
    </div>
  );
};

export default UserNav;
