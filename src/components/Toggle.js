import React, { useState } from "react";

function Toggle() {
  const [switchToggle, setSwitch] = useState(false);
  function toggleHandler() {
    setSwitch((switchToggle) => !switchToggle);
  }
  const color = switchToggle ? "red" : "blue";
  return (
    <button style={{ background: color }} onClick={toggleHandler}>
      {switchToggle ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
