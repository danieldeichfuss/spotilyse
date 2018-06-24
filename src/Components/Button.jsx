import React from "react";

export default function Button({ text, callback }) {
  return (
    <button className="Button" onClick={callback}>
      {text}
    </button>
  );
}
