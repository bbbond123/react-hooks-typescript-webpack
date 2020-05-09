import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const GCoin: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const className = props.className;
  return (
    <svg width={width} height={height} className={className} style={{ display: 'block' }} viewBox="0 0 24 24">
      <rect x="0" y="0" width="24" height="24" rx="15" ry="15" fill="#FFC824" />
      <rect x="4" y="4" width="16" height="16" rx="15" ry="15" fill="#FFA23E" />
    </svg>
  );
};

export default GCoin;
