import React from 'react';

interface RightArrowIconProps {
  // width: number
  // height: number
  color?: string;
  className?: string;
}

const RightArrowIcon: React.FC<RightArrowIconProps> = (props) => {
  // const width = props.width || 24
  // const height = props.height || 24
  const color = props.color || '#888';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g fill="#fff">
        <path d="M31.5 16c0 4.14-1.612 8.033-4.54 10.96A15.399 15.399 0 0 1 16 31.5c-4.14 0-8.033-1.612-10.96-4.54A15.399 15.399 0 0 1 .5 16c0-4.14 1.612-8.033 4.54-10.96A15.399 15.399 0 0 1 16 .5c4.14 0 8.033 1.612 10.96 4.54A15.399 15.399 0 0 1 31.5 16z" />
        <path
          fill={color}
          d="M1 16c0 4.007 1.56 7.773 4.393 10.607A14.902 14.902 0 0 0 16 31c4.007 0 7.773-1.56 10.607-4.393A14.902 14.902 0 0 0 31 16c0-4.007-1.56-7.773-4.393-10.607A14.902 14.902 0 0 0 16 1C11.993 1 8.227 2.56 5.393 5.393A14.902 14.902 0 0 0 1 16m-1 0C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16z"
        />
      </g>
      <path fill={color} d="M11.453 22.12L17.56 16l-6.107-6.12L13.333 8l8 8-8 8z" />
      <path fill="none" d="M0 32V0h32v32z" />
    </svg>
  );
};

export default RightArrowIcon;
