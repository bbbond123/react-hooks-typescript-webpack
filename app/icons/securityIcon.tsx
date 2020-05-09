import React from 'react';

interface SecurityIconProps {
  // width: number
  // height: number
  color?: string;
  className?: string;
}

const SecurityIcon: React.FC<SecurityIconProps> = (props) => {
  // const width = props.width || 24
  // const height = props.height || 24
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 33 33`}>
      <path fill="none" d={`M0 0h24v24H0z`} />
      <path
        fill={color}
        className={className}
        d="M16 4.266l9.333 4.133v6.267c0 6-4 11.6-9.333 13.2-5.333-1.6-9.333-7.2-9.333-13.2V8.4L16 4.266m0-2.933L4 6.666v8c0 7.333 5.067 14.267 12 16 6.933-1.733 12-8.667 12-16v-8L16 1.333z"
      />
      <path fill={color} className={className} d="M14.133 22l-4.8-4.8 2-1.867 2.8 2.8 7.2-7.066 1.867 1.867z" />
    </svg>
  );
};

export default SecurityIcon;
