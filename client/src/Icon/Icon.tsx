/**@jsx jsx */
import { jsx } from '@emotion/core';
import * as icons from './svg';

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[];

export type IconProps = {
  icon: IconType;
  color?: string;
  size?: string | number;
  className?: string;
};

const Icon = ({ icon, color, size, className }: IconProps) => {
  const SVGIcon = icons[icon];
  return <SVGIcon css={{ fill: color || 'currentColor', width: size, height: 'auto' }} className={className} />;
};

export default Icon;
