import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Avatar: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg className={className} width={width} height={height} style={{ display: 'block' }} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M20.88 20.88H3.12V18c0-3.48 5.88-4.92 8.88-4.92s8.88 1.44 8.88 4.92zm-15.96-1.8h14.16V18c0-1.68-4.32-3.12-7.08-3.12S4.92 16.32 4.92 18z"
      />
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill={color}
        d="M12 11.76a4.841 4.841 0 0 1-4.92-4.8A4.942 4.942 0 0 1 12 2.04a4.942 4.942 0 0 1 4.92 4.92 4.806 4.806 0 0 1-1.44 3.48A5.228 5.228 0 0 1 12 11.76zm0-7.92a3.177 3.177 0 0 0-3.12 3.12A3.177 3.177 0 0 0 12 10.08a3 3 0 0 0 2.16-.96 3.278 3.278 0 0 0 .96-2.28 3.074 3.074 0 0 0-3.12-3z"
      />
    </svg>
  );
};

export default Avatar;
