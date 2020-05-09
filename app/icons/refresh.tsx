import React from 'react';

interface RefreshIconProps {
  width?: number;
  height?: number;
  color?: string;
  bgColor?: string;
  className?: string;
}

const RefreshIcon: React.FC<RefreshIconProps> = (props) => {
  const width = props.width || 20;
  const height = props.height || 20;
  const color = props.color || '#04BAEE';
  const bgColor = props.bgColor || 'transparent';
  const className = props.className;
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 20 20">
      <rect x="0" y="0" width="20" height="20" rx="15" ry="15" fill={bgColor} />
      <path
        fill={color}
        d="M14.238 5.762A6 6 0 1 0 15.8 11.5h-1.56a4.5 4.5 0 1 1-4.24-6 4.435 4.435 0 0 1 3.164 1.335L10.751 9.25H16V4z"
      />
      <path fill="none" d="M0 0h20v20H0z" />
    </svg>
  );
};

export default RefreshIcon;
