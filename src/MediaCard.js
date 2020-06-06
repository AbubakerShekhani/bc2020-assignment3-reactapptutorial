import React from "react";
import "./styles.css";

export default function MediaCard({ title, body, imageURL }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <img src={imageURL} alt="alt text" width="200" height ="200"/>
    </div>
  );
}
