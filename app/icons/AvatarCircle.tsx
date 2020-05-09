import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const AvatarCircle: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#757575';
  const className = props.className;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={className} viewBox="0 0 24 24">
      <path fill="none" d="M0,0H24V24H0Z" />
      <path
        fill={color}
        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM7.07,18.28c.43-.9,3.05-1.78,4.93-1.78s4.51.88,4.93,1.78a7.925,7.925,0,0,1-9.86,0Zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36,2.33a8,8,0,1,1,12.72,0ZM12,6a3.5,3.5,0,1,0,3.5,3.5A3.491,3.491,0,0,0,12,6Zm0,5a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,11Z"
      />
    </svg>
  );
};

export default AvatarCircle;
