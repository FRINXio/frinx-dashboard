import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Panel.css";

function Panel(props) {
  const [highlight, setHighlight] = useState(false);

  return props.isDisabled ? (
    <div style={{ boxShadow: "none" }} className="panel disabledPanel">
      <div className="title">{props.title}</div>
      <div className="desc">{props.desc}</div>
      <div className={!highlight ? "icon" : "icon lightened"}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
    </div>
  ) : (
    <a
      href={props.url}
      target={props.isExternal ? "_blank" : undefined}
      rel={props.isExternal ? "noopener noreferrer" : undefined}
    >
      <div
        className="panel"
        style={props.style}
        onMouseEnter={() => {
          setHighlight(true);
        }}
        onMouseLeave={() => {
          setHighlight(false);
        }}
      >
        <div className="title">{props.title}</div>
        <div className="desc">{props.desc}</div>
        <div className={!highlight ? "icon" : "icon lightened"}>
          <FontAwesomeIcon icon={props.icon} />
        </div>
        <div className={!highlight ? "goButton" : "goButton highlighted"}>
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </div>
    </a>
  );
}

export default Panel;
