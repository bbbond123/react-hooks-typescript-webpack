import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const Arrow: React.FC<IconProps> = (props) => {
  const width = props.width || 24;
  const height = props.height || 24;
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" className={className}>
      <path fill={color} d="M7 10l5 5 5-5z" />
    </svg>
  );
};

export default Arrow;
