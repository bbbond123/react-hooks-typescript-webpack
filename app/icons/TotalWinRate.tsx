import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const TotalWinRate: React.FC<IconProps> = (props) => {
  const width = props.width || 17.578;
  const height = props.height || 26;
  const className = props.className;
  return (
    <svg width={width} height={height} {...props} className={className}>
      <g data-name="Group 31287" transform="translate(-480.352 -243)" fill="#5f5f5f">
        <path
          data-name="Path 82990"
          d="M497.685 247.875v-4.333c.245-.3 0-.542-.3-.542h-6.5a.542.542 0 00-.542.542c0 .3.243.541.542.325h1.6v5.994l-3.222 1.734-3.711-1.734v-5.994h2.086s.542-.026.542-.325a.542.542 0 00-.542-.542h-6.5c-.3 0-.542.243-.786.542v4.333a5.037 5.037 0 00.531.478l6.574 3.506a8.667 8.667 0 103.612 0l6.574-3.506c.177-.094.287-.278.042-.478zm-16.466-4.008h3.466v5.2l-3.466-1.734zm15.627 16.466a7.583 7.583 0 11-7.583-7.583 7.592 7.592 0 017.583 7.583zm-.027-13l-3.467 1.734v-5.2h3.467z"
        />
        <path
          data-name="Path 82991"
          d="M482.763 260.333a6.5 6.5 0 008.864 6.057.542.542 0 00-.4-1.009 5.416 5.416 0 110-10.1.542.542 0 00.395-1.009 6.5 6.5 0 00-8.866 6.056z"
        />
        <path
          data-name="Path 82992"
          d="M493.055 265.471a.537.537 0 00.345-.125 6.5 6.5 0 00.328-9.736.542.542 0 00-.745.787 5.414 5.414 0 01-.273 8.114.542.542 0 00.345.96z"
        />
        <circle data-name="Ellipse 3434" cx={0.542} cy={0.542} r={0.542} transform="translate(488.721 243)" />
        <g data-name="Group 31286">
          <path
            data-name="Path 82993"
            d="M492.444 257.285a.474.474 0 00-.67 0l-5.692 5.692a.474.474 0 00.671.67l5.691-5.691a.475.475 0 000-.671z"
          />
          <path
            data-name="Path 82994"
            d="M487.345 259.951a1.4 1.4 0 10-1.4-1.4 1.4 1.4 0 001.4 1.4zm0-1.856a.454.454 0 11-.454.454.455.455 0 01.454-.449z"
          />
          <path
            data-name="Path 82995"
            d="M491.181 260.982a1.4 1.4 0 101.4 1.4 1.4 1.4 0 00-1.4-1.4zm0 1.856a.454.454 0 11.454-.454.454.454 0 01-.454.454z"
          />
        </g>
      </g>
    </svg>
  );
};

export default TotalWinRate;
