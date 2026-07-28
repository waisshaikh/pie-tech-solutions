import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="instagram-brand-gradient" x1="2" y1="22" x2="22" y2="2">
          <stop offset="0" stopColor="#ffdc80" />
          <stop offset=".28" stopColor="#fcaf45" />
          <stop offset=".52" stopColor="#f77737" />
          <stop offset=".72" stopColor="#e1306c" />
          <stop offset="1" stopColor="#833ab4" />
        </linearGradient>
      </defs>
      <path fill="url(#instagram-brand-gradient)" d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="#0a66c2" d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V9h3v10ZM6.5 7.75A1.75 1.75 0 1 1 6.5 4a1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-5.2c0-1.55-.66-2.3-1.85-2.3-1.3 0-2.15.88-2.15 2.3V19H9V9h2.88v1.37h.04c.58-.88 1.72-1.8 3.55-1.8 2.75 0 3.53 1.77 3.53 4.73V19Z" />
    </svg>
  );
}
