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
  const className = props.className;

  return (
    <svg className={className} width={width} height={height} style={{ display: 'block' }} viewBox="0 0 24 24">
      <path
        data-name="Path 82063"
        d="M18.775 15.152a3.618 3.618 0 0 0-2.881 1.426l-6.366-3.227a3.644 3.644 0 0 0-.007-1.875l6.33-3.311a3.61 3.61 0 1 0-.591-1.255l-6.352 3.323a3.624 3.624 0 1 0 .016 4.367l6.355 3.22a3.625 3.625 0 1 0 3.5-2.668z"
        fill="rgba(0,0,0,0.38)"
      />
      <path data-name="Path 82064" d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export default Speaker;
