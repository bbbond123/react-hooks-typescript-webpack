import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const QuestionCircle: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg width={width} height={height} className={className} style={{ display: 'block' }} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 1.667A10.333 10.333 0 1 0 22.334 12 10.337 10.337 0 0 0 12 1.667z"
        stroke={color}
        strokeWidth={1.6}
        fill="none"
      />
      <path
        d="M13.034 19.233h-2.067v-2.067h2.067zm2.139-8.008l-.93.951a3.619 3.619 0 0 0-1.076 1.745 4.74 4.74 0 0 0-.134 1.178h-2.066v-.517a4.18 4.18 0 0 1 .227-1.354 4.131 4.131 0 0 1 .982-1.571l1.281-1.3a2.028 2.028 0 0 0 .568-1.86 2.057 2.057 0 0 0-1.436-1.581 2.084 2.084 0 0 0-2.552 1.312.913.913 0 0 1-.847.672h-.31a.9.9 0 0 1-.847-1.157 4.141 4.141 0 0 1 3.334-2.925 4.2 4.2 0 0 1 4 1.86 3.417 3.417 0 0 1-.194 4.546z"
        fill={color}
      />
    </svg>
  );
};

export default QuestionCircle;
