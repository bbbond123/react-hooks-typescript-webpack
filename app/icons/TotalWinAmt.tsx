import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const TotalWinAmt: React.FC<IconProps> = (props) => {
  const width = props.width || 17.334;
  const height = props.height || 26;
  const className = props.className;
  return (
    <svg width={width} height={height} {...props} className={className}>
      <g data-name="Group 31285" transform="translate(-401.528 -243)" fill="#5f5f5f">
        <path
          data-name="Path 82986"
          d="M418.862 247.875v-4.333a.542.542 0 00-.542-.542h-6.5a.541.541 0 100 1.083h1.625v5.778L410.2 251.6l-3.25-1.734v-5.778h1.625a.541.541 0 100-1.083h-6.5a.542.542 0 00-.542.542v4.333a.543.543 0 00.287.478l6.574 3.506a8.667 8.667 0 103.612 0l6.574-3.506a.541.541 0 00.282-.483zm-16.25-3.792h3.25v5.2l-3.25-1.733zm15.166 16.25a7.583 7.583 0 11-7.583-7.583 7.592 7.592 0 017.583 7.583zm0-12.783l-3.25 1.733v-5.2h3.25z"
        />
        <path
          data-name="Path 82987"
          d="M403.7 260.333a6.5 6.5 0 008.864 6.057.542.542 0 10-.395-1.009 5.416 5.416 0 110-10.1.542.542 0 00.4-1.009 6.5 6.5 0 00-8.866 6.056z"
        />
        <path
          data-name="Path 82988"
          d="M413.987 265.471a.537.537 0 00.345-.125 6.5 6.5 0 00.328-9.736.542.542 0 00-.745.787 5.414 5.414 0 01-.273 8.114.542.542 0 00.345.96z"
        />
        <circle data-name="Ellipse 3433" cx={0.542} cy={0.542} r={0.542} transform="translate(409.653 243)" />
        <path
          data-name="Path 82989"
          d="M412.683 256.518a.474.474 0 00-.661.116l-1.822 2.606-1.827-2.606a.474.474 0 00-.776.544l1.727 2.464h-.662a.474.474 0 000 .948h1.049v.688h-1.049a.474.474 0 000 .948h1.049v1.535a.474.474 0 00.948 0v-1.535h1.041a.474.474 0 000-.948h-1.049v-.688h1.049a.474.474 0 000-.948h-.632l1.728-2.464a.474.474 0 00-.113-.66z"
        />
      </g>
    </svg>
  );
};

export default TotalWinAmt;
