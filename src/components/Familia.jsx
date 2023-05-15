import React, { cloneElement } from "react";

const familia = (props) => {
  return (
    <div>
      {props.children.map((child, i) => {
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
};

export default familia;