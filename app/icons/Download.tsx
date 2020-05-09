import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Download: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg width={width} height={height} className={className} style={{ display: 'block' }} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M16.577 13.229h-2.658V9.001h-3.838v4.228H7.423L12 17.811z" fill={color} />
      <path
        d="M17.143 2.409L6.857 2.4A1.95 1.95 0 0 0 4.8 4.206v16.258a1.95 1.95 0 0 0 2.057 1.806h10.286a1.95 1.95 0 0 0 2.057-1.806V4.206a1.943 1.943 0 0 0-2.057-1.797z"
        stroke={color}
        strokeWidth={1.6}
        fill="none"
      />
    </svg>
  );
};

export default Download;
