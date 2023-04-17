import React from "react";

export default function Button(props) {
  return (
    <button
      {...props}
      className="bg-blue-500  px-3 py-1 rounded hover:rounded-full"
    >
      {props.text}
    </button>
  );
}
