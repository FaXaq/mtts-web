import React from "react";
import { COLORS } from "../../assets/colors.js";

interface LogoProps {
  Color?: string;
}

const Logo: React.FC<LogoProps> = ({ Color } = { Color: "white" }) => (
  <svg
    className="block h-full"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="72" cy="50" r="13" fill={Color} fill-opacity="0.333" />
    <circle cx="50" cy="50" r="13" fill={Color} fill-opacity="0.666" />
    <circle cx="28" cy="50" r="13" fill={Color} />
  </svg>
);

Logo.defaultProps = {
  Color: COLORS.white
};

export default Logo;
