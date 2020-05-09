import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Menu: React.FC<IconProps> = (props) => {
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
      <path fill="none" d="M0 0h24v24H0z" />
      <g clipPath="url(#prefix__a)">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill={color}
          d="M7.742 7.261h8.5a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1 .987.987 0 0 1 1-1zM7.742 14.761h8.5a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1 .987.987 0 0 1 1-1zM7.742 11.011h8.5a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1 .987.987 0 0 1 1-1z"
        />
        <path fill="none" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
        <path fill={color} d="M12 4a8 8 0 1 0 8 8 8.024 8.024 0 0 0-8-8m0-2A10 10 0 1 1 2 12 10 10 0 0 1 12 2z" />
      </g>
    </svg>
  );
};

export default Menu;
