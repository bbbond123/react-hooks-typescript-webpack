import React from 'react';

interface AnnounceIconProps {
  // width: number
  // height: number
  color?: string;
  className?: string;
}

const AnnounceIcon: React.FC<AnnounceIconProps> = (props) => {
  // const width = props.width || 24
  // const height = props.height || 24
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 33 33`}>
      <path fill="none" d={`M0 0h24v24H0z`} />
      <path
        fill={color}
        className={className}
        d="M16.294 29.333a2.675 2.675 0 0 0 2.667-2.667h-5.334a2.675 2.675 0 0 0 2.667 2.667zm8-8v-6.667c0-4.093-2.173-7.52-6-8.427v-.906a2 2 0 1 0-4 0v.907c-3.813.907-6 4.32-6 8.427v6.666L5.627 24v1.333H26.96V24zm-2.667 1.333H10.96v-8c0-3.307 2.013-6 5.333-6s5.334 2.694 5.334 6zM10.4 5.44L8.493 3.533A13.9 13.9 0 0 0 3 14h2.67a11.261 11.261 0 0 1 4.73-8.56zM26.92 14h2.667a13.985 13.985 0 0 0-5.494-10.467L22.2 5.44A11.327 11.327 0 0 1 26.92 14z"
      />
    </svg>
  );
};

export default AnnounceIcon;
