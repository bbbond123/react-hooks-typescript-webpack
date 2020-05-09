import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const LoudSpeaker: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg width={width} height={height} {...props} className={className}>
      <path
        fill={color}
        d="M15.13 6.926a5.62 5.62 0 00-3.936-5.123l-.387.748a4.543 4.543 0 01-.16 8.827l.386.747a5.657 5.657 0 004.1-5.2zM3.903 9.74l5 4.195V0l-5 4.195zM0 9.887h2.936V4.048H0z"
      />
      <path
        fill={color}
        d="M12.905.484l-.42.769a6.038 6.038 0 01-.162 11.424l.387.74a7.106 7.106 0 004.744-6.5A7.184 7.184 0 0012.906.479z"
      />
    </svg>
  );
};

export default LoudSpeaker;
