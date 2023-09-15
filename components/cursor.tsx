"use client"

import React from "react";
import useMousePosition from "../hooks/mouse_pos.js";
const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  
  return (
    <div 
      style={{ 
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -999999,
        pointerEvents: "none",
      }}
    >
      <svg
        width={100}
        height={100}
        viewBox="0 0 50 50"
        style={{
          stroke: "red",
          fill: "red",
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: "translate(-50%, -50%)",
        }}
      >
        <circle
          cx="25"
          cy="25"
          r="24"
        />
      </svg>
    </div>
  );
};

export default Cursor;