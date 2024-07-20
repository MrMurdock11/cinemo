import { FC, JSX } from 'react';

import classes from './Icon.module.css';

export interface IconProps {
  width?: number;
  height?: number;
  Icon: () => JSX.Element;
}

export const Icon: FC<IconProps> = ({ width, height, Icon }) => {
  return (
    <svg
      fill="none"
      width={width ?? 38}
      height={height ?? 38}
      className={classes.icon}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Icon />
    </svg>
  );
};
