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
      instance.acquireTokenSilent({
        account: accounts[0],
        scopes: ["User.Read"],
      });
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
          return (
            <DropdownButton title={authProps.accounts[0].username} alignRight>
              <Dropdown.Item
                onClick={() => {
                  instance.logout();
                }}
              >
                Logout
              </Dropdown.Item>
            </DropdownButton>
          );
        }}
      </AuthenticatedTemplate>
    </div>
  );
};

export default UserNav;
