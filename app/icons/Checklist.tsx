import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Checklist: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const className = props.className;

  return (
    <svg width={width} height={height} {...props} className={className}>
      <path d="M12 4H0v2h12zm0-4H0v2h12zM0 10h8V8H0zm19.5-4.5L21 7l-6.99 7L9.5 9.5 11 8l3.01 3z" fill="#fff" />
    </svg>
  );
};

export default Checklist;
