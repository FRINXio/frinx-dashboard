import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Panel.css";

function Panel(props) {
  const [highlight, setHighlight] = useState(false);

  return (
    <div onClick={() => window.location = props.link}>
      {!props.disabled ? (
        <div
          className="panel"
          style={props.style}
          onMouseEnter={() => setHighlight(true)}
          onMouseLeave={() => setHighlight(false)}
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
      ) : (
        <div style={{ boxShadow: "none" }} className="panel disabledPanel">
          <div className="title">{props.title}</div>
          <div className="desc">{props.desc}</div>
          <div className={!highlight ? "icon" : "icon lightened"}>
            <FontAwesomeIcon icon={props.icon} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Panel;
