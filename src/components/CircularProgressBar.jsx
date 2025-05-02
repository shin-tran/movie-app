import React from "react";

const CircularProgressBar = ({ persent, size, strokeWidth, strokeColor }) => {
  const radius = size / 2 - strokeWidth;
  const perimeter = 2 * Math.PI * radius;
  return (
    <div>
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke="white"
          strokeWidth={`${strokeWidth}vw`}
        />
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          fill="none"
          stroke={strokeColor}
          strokeWidth={5}
          strokeDasharray={`${perimeter}vw`}
          strokeDashoffset={`${perimeter - (persent / 100) * perimeter}vw`}
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          strokeLinecap="round"
        />
        <text
          x={`${size / 2}vw`}
          y={`${size / 2 + 0.01}vw`}
          fill="white"
          fontSize={"1.2vw"}
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {persent}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
