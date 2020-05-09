import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
  active?: boolean;
}

const SquareBank: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#ccc';
  const active = props.active;
  const className = props.className;
  return (
    <svg width={width} height={height} className={className} style={{ display: 'block' }} viewBox="0 0 32 32">
      <path
        fill={color}
        d={
          active
            ? 'M26.182 32H5.818A5.826 5.826 0 0 1 0 26.182V5.818A5.826 5.826 0 0 1 5.818 0h20.364A5.826 5.826 0 0 1 32 5.818v20.364A5.826 5.826 0 0 1 26.182 32z'
            : 'M26.182 32H5.818A5.826 5.826 0 0 1 0 26.182V5.818A5.826 5.826 0 0 1 5.818 0h20.364A5.826 5.826 0 0 1 32 5.818v20.364A5.826 5.826 0 0 1 26.182 32zM5.818 1.455a4.367 4.367 0 0 0-4.363 4.363v20.364a4.367 4.367 0 0 0 4.364 4.364h20.363a4.367 4.367 0 0 0 4.364-4.364V5.818a4.367 4.367 0 0 0-4.364-4.364z'
        }
      />
      <path fill={active ? '#FFF' : color} stroke="transparent" d="M16.159 5.818l-10.341 5.49v.959H25.95v-1.22z" />
      <path
        fill={active ? '#FFF' : color}
        stroke="transparent"
        d="M7.085 13.313v.959l.784.959v7.495h3.573v-7.495l.959-.959v-.959zM13.708 13.313v.959l.784.959v7.495h3.573v-7.495l.959-.959v-.959zM20.244 13.313v.959l.784.959v7.495h3.573v-7.495l.959-.959v-.959z"
      />
      <path fill={active ? '#FFF' : color} stroke="transparent" d="M5.818 23.393H26.56v2.789H5.818z" />
    </svg>
  );
};

export default SquareBank;
