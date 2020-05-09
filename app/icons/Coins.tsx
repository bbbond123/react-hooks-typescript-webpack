import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Coins: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg className={className} width={width} height={height} style={{ display: 'block' }} viewBox="0 0 24 24">
      <defs>
        <clipPath id="prefix__a">
          <path d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <path
          fill={color}
          d="M10.418 5.563a7.375 7.375 0 1 0 7.375 7.375 7.4 7.4 0 0 0-7.375-7.375m0-1.844a9.219 9.219 0 1 1-9.219 9.219 9.216 9.216 0 0 1 9.219-9.219z"
        />
        <path d="M13.663 3.719a9.219 9.219 0 1 0 9.219 9.219 9.216 9.216 0 0 0-9.219-9.219z" fill="#fff" />
        <path
          fill={color}
          d="M13.663 5.563a7.375 7.375 0 1 0 7.375 7.375 7.4 7.4 0 0 0-7.375-7.375m0-1.844a9.219 9.219 0 1 1-9.219 9.219 9.216 9.216 0 0 1 9.219-9.219z"
        />
        <path fill="none" d="M2.6 1.875h22.125V24H2.6z" />
        <path
          fill={color}
          d="M9.514 12.177v1.308h2.789v1.188H9.514v1.308h2.789v2.488h2.4v-2.488h2.789v-1.308H14.7v-1.188h2.789v-1.308h-2.028l2.212-3.711.484-.737h-2.328l-2.212 3.711-2.212-3.526H8.961l.369.553 2.213 3.711z"
        />
      </g>
    </svg>
  );
};

export default Coins;
