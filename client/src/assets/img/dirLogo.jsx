import React from 'react';

export const dirLogo = (isEmpty, width = 48, height = 48) => {
  let stroke = false;
  let gradient = 'url(#DirGradient1)';
  let secondColor = '#818181';
  if (isEmpty) {
    gradient = 'url(#DirGradient2)';
    secondColor = '#ededed';
    stroke = true;
  }
  return (
    <svg width={width} height={height} viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <linearGradient id='DirGradient1' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor='#ededed' />
          <stop offset='25%' stopColor='#dad7d7' />
          <stop offset='100%' stopColor='#818181' />
        </linearGradient>
        <linearGradient id='DirGradient2' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor='#ffffff' />
          <stop offset='25%' stopColor='#ebebeb' />
          <stop offset='100%' stopColor='#dcdcdc' />
        </linearGradient>
      </defs>
      <path
        d='M29.8625 3.78694L28.6711 6.38391C28.4933 6.77143 28.208 7.09978 27.8491 7.32997C27.4902 7.56016 27.0728 7.68253 26.6464 7.68253H6.238C5.00781 7.68253 4.0105 8.67984 4.0105 9.91003V33.2723C4.0105 34.5024 5.00781 35.4998 6.238 35.4998H43.7004C44.9306 35.4998 45.9279 34.5024 45.9279 33.2723V4.71581C45.9279 3.48562 44.9306 2.48831 43.7004 2.48831H31.8872C31.4608 2.48832 31.0434 2.61068 30.6845 2.84087C30.3256 3.07107 30.0403 3.39942 29.8625 3.78694Z'
        fill={secondColor}
        stroke={stroke ? '#948E8C' : null}
        strokeWidth={stroke ? 1 : null}
      />
      <path
        d='M43.903 36.9992V18.8601C43.903 17.6299 42.9057 16.6326 41.6755 16.6326H21.267C20.8406 16.6326 20.4232 16.5102 20.0643 16.28C19.7054 16.0498 19.4201 15.7215 19.2423 15.3339L18.0509 12.737C17.8731 12.3494 17.5878 12.0211 17.2289 11.7909C16.87 11.5607 16.4526 11.4383 16.0262 11.4383H4.2131C2.98291 11.4383 1.9856 12.4357 1.9856 13.6658V41.2841C1.9856 42.5143 2.98291 43.5116 4.2131 43.5116H41.6755C41.8053 43.5116 41.9325 43.4999 42.0562 43.4785C42.2099 43.4998 42.3665 43.5116 42.5261 43.5116C44.4048 43.5116 45.9278 41.9887 45.9278 40.1099C45.9278 38.7213 45.0955 37.5278 43.903 36.9992Z'
        fill={gradient}
        stroke={stroke ? '#948E8C' : null}
        strokeWidth={stroke ? 1 : null}
      />
      <path
        d='M43.9028 29.7506V39.7227H43.9069C43.9069 40.2807 44.3592 40.7331 44.9172 40.7331C45.4752 40.7331 45.9275 40.2807 45.9275 39.7227V29.7506H43.9028Z'
        fill={secondColor}
        stroke={stroke ? '#948E8C' : null}
        strokeWidth={stroke ? 1 : null}
      />
    </svg>
  );
};
