import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  level?: number;
}

const VIPBadge: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const className = props.className;
  const level = props.level;
  if (level === undefined) return null;
  return (
    <svg width={width} height={height} className={className} viewBox="5 5 30 30">
      <defs>
        <linearGradient
          id="VIPBadge__prefix__b"
          x1={0.317}
          y1={0.262}
          x2={1.305}
          y2={0.262}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="red" />
          <stop offset={1} stopColor="maroon" />
        </linearGradient>
        <filter id="VIPBadge__prefix__a" x={0} y={7.395} width={39.895} height={34.422} filterUnits="userSpaceOnUse">
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="c" />
          <feFlood floodOpacity={0.161} />
          <feComposite operator="in" in2="c" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter id="VIPBadge__prefix__c" x={3.413} y={0} width={32.406} height={23.816} filterUnits="userSpaceOnUse">
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="e" />
          <feFlood floodOpacity={0.161} />
          <feComposite operator="in" in2="e" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g filter="url(#VIPBadge__prefix__a)" transform="translate(.005)">
        <g transform="rotate(90 8.745 22.145)" fill="url(#VIPBadge__prefix__b)">
          <path d="M0 0h12.406l4.015 10.947-4.015 10.948H0l4.1-10.948z" />
          <path
            d="M1.442 1l3.593 9.597.131.35-.13.351-3.594 9.597h10.266l3.648-9.948L11.708 1H1.442M0 0h12.406l4.015 10.947-4.015 10.948H0l4.099-10.948L0 0z"
            fill="rgba(113,4,4,.87)"
          />
        </g>
        <text x="16" y="28" fill="#fff" style={{ font: 'bold 14px sans-serif' }}>
          {level}
        </text>
      </g>
      <g filter="url(#VIPBadge__prefix__c)" transform="translate(.005)">
        <path
          d="M17.94 6.004l-2 5.816h-1.524l-2-5.816h1.516l1.266 3.941 1.266-3.941zm3.437 5.816H18.24v-1.016h.84V7.02h-.84V6.004h3.137V7.02h-.837v3.785h.836zm5.445-3.98a2.318 2.318 0 0 1-.129.773 1.628 1.628 0 0 1-.371.613 2.519 2.519 0 0 1-.326.281 1.941 1.941 0 0 1-.393.219 2.475 2.475 0 0 1-.467.141 2.868 2.868 0 0 1-.564.051h-.766v1.902h-1.461V6.004h2.258a3.6 3.6 0 0 1 .869.092 2.094 2.094 0 0 1 .662.291 1.465 1.465 0 0 1 .506.583 1.95 1.95 0 0 1 .182.87zm-1.5.035a.752.752 0 0 0-.117-.424.617.617 0 0 0-.281-.244 1.219 1.219 0 0 0-.4-.1q-.184-.017-.511-.017h-.207v1.742h.491a2.2 2.2 0 0 0 .32-.027 1.072 1.072 0 0 0 .25-.085.645.645 0 0 0 .2-.127.769.769 0 0 0 .2-.3 1.36 1.36 0 0 0 .055-.418z"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

export default VIPBadge;
