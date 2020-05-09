import React from 'react';

interface IconProps {
  active?: boolean;
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Deposit: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#878787';
  const className = props.className;
  const active = props.active;
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(1)">
        <path fill="none" d="M0,0H32V32H0Z" />
        <path
          fill={color}
          transform="translate(0 0)"
          d="M28.579,9.182V5.889A2.874,2.874,0,0,0,25.737,3H5.842A2.865,2.865,0,0,0,3,5.889V26.111A2.865,2.865,0,0,0,5.842,29H25.737a2.874,2.874,0,0,0,2.842-2.889V22.818A2.9,2.9,0,0,0,30,20.333V11.667A2.9,2.9,0,0,0,28.579,9.182Zm-1.421,2.484v8.667H17.211V11.667ZM5.842,26.111V5.889H25.737V8.778H17.211a2.874,2.874,0,0,0-2.842,2.889v8.667a2.874,2.874,0,0,0,2.842,2.889h8.526v2.889Z"
        />
        <circle cx="1.5" cy="1.5" r="1.5" fill={color} transform="translate(20.024 14.5)" />
        <g transform="translate(-64 -144)">
          <circle fill="#fff" stroke="#fff" strokeWidth="2px" cx="7" cy="7" r="7" transform="translate(64 162)" />
          <circle
            fill={active ? '#fff' : color}
            stroke={color}
            strokeWidth="2px"
            cx="5"
            cy="5"
            r="5"
            transform="translate(66 164)"
          />
          <path
            fill={active ? color : '#fff'}
            transform="translate(74.941 171.996)"
            d="M-.083-2.246H-3.1V.768H-4.612V-2.246H-7.641V-3.768h3.029V-6.8H-3.1v3.029H-.083Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default Deposit;
