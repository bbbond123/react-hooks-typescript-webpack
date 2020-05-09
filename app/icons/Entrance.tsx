import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Entrance: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg className={className} width={width} height={height} style={{ display: 'block' }} viewBox="0 0 32 32">
      <path d="M0 0h32v32H0z" fill="none" />
      <path
        d="M14.252 22.2a1.438 1.438 0 0 0 2.037 0l5.186-5.186a1.438 1.438 0 0 0 0-2.037l-5.186-5.188a1.438 1.438 0 0 0-2.037 0 1.438 1.438 0 0 0 0 2.037l2.716 2.73H4.444A1.449 1.449 0 0 0 3 16a1.449 1.449 0 0 0 1.444 1.444h12.524l-2.716 2.716a1.452 1.452 0 0 0 0 2.04zM26.111 3H5.889A2.888 2.888 0 0 0 3 5.889v4.333a1.449 1.449 0 0 0 1.444 1.444 1.449 1.449 0 0 0 1.444-1.444V7.333a1.449 1.449 0 0 1 1.445-1.444h17.334a1.449 1.449 0 0 1 1.444 1.444v17.334a1.449 1.449 0 0 1-1.444 1.444H7.333a1.449 1.449 0 0 1-1.444-1.444v-2.889a1.449 1.449 0 0 0-1.444-1.444A1.449 1.449 0 0 0 3 21.778v4.333A2.9 2.9 0 0 0 5.889 29h20.222A2.9 2.9 0 0 0 29 26.111V5.889A2.9 2.9 0 0 0 26.111 3z"
        fill={color}
      />
    </svg>
  );
};

export default Entrance;
