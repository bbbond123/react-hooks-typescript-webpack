import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Speaker: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#fff';
  const className = props.className;
  return (
    <svg className={className} width={width} height={height} style={{ display: 'block' }} viewBox="0 0 24 24">
      <path
        d="M3 9v6h4l5 5V4L7 9zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05A4.474 4.474 0 0 0 16.5 12zM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a8.994 8.994 0 0 0 0-17.54z"
        fill={color}
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export default Speaker;
