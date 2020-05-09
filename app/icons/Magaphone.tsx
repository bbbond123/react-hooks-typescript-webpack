import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Magaphone: React.FC<IconProps> = (props) => {
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
      <path d="M0 0h24v24H0z" fill="none" />
      <g clipPath="url(#prefix__a)">
        <path
          fill={color}
          d="M9.981 19.344H3l1-4.471h-.778v-6.6h3.767l6.981-4.355v14.756l-4.1-2.456v3.13zm-4.765-1.788h2.992v-4.472l4.1 2.459V7.16l-4.765 2.906H4.994v3.018h1.219zM22 11.299a8.3 8.3 0 0 0-5.54-7.713v1.789a6.608 6.608 0 0 1 3.878 5.925 6.608 6.608 0 0 1-3.878 5.924v1.789A8.414 8.414 0 0 0 22 11.299z"
        />
        <path
          fill={color}
          d="M18.643 11.3a4.9 4.9 0 0 0-2.216-4.057v1.465a3.585 3.585 0 0 1 0 5.183v1.465a5.223 5.223 0 0 0 2.216-4.056z"
        />
      </g>
    </svg>
  );
};

export default Magaphone;
