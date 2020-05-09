import React from 'react';

interface IconProps {
  active?: boolean;
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Withdrawal: React.FC<IconProps> = (props) => {
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
            d="M2.4-2.519H-4.336V-4.143H2.4Z"
            transform="translate(71.936 172.412)"
          />
        </g>
      </g>
    </svg>
  );
};

export default Withdrawal;
