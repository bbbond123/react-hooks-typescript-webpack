import React from 'react';

interface EmptyIconProps {
  // width: number
  // height: number
  color?: string;
  className?: string;
}

const EmptyIcon: React.FC<EmptyIconProps> = (props) => {
  // const width = props.width || 24
  // const height = props.height || 24
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} viewBox="0 0 1024 1024">
      <path
        className={className}
        fill={color}
        d="M839.2 101.3H184.9L65.3 539.5 64 922.7h896V549.3l-120.8-448zM241.9 176h540.3L884 549.3H678.7l-74.7 112H420l-74.7-112H140.1L241.9 176z"
      />
    </svg>
  );
};

export default EmptyIcon;
