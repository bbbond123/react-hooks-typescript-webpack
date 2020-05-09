import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  theme?: 'yellow' | 'white';
  style?: React.CSSProperties;
}

const yellowColors = ['#ffe17a', '#fdc40a', '#fea727'];
const whiteColors = ['#fff', '#fff', '#fff'];

const Crown: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const className = props.className;
  const theme = props.theme || 'yellow';
  const colors = theme === 'white' ? whiteColors : yellowColors;

  return (
    <svg className={className} width={width} height={height} viewBox="0 0 16 11" style={props.style}>
      <path
        fill={colors[0]}
        d="M14.384 3.68a.5.5 0 00-.56-.148l-3.629 1.361-1.78-2.67a.5.5 0 00-.832 0l-1.78 2.67-3.629-1.361a.5.5 0 00-.6.725l3 5a.5.5 0 00.429.243h6a.5.5 0 00.429-.243l3-5a.5.5 0 00-.048-.577z"
      />
      <path
        fill={colors[1]}
        d="M8 .005a1.5 1.5 0 101.5 1.5A1.5 1.5 0 008 .005zM14.502 2.004a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5zM1.5 2.004a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5zM11.5 9.002h-7v1.5a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1.5z"
      />
      <path fill={colors[2]} d="M6.005 10.501v-1.5h-1.5v1.5a.5.5 0 00.5.5h1.5a.5.5 0 01-.5-.5z" />
    </svg>
  );
};

export default Crown;
