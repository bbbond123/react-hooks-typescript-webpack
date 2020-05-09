import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Exit: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#757575';
  const className = props.className;
  return (
    <svg className={className} width={width} height={height} style={{ display: 'block' }} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill={color}
        d="M19 3H5a2 2 0 0 0-2 2v2.308a1 1 0 0 0 1 1 1 1 0 0 0 1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1.308a1 1 0 0 0-1-1 1 1 0 0 0-1 1V19a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2V5a2.006 2.006 0 0 0-2-2z"
      />
      <path
        fill={color}
        d="M9.362 7.701a1 1 0 0 0-1.41 0l-3.59 3.59a1 1 0 0 0 0 1.41l3.59 3.589a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-1.88-1.89h8.67a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-8.67l1.88-1.879a1 1 0 0 0 0-1.41z"
      />
    </svg>
  );
};

export default Exit;
