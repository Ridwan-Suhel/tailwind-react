import React from "react";

const Link = (props) => {
  return (
    <li>
      <a href={props.link.link}>{props.link.name}</a>
    </li>
  );
};

export default Link;
