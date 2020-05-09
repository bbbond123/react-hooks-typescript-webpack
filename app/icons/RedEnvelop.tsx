import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const RedEnvelop: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const className = props.className;

  return (
    <svg width={width} height={height} className={className} style={{ display: 'block' }} viewBox="0 0 54 58">
      <defs>
        <filter id="RedEnvelop__filter" x={0} y={0} width={54} height={58} filterUnits="userSpaceOnUse">
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="blur" />
          <feFlood floodColor="#ff3b00" floodOpacity={0.353} />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="translate(-1653 -1023)">
        <g transform="translate(1662 1026)">
          <g transform="translate(-9 -3)" filter="url(#RedEnvelop__filter)">
            <g transform="translate(9 6)" fill="#fa4646" stroke="#e73232" strokeWidth={4}>
              <rect width={36} height={40} rx={4} stroke="none" />
              <rect fill="none" x={2} y={2} width={32} height={36} rx={2} />
            </g>
          </g>
          <g transform="translate(2.125 .714)">
            <path fill="#fdd345" transform="translate(1.875 5.639)" d="M0 0h28v4H0z" />
            <path fill="#fdd345" transform="translate(1.875 34.764)" d="M0 0h28v4H0z" />
          </g>
          <path
            d="M-9.475 2.1V.646a.371.371 0 0 0 .216-.051q.144-.123.144-.677V-9h1.445v8.446A9.221 9.221 0 0 1-7.721.7 1.658 1.658 0 0 1-8.6 1.887a2.121 2.121 0 0 1-.875.213zm.195-12.458v-1.9h6.942v1.9h-2.5V2.164h-1.9v-12.52zm-.01-3.025v-1.9h6.952v1.9zM-3.876 2.03v-11h1.538v11zm2.41-1.569v-5.434a1.78 1.78 0 0 1 .492-1.333 1.616 1.616 0 0 1 1.189-.482h7.352a1.815 1.815 0 0 1 1.344.488 1.638 1.638 0 0 1 .5 1.2v5.079a2.623 2.623 0 0 1-.246 1.354 1.793 1.793 0 0 1-1.565.831L.39 2.143a1.871 1.871 0 0 1-1.384-.5A1.622 1.622 0 0 1-1.466.461zM3 .226v-1.61H.431v1.107a.458.458 0 0 0 .195.42 1.373 1.373 0 0 0 .625.082zM.431-3.281H3v-1.61H1.015q-.584 0-.584.543zM4.9.226h2.124a.475.475 0 0 0 .328-.144q.154-.133.154-.205v-1.261H4.9zm0-3.507h2.6L7.485-4.43q-.01-.461-.513-.461H4.9zM-1.4-13.32v-1.9H9.413v1.9zm1.887.779h6.87a1.845 1.845 0 0 1 1.159.308 1.314 1.314 0 0 1 .615 1.025v1.948a1.489 1.489 0 0 1-.441 1.1 1.54 1.54 0 0 1-1.138.441H.513a1.68 1.68 0 0 1-1.241-.433 1.417 1.417 0 0 1-.42-1.025v-2a1.185 1.185 0 0 1 .6-1.056 1.924 1.924 0 0 1 1.04-.308zm.687 3.1h5.788q.451 0 .451-.574v-.318a.451.451 0 0 0-.164-.4.975.975 0 0 0-.41-.051H1.015q-.42 0-.42.4v.523a.382.382 0 0 0 .185.379 1.208 1.208 0 0 0 .399.038z"
            transform="translate(17.751 29.278)"
            fill="#fff"
          />
        </g>
        <path fill="none" d="M48 48H0V0h48z" transform="translate(1656 1024)" />
      </g>
    </svg>
  );
};

export default RedEnvelop;
