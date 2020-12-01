import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Panel from "./panel/Panel";
import {
  faCogs,
  faLaptopCode,
  faBoxOpen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function isURLDisabled(envValue) {
  return envValue !== "true";
}

const PANELS = [
  {
    title: "UniConfig",
    desc: "Manage network device configurations.",
    url: process.env.REACT_APP_URL_UNICONFIG,
    isExternal: false,
    icon: faLaptopCode,
    isDisabled: isURLDisabled(process.env.REACT_APP_URL_UNICONFIG_ENABLED),
  },
  {
    title: "UniFlow",
    desc: "Create, organize and execute workflows.",
    url: process.env.REACT_APP_URL_UNIFLOW,
    isExternal: false,
    icon: faCogs,
    isDisabled: isURLDisabled(process.env.REACT_APP_URL_UNIFLOW_ENABLED),
  },
  {
    title: "Inventory & Logs",
    desc: "Manage network device configurations.",
    url: process.env.REACT_APP_URL_INVENTORY,
    isExternal: false,
    icon: faBoxOpen,
    isDisabled: isURLDisabled(process.env.REACT_APP_URL_INVENTORY_ENABLED),
  },
  {
    title: "User Management",
    desc: "Manage users and permissions.",
    url: process.env.REACT_APP_URL_USER_MGMT,
    isExternal: true,
    icon: faUsers,
    isDisabled: isURLDisabled(process.env.REACT_APP_URL_USER_MGMT_ENABLED),
  },
];

function Dashboard() {
  return (
    <Container>
      <Row>
        {PANELS.map((p) => {
          return (
            <Col key={p.title}>
              <Panel
                title={p.title}
                desc={p.desc}
                icon={p.icon}
                style={{ background: "linear-gradient" }}
                url={p.url}
                isExternal={p.isExternal}
                isDisabled={p.isDisabled}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Dashboard;
