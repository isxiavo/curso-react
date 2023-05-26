import React from "react";

export default (props) => {
  return (
    <div>
      <label></label>
      <input onChange={(e) => props.sendInfo(+e.target.value)} />
    </div>
  );
};
