import React from "react";
import { Oval } from "react-loader-spinner";

function SetupLoader({
  width,
  height,
  strokeWidth,
  color,
  secondaryColor,
  display,
}) {
  if (display) {
    return (
      <Oval
        ariaLabel="loading-indicator"
        height={height || 100}
        width={width || 100}
        strokeWidth={strokeWidth || 5}
        color={color || "blue"}
        secondaryColor={secondaryColor || "white"}
      />
    );
  }
}

export default SetupLoader;