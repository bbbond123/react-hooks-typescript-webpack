import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Edit: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const className = props.className;

  return (
    <svg width={width} height={height} {...props} className={className}>
      <defs>
        <style>{'.prefix__a{fill:#666}'}</style>
      </defs>
      <path
        className="prefix__a"
        d="M11.733 11.729H.683a.686.686 0 00-.683.683.7.7 0 00.683.683h11.071a.686.686 0 00.679-.683.7.7 0 00-.7-.683zM.245 6.921l-.016 3.107a.674.674 0 00.19.478.637.637 0 00.463.19l3.092-.016a.639.639 0 00.463-.19l6.269-6.263a.674.674 0 000-.942L7.645.193a.674.674 0 00-.942 0L4.57 2.348.437 6.458a.7.7 0 00-.192.463zm6.938-5.322L9.334 3.75 8.122 4.961 5.97 2.809zM1.567 7.208L5.031 3.75l2.151 2.151-3.464 3.441-2.167.017z"
      />
    </svg>
  );
};

export default Edit;
