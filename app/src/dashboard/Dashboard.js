import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Panel from "./panel/Panel";
import {
  faCogs,
  faLaptopCode,
  faBoxOpen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const PANELS = [
  {
    title: "UniConfig",
    desc: "Manage network device configurations.",
    link: "/service1",
    icon: faLaptopCode,
    disabled: false,
  },
  {
    title: "UniFlow",
    desc: "Create, organize and execute workflows.",
    link: "/uniflow/ui",
    icon: faCogs,
    disabled: false,
  },
  {
    title: "Inventory & Logs",
    desc: "Manage network device configurations.",
    link: `${window.location.protocol}//${window.location.hostname}:5601`,
    icon: faBoxOpen,
    disabled: false,
  },
  {
    title: "User Management",
    desc: "Manage users and permissions.",
    link: "https://aad.portal.azure.com",
    external: true,
    icon: faUsers,
    disabled: false,
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
