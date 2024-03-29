import React from 'react';

export const facebook = (className, background = '#53545A', color = '#ffffff', width = 32, height = 32) => (
  <svg className={className} width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
    <g clipPath='url(#facebook-square)'>
      <rect x='11' y='3' width='16' height='29' fill={color}></rect>
      <path
        d='M27.6876 0H4.31206C1.93062 0 0 1.93055 0 4.31206V27.6878C0 30.0693 1.93055 31.9998 4.31206 31.9998H15.8408L15.8604 20.5648H12.8896C12.5035 20.5648 12.1902 20.2526 12.1887 19.8666L12.1744 16.1806C12.173 15.7924 12.4873 15.4769 12.8754 15.4769H15.8409V11.9153C15.8409 7.78215 18.3652 5.53159 22.0522 5.53159H25.0778C25.4649 5.53159 25.7788 5.84542 25.7788 6.23259V9.34063C25.7788 9.72764 25.4651 10.0414 25.0782 10.0416L23.2214 10.0425C21.2163 10.0425 20.828 10.9953 20.828 12.3936V15.477H25.234C25.6538 15.477 25.9795 15.8436 25.9301 16.2605L25.4932 19.9465C25.4514 20.2992 25.1523 20.565 24.7971 20.565H20.8477L20.828 32H27.6878C30.0692 32 31.9998 30.0695 31.9998 27.688V4.31206C31.9997 1.93055 30.0691 0 27.6876 0Z'
        fill={background}
      ></path>
    </g>
    <defs>
      <clipPath id='facebook-square'>
        <rect width='32' height='32' fill={color}></rect>
      </clipPath>
    </defs>
  </svg>
);
