import React from 'react';

interface IconProps {
  active?: boolean;
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Transaction: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#878787';
  const className = props.className;

  return (
    <svg width={width} height={height} className={className} viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" d="M0,0H32V32H0Z" />
      <g transform="translate(2 1.333)">
        <rect fill={color} width="6.267" height="2.667" transform="translate(5.333 18.667)" />
        <rect fill={color} width="6.267" height="2.667" transform="translate(5.333 13.333)" />
        <rect fill={color} width="6.267" height="2.667" transform="translate(5.333 8)" />
        <path
          fill={color}
          d="M22.833,25H4.167V6.333H22.833v6H25.5v-6a2.675,2.675,0,0,0-2.667-2.667h-5.6a3.947,3.947,0,0,0-7.467,0H3.633a2.872,2.872,0,0,0-1.867,1.6A3.138,3.138,0,0,0,1.5,6.333V25a3.138,3.138,0,0,0,.267,1.067,2.789,2.789,0,0,0,.533.8,1.851,1.851,0,0,0,1.333.667h19.2A2.675,2.675,0,0,0,25.5,24.867v-6H22.833ZM13.5,3.4a1.052,1.052,0,0,1,1.067,1.067A.981.981,0,0,1,13.5,5.533c-.667,0-.933-.667-.933-1.2A.911.911,0,0,1,13.5,3.4Z"
          transform="translate(-1.5 -1)"
        />
        <path fill={color} d="M16.833,12V8L11.5,13.333l5.333,5.333v-4h9.333V12Z" transform="translate(1.833 1.333)" />
      </g>
    </svg>
  );
};

export default Transaction;
