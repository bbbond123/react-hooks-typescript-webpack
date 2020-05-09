import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Plus: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const className = props.className;

  return (
    <svg width={width} height={height} {...props} className={className}>
      <defs>
        <clipPath id="prefix__a">
          <path fill="none" d="M0 0h12v12H0z" />
        </clipPath>
        <style>{'.prefix__c{fill:none;stroke:#d1d1d1;stroke-linecap:round;stroke-width:2px}'}</style>
      </defs>
      <g clipPath="url(#prefix__a)">
        <path className="prefix__c" d="M1 6h10M6 1v10" />
      </g>
    </svg>
  );
};

export default Plus;
