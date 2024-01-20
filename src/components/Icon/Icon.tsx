import React from "react";

import { Icons } from "./icons";

type IconNames = keyof typeof Icons;

export interface IconProps {
  icon: IconNames
  className?: string
}

export const Icon = ({
  icon,
  className,
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 1024 1024"
    width="15px"
    height="15px"
    color="currentColor"
  >
    {Icons[icon]}
  </svg>
)

export default Icon;
