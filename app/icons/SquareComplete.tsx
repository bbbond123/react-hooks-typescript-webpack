import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
  active?: boolean;
}

const SquareComplete: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#ccc';
  const active = props.active;
  const className = props.className;
  return (
    <svg width={width} height={height} className={className} style={{ display: 'block' }} viewBox="0 0 44 44">
      <g transform="translate(-.766)">
        <path
          fill={color}
          d={
            active
              ? 'M36,44H8a8.011,8.011,0,0,1-8-8V8A8.011,8.011,0,0,1,8,0H36a8.011,8.011,0,0,1,8,8V36A8.011,8.011,0,0,1,36,44Z'
              : 'M36,44H8a8.011,8.011,0,0,1-8-8V8A8.011,8.011,0,0,1,8,0H36a8.011,8.011,0,0,1,8,8V36A8.011,8.011,0,0,1,36,44ZM8,2A6,6,0,0,0,2,8V36a6,6,0,0,0,6,6H36a6,6,0,0,0,6-6V8a6,6,0,0,0-6-6Z'
          }
          transform="translate(0.766)"
        />
        <g id="prefix__Group_23933" data-name="Group 23933">
          <path
            id="prefix__Rectangle_9953"
            data-name="Rectangle 9953"
            fill={active ? '#fff' : color}
            transform="translate(8.53 10.28)"
            d="M0 0h27.33v3.52H0z"
          />
          <path
            id="prefix__Path_81118"
            data-name="Path 81118"
            fill={active ? '#fff' : color}
            d="M8.53 27.87v3.52h14.23a9.415 9.415 0 0 1 1.1-3.52z"
          />
          <path
            id="prefix__Rectangle_9954"
            data-name="Rectangle 9954"
            fill={active ? '#fff' : color}
            transform="translate(8.53 19.08)"
            d="M0 0h27.33v3.52H0z"
          />
          <path
            id="prefix__Path_81119"
            data-name="Path 81119"
            fill={active ? '#fff' : color}
            d="M32.1 24.98a7.4 7.4 0 1 0 7.4 7.4 7.4 7.4 0 0 0-7.4-7.4zm5.19 4.44l-6.67 6.66-3.7-3.7 1.04-1.04 2.66 2.65 5.63-5.62z"
          />
        </g>
      </g>
    </svg>
  );
};

export default SquareComplete;
