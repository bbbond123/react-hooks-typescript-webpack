import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Caret: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#757575';
  const className = props.className;
  return (
    <svg className={className} width={width} height={height} style={{ display: 'block' }} viewBox="0 0 40 40">
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        stroke={color}
        strokeWidth={5}
        d="M19 5L5 19l14 14"
      />
    </svg>
  );
};

export default Caret;
