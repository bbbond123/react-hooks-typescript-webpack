import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Register: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg className={className} width={width} height={height} style={{ display: 'block' }} viewBox="0 0 32 32">
      <path fill={color} d="M14.1 16.3h-.6c-3.6 0-10.7 1.8-10.7 5.3v2.7h10.8a9.736 9.736 0 0 1 .5-8z" />
      <circle fill={color} cx={5.3} cy={5.3} r={5.3} transform="translate(8.2 3)" />
      <path
        fill={color}
        d="M23.1 13.1a7.8 7.8 0 1 0 7.8 7.8 7.81 7.81 0 0 0-7.8-7.8zm5.8 7.8a5.8 5.8 0 1 1-5.8-5.8 5.8 5.8 0 0 1 5.8 5.8z"
      />
      <path fill={color} d="M21.8 21.9l-2.5-2.5-1.4 1.5 3.9 3.8 5.9-5.9-1.5-1.4z" />
      <path d="M0 0h32v32H0z" fill="none" />
    </svg>
  );
};

export default Register;
