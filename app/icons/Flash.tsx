import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Flash: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const className = props.className;

  return (
    <svg width={width} height={height} {...props} className={className}>
      <path d="M11.173 6.983H6.39L10.824 0H5.241L.004 10.474h4.12L.004 20.25z" fill="#fdffe8" />
    </svg>
  );
};

export default Flash;
