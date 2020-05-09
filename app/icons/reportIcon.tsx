import React from 'react';

interface ReportIconProps {
  // width: number
  // height: number
  color?: string;
  className?: string;
}

const ReportIcon: React.FC<ReportIconProps> = (props) => {
  // const width = props.width || 24
  // const height = props.height || 24
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="none" d={`M0 0h24v24H0z`} />
      <path
        className={className}
        fill={color}
        d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5z"
      />
    </svg>
  );
};

export default ReportIcon;
