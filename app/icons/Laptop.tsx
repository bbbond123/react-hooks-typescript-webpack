import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Laptop: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg width={width} height={height} className={className} style={{ display: 'block' }} viewBox="0 0 24 24">
      <defs>
        <clipPath id="prefix__b">
          <path fill={color} d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__b)">
        <path
          fill={color}
          d="M20 18a2.006 2.006 0 0 0 2-2V6a2.006 2.006 0 0 0-2-2H4a2.006 2.006 0 0 0-2 2v10a2.006 2.006 0 0 0 2 2H0v2h24v-2zM4 6h16v10H4z"
        />
        <g transform="translate(6 9)">
          <circle fill={color} cx={0.812} cy={0.812} r={0.812} />
          <rect fill={color} width={7.997} height={1.624} rx={0.812} transform="translate(2.436)" />
          <rect fill={color} width={7.997} height={1.624} rx={0.812} transform="translate(2.436 2.436)" />
        </g>
      </g>
    </svg>
  );
};

export default Laptop;
