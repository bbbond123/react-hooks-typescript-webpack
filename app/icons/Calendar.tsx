import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Calendar: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#9e9e9e';
  const className = props.className;
  return (
    <svg className={className} width={width} height={height} style={{ display: 'block' }}>
      <path
        d="M9 11H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm2-7h-1V2h-2v2H8V2H6v2H5a1.991 1.991 0 0 0-1.99 2L3 20a2 2 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2V6a2.006 2.006 0 0 0-2-2zm0 16H5V9h14z"
        fill={color}
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export default Calendar;
