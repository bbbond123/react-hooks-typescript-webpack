import React from 'react';

interface ExchangeIconProps {
  // width: number
  // height: number
  color?: string;
  className?: string;
}

const ExchangeIcon: React.FC<ExchangeIconProps> = (props) => {
  // const width = props.width || 24
  // const height = props.height || 24
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 24 24`}>
      <defs>
        <clipPath id="a">
          <path d={`M0 0h24v24H0z`} />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path
          className={className}
          d="M5.075 15.775l-3.325-4.5V19.2l2.175-2.175a8.347 8.347 0 0 0 4.4 2.75l.225.05.525-1.5-.275-.05a6.656 6.656 0 0 1-3.725-2.5zM18.475 6.075A9.688 9.688 0 0 0 14.45 3.25l-.25-.1-.5 1.575.2.1a8.039 8.039 0 0 1 3.325 2.8l3 4.55.25-8.6z"
          fill={color}
        />
        <path
          d="M10.875 4.025L10.7 4.3 9.025 7.1h1.525v.85h-2.1v.85h2.1v.8h-2.1v2.225H6.625V9.6h-2.1v-.85h2.1V7.9h-2.1v-.85H6.05L4.425 4.3l-.15-.225A4.7 4.7 0 0 0 2.85 7.45a4.75 4.75 0 1 0 8.025-3.425z"
          fill="none"
        />
        <path d="M7.625 6.525l1.675-2.8h1.25a4.75 4.75 0 0 0-6.075.15H5.95z" fill="none" />
        <path
          d="M7.6 1.2a6.25 6.25 0 1 0 6.25 6.25A6.252 6.252 0 0 0 7.6 1.2zm0 1.5a4.792 4.792 0 0 1 2.95 1.025H9.3l-1.675 2.8-1.675-2.65H4.475A4.783 4.783 0 0 1 7.6 2.7zm0 9.5a4.748 4.748 0 0 1-4.75-4.75 4.7 4.7 0 0 1 1.425-3.375l.15.225L6.1 7.1H4.575v.85h2.1v.85h-2.1v.8h2.1v2.225H8.5V9.6h2.1v-.85H8.5V7.9h2.1v-.85H9.075l1.675-2.8.175-.275A4.758 4.758 0 0 1 12.4 7.4a4.833 4.833 0 0 1-4.8 4.8z"
          className={className}
          fill={color}
        />
        <path
          d="M14.675 9a6.944 6.944 0 0 1-.825 2.1v1.4a2.477 2.477 0 0 0-1.4.8l-.325-.2a7.505 7.505 0 0 1-.925.625l.75.425a2.622 2.622 0 0 0 0 1.6l-1.675 1a4.3 4.3 0 0 1-.375-1.8 5.689 5.689 0 0 1 .05-.65 7.772 7.772 0 0 1-1.55.35v.3A5.975 5.975 0 1 0 14.675 9zm-.8 10.4a4.513 4.513 0 0 1-3.1-1.8l1.7-.975a2.477 2.477 0 0 0 1.4.8zm1-8.9a4.513 4.513 0 0 1 3.1 1.8l-1.7.975a2.477 2.477 0 0 0-1.4-.8zm0 8.9v-1.95a2.378 2.378 0 0 0 1.4-.825l1.7.975a4.389 4.389 0 0 1-3.1 1.8zm3.6-2.65l-1.7-.975a2.623 2.623 0 0 0 0-1.6l1.7-.975a4.3 4.3 0 0 1 .375 1.8 4.236 4.236 0 0 1-.375 1.75z"
          className={className}
          fill={color}
        />
        <path d="M-.65-.55h24v24h-24v-24z" fill="none" />
      </g>
    </svg>
  );
};

export default ExchangeIcon;
