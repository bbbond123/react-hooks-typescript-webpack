import React from 'react';

interface IconProps {}

const DateIcon: React.FC<IconProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="#9e9e9e"
        d="M9 11H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm2-7h-1V2h-2v2H8V2H6v2H5a1.991 1.991 0 0 0-1.99 2L3 20a2 2 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2V6a2.006 2.006 0 0 0-2-2zm0 16H5V9h14z"
      />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  );
};

export default DateIcon;
