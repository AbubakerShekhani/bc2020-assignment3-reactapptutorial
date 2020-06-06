import React from "react";
import "./styles.css";

export default function Gate({ isOpen }) {
  return <div>Gate is {isOpen === true ? "Open" : "Closed"}</div>;
}
