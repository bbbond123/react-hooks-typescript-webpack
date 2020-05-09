import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
  active?: boolean;
}

const SquareUserInfo: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#ccc';
  const active = props.active;
  const className = props.className;
  return (
    <svg width={width} height={height} className={className} style={{ display: 'block' }} viewBox="0 0 44 44">
      <g>
        <path
          id="prefix__Path_81104"
          data-name="Path 81104"
          fill={active ? color : 'none'}
          d="M36 2H8a6 6 0 0 0-6 6v28a6 6 0 0 0 6 6h28a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6zM22.5 8a6.75 6.75 0 1 1-6.75 6.75A6.747 6.747 0 0 1 22.5 8zm-3.87 24.41l-.88.88V35H9v-5.06c0-4.49 8.99-6.75 13.5-6.75a22.974 22.974 0 0 1 4.77.59l-2.75 2.75a17.122 17.122 0 0 0-2.02-.13c-5.01 0-10.29 2.46-10.29 3.54v1.86h7.05zm2.13 5.5v-3.38l9.97-9.97 3.38 3.38-9.97 9.97zM36 35h-4.71l3.78-3.78.93-.93zm.71-9.67l-1.65 1.65-3.38-3.38 1.65-1.65a.891.891 0 0 1 .64-.26.935.935 0 0 1 .64.26l2.11 2.11a.89.89 0 0 1-.01 1.27z"
        />
        <path
          id="prefix__Path_81105"
          data-name="Path 81105"
          fill={active ? color : 'none'}
          d="M22.5 18.29a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 1 0 0 7.08z"
        />
        <path
          id="prefix__Path_81106"
          data-name="Path 81106"
          fill={color}
          d="M36 0H8a8.011 8.011 0 0 0-8 8v28a8.011 8.011 0 0 0 8 8h28a8.011 8.011 0 0 0 8-8V8a8.011 8.011 0 0 0-8-8zm6 36a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6h28a6 6 0 0 1 6 6z"
        />
        <path
          id="prefix__Path_81107"
          data-name="Path 81107"
          fill={active ? '#fff' : color}
          d="M12.21 29.94c0-1.08 5.28-3.54 10.29-3.54a17.122 17.122 0 0 1 2.02.13l2.75-2.75a22.974 22.974 0 0 0-4.77-.59c-4.51 0-13.5 2.26-13.5 6.75V35h8.76v-1.71l.88-.88.62-.62h-7.05z"
        />
        <path
          id="prefix__Path_81108"
          data-name="Path 81108"
          fill={active ? '#fff' : color}
          d="M22.5 21.5a6.75 6.75 0 0 0 0-13.5 6.75 6.75 0 0 0 0 13.5zm0-10.29a3.54 3.54 0 1 1-3.53 3.54 3.549 3.549 0 0 1 3.53-3.54z"
        />
        <path
          id="prefix__Path_81109"
          data-name="Path 81109"
          fill={active ? '#fff' : color}
          d="M31.29 35H36v-4.71l-.94.93z"
        />
        <path
          id="prefix__Path_81110"
          data-name="Path 81110"
          fill={active ? '#fff' : color}
          d="M30.72 24.57l-9.96 9.96v3.38h3.37l9.97-9.97z"
        />
        <path
          id="prefix__Path_81111"
          data-name="Path 81111"
          fill={active ? '#fff' : color}
          d="M34.61 21.95a.891.891 0 0 0-.64-.26.935.935 0 0 0-.64.26l-1.65 1.65 3.38 3.38 1.65-1.65a.9.9 0 0 0 0-1.27z"
        />
      </g>
    </svg>
  );
};

export default SquareUserInfo;
