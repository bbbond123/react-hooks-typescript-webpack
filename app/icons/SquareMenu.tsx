import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const SquareMenu: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#fff';
  const className = props.className;
  return (
    <svg width={width} height={height} className={className} style={{ display: 'block' }} viewBox="0 0 30 30">
      <g fill="none">
        <g data-name="Rectangle 741" transform="translate(-325 -10)">
          <rect width={30} height={30} rx={7} transform="translate(325 10)" />
          <rect width={29} height={29} rx={6.5} transform="translate(325.5 10.5)" stroke={color} />
        </g>
        <g data-name="Group 58" stroke={color} strokeWidth={2}>
          <path d="M9.5 10h12" />
          <path d="M9.5 15h12" />
          <path d="M9.5 20h12" />
        </g>
      </g>
    </svg>
  );
};

export default SquareMenu;
