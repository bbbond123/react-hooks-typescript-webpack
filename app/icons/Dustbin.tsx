import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Dustbin: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg width={width} height={height} {...props} className={className}>
      <path
        d="M6.236 5.108l-1.45 1.45-1.456-1.45-.964.964 1.456 1.45-1.45 1.45.964.964 1.45-1.45 1.45 1.45.964-.964-1.45-1.45 1.45-1.45zM7.18.684L6.5 0H3.077l-.684.684H0v1.367h9.573V.684zM.68 10.941a1.372 1.372 0 001.368 1.368h5.47a1.372 1.372 0 001.368-1.368V2.735H.684zM2.051 4.1h5.47v6.838h-5.47z"
        fill={color}
      />
    </svg>
  );
};

export default Dustbin;
