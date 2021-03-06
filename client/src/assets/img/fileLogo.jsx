import React from 'react';

export const fileLogo = (width = 48, height = 48) => (
  <svg width={width} height={height} viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <defs>
      <linearGradient id='fileGradient' x1='1' x2='0' y1='0' y2='1'>
        <stop offset='0%' stopColor='#ededed' />
        <stop offset='30%' stopColor='#c4c4c4' />
        <stop offset='100%' stopColor='#818181' />
      </linearGradient>
    </defs>
    <path
      d='M40 42C40 43.6569 38.6569 45 37 45H11C9.34315 45 8 43.6569 8 42V6C8 4.34315 9.34315 3 11 3H28.7574C29.553 3 30.3161 3.31607 30.8787 3.87868L39.1213 12.1213C39.6839 12.6839 40 13.447 40 14.2426V42Z'
      fill='url(#fileGradient)'
    />
    <path
      d='M36.7929 12.2929C37.4229 12.9229 36.9767 14 36.0858 14H30C29.4477 14 29 13.5523 29 13V6.91421C29 6.02331 30.0771 5.57714 30.7071 6.20711L36.7929 12.2929Z'
      fill='#948E8C'
    />
  </svg>
);
