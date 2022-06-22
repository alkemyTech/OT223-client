import React from "react";
import { Oval } from "react-loader-spinner";

const SetupLoader = ({
  width = 100,
  height = 100,
  strokeWidth = 5,
  color = "blue",
  secondaryColor = "white",
}) => {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={height}
      width={width}
      strokeWidth={strokeWidth}
      color={color}
      secondaryColor={secondaryColor}
    />
  );
};

export default SetupLoader;
