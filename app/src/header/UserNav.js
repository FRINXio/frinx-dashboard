import React, { useEffect } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import "./Header.css";

const UserNav = () => {
  const { instance, accounts, inProgress } = useMsal();
  useEffect(() => {
    if (inProgress === "none" && accounts.length > 0) {
      const authResultPromise = instance.acquireTokenSilent({
        account: accounts[0],
        scopes: ["User.Read"],
      });
      authResultPromise.then(value => {
        // Set ID token (JWT) to cookie
        // TODO now the token is in localStorage and also in cookie ... is that OK ?
        console.log(value.idToken);
        // TODO replace with universal-cookie lib
        document.cookie = `BearerToken=${value.idToken}; SameSite=None; Secure; path=/`;
      })
    }
  }, [inProgress]);

  return (
    <div className="user-nav">
      <UnauthenticatedTemplate>
        <Button
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
          console.log(authProps)
          console.log(authProps.accounts[0])
          return (
            <DropdownButton title={authProps.accounts[0].username} alignRight>
              <Dropdown.Item
                onClick={() => {
                  try {
                    instance.logout();
                  } catch(e) {
                    throw e;
                  } finally {
                    // FIXME cookie is deleted, but browser can still access services until F5 ? WHY ???
                    document.cookie = `BearerToken=;  expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
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
