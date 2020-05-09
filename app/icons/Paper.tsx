import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Paper: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg width={width} height={height} className={className} style={{ display: 'block' }} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6a2.006 2.006 0 0 0-2 2v16a2 2 0 0 0 1.99 2H18a2.006 2.006 0 0 0 2-2V8zm4 18H6V4h7v5h5z"
        fill={color}
      />
    </svg>
  );
};

export default Paper;
