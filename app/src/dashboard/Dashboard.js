import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Panel from "./panel/Panel";
import {
  faCogs,
  faLaptopCode,
  faBoxOpen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function urlEnabled(envValue) {
  return envValue === "true";
}

const PANELS = [
  {
    title: "UniConfig",
    desc: "Manage network device configurations.",
    link: process.env.REACT_APP_URL_UNICONFIG,
    icon: faLaptopCode,
    disabled: !urlEnabled(process.env.REACT_APP_URL_UNICONFIG_ENABLED),
  },
  {
    title: "UniFlow",
    desc: "Create, organize and execute workflows.",
    link: process.env.REACT_APP_URL_UNIFLOW,
    icon: faCogs,
    disabled: !urlEnabled(process.env.REACT_APP_URL_UNIFLOW_ENABLED),
  },
  {
    title: "Inventory & Logs",
    desc: "Manage network device configurations.",
    link: eval(process.env.REACT_APP_URL_INVENTORY),
    icon: faBoxOpen,
    disabled: !urlEnabled(process.env.REACT_APP_URL_INVENTORY_ENABLED),
  },
  {
    title: "User Management",
    desc: "Manage users and permissions.",
    link: process.env.REACT_APP_URL_USER_MGMT,
    external: true,
    icon: faUsers,
    disabled: !urlEnabled(process.env.REACT_APP_URL_USER_MGMT_ENABLED),
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
                link={p.link}
                external={p.external}
                disabled={p.disabled}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Dashboard;
