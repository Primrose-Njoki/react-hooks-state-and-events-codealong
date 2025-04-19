import React,{useState} from "react";

function Toggle() {
  const [ison, setIson] =useState(false)

  function handleClick() {
    setIson ((ison) => !ison);
  }
  const color = ison ? "red": "white";

  return(
   <button style={{background:color}}onClick={handleClick}>{ison ? 'ON' :'OFF'}</button>
  );
}

export default Toggle;
