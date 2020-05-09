import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const DrawCode: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const className = props.className;
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 145.703 88" {...props}>
      <g transform="translate(45.203)">
        <path fill="#fff" d="M0 0h88v88H0z" />
        <path d="M0 0h88v88H0z" fill="none" />
        <path
          fill="#E60023"
          d="M78.592 25.25v-9.056a7.9 7.9 0 0 0-7.816-7.944h-54.71a7.879 7.879 0 0 0-7.816 7.944v55.612a7.879 7.879 0 0 0 7.816 7.944h54.71a7.9 7.9 0 0 0 7.816-7.944V62.75a7.971 7.971 0 0 0 3.908-6.832V32.083a7.971 7.971 0 0 0-3.908-6.833zm-3.908 6.832v23.835H47.329V32.083zM16.066 71.806V16.194h54.71v7.944H47.329a7.9 7.9 0 0 0-7.816 7.944v23.835a7.9 7.9 0 0 0 7.816 7.944h23.447v7.944z"
        />
        <circle fill="#E60023" cx={4.125} cy={4.125} r={4.125} transform="translate(55.065 39.875)" />
        <g transform="translate(2.455 49.205)">
          <circle cx={16.88} cy={16.88} r={16.88} stroke="#fff" fill="#888" strokeWidth={2} />
          <circle
            cx={16.88}
            cy={16.88}
            r={16.88}
            transform="translate(1.206 1.206)"
            fill="#634b99"
            strokeWidth={4}
            stroke="#fff"
          />
          <circle fill="#fff" cx={16.174} cy={16.174} r={16.174} transform="translate(1.206 2.617)" />
          <circle fill="rgba(255,88,0,.2)" cx={10.851} cy={10.851} r={10.851} transform="translate(6.029 8.44)" />
          <path fill="#E60023" stroke="#E60023" strokeWidth="0.4px" d="M26.074 21.76H7.545v-4.466h18.529z" />
          <path
            fill="#E60023"
            stroke="#E60023"
            strokeWidth="0.4px"
            d="M19.809 28.575l-9.265-16.047 3.868-2.233 9.264 16.047z"
          />
          <path
            fill="#E60023"
            stroke="#E60023"
            strokeWidth="0.4px"
            d="M10.545 26.341l9.264-16.047 3.868 2.233-9.265 16.047z"
          />
          <g transform="translate(-27)">
            <circle fill="rgba(255,88,0,.2)" cx={10.851} cy={10.851} r={10.851} transform="translate(6.029 8.44)" />
            <path fill="#E60023" stroke="#E60023" strokeWidth="0.4px" d="M26.074 21.76H7.545v-4.466h18.529z" />
            <path
              fill="#E60023"
              stroke="#E60023"
              strokeWidth="0.4px"
              d="M19.809 28.575l-9.265-16.047 3.868-2.233 9.264 16.047z"
            />
            <path
              fill="#E60023"
              stroke="#E60023"
              strokeWidth="0.4px"
              d="M10.545 26.341l9.264-16.047 3.868 2.233-9.265 16.047z"
            />
          </g>
          <g transform="translate(-53.687)">
            <circle fill="rgba(255,88,0,.2)" cx={10.851} cy={10.851} r={10.851} transform="translate(6.029 8.44)" />
            <path fill="#E60023" stroke="#E60023" strokeWidth="0.4px" d="M26.074 21.76H7.545v-4.466h18.529z" />
            <path
              fill="#E60023"
              stroke="#E60023"
              strokeWidth="0.4px"
              d="M19.809 28.575l-9.265-16.047 3.868-2.233 9.264 16.047z"
            />
            <path
              fill="#E60023"
              stroke="#E60023"
              strokeWidth="0.4px"
              d="M10.545 26.341l9.264-16.047 3.868 2.233-9.265 16.047z"
            />
          </g>
        </g>
        <g transform="translate(57.5, 32.5) scale(0.025)">
          <path
            fill="#797979"
            d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"
          />
        </g>
      </g>
    </svg>
  );
};

export default DrawCode;
