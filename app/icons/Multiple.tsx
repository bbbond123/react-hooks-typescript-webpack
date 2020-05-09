import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Multiple: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const className = props.className;

  return (
    <svg width={width} height={height} {...props} className={className}>
      <defs>
        <clipPath id="prefix__a">
          <path fill="none" d="M0 0h13.007v13.006H0z" />
        </clipPath>
        <style>{'.prefix__c{fill:none;stroke:#e9e9e9;stroke-linecap:round;stroke-width:2px}'}</style>
      </defs>
      <g clipPath="url(#prefix__a)">
        <path className="prefix__c" d="M1.415 1.414l10.177 10.177M11.592 1.414L1.415 11.591" />
      </g>
    </svg>
  );
};

export default Multiple;
