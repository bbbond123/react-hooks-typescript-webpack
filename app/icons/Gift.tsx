import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Gift: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg width={width} height={height} className={className} style={{ display: 'block' }} viewBox="0 0 24 24">
      <defs>
        <clipPath id="prefix__a">
          <path d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <path
          fill={color}
          d="M20 6h-2.18a2.993 2.993 0 0 0-5.32-2.65l-.5.67-.5-.68A2.994 2.994 0 0 0 6.18 6H4a1.985 1.985 0 0 0-1.99 2L2 19a1.993 1.993 0 0 0 2 2h16a1.993 1.993 0 0 0 2-2V8a1.993 1.993 0 0 0-2-2zm-5-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM9 4a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm11 15H4v-2h16zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20z"
        />
        <path d="M0 0h24v24H0z" fill="none" />
        <path fill={color} d="M3.96 13.981h16.08v3H3.96z" />
      </g>
    </svg>
  );
};

export default Gift;
