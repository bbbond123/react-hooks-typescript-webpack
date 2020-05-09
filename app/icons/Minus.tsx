import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Minus: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const className = props.className;

  return (
    <svg width={width} height={height} {...props} className={className}>
      <path fill="none" stroke="#d1d1d1" strokeLinecap="round" strokeWidth={2} d="M1 1h9.418" />
    </svg>
  );
};

export default Minus;
