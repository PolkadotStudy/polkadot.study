import React from "react";

export function ArrowDown(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      {...props}
    >
      <path d="M13.9914 25L13.9914 2" fill="none" data-nofill="true"></path>
      <path
        d="M24 15.8003L13.9914 26L4 15.8003"
        fill="none"
        data-nofill="true"
      ></path>
    </svg>
  );
}

export function ArrowRight(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      {...props}
    >
      <path d="M25 14.0086L2 14.0086" fill="none" data-nofill="true"></path>
      <path
        d="M15.8003 4L26 14.0086L15.8003 24"
        fill="none"
        data-nofill="true"
      ></path>
    </svg>
  );
}

export function ArrowLeft(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      {...props}
    >
      <path d="M3 13.9914L26 13.9914" fill="none" data-nofill="true"></path>
      <path
        d="M12.1997 24L2 13.9914L12.1997 4"
        fill="none"
        data-nofill="true"
      ></path>
    </svg>
  );
}

export function Tag(props) {
  return (
    <svg
      width={13}
      height={21}
      viewBox="0 0 13 21"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7 21H1.3C0 21 0 19.7273 0 19.7273V5.72727C0 5.72727 0 0 6.5 0C13 0 13 5.72727 13 5.72727V19.7273C13 19.7273 13 21 11.7 21ZM6.5 3.18182C5.78036 3.18182 5.2 3.75 5.2 4.45455C5.2 5.15909 5.78036 5.72727 6.5 5.72727C7.21964 5.72727 7.8 5.15909 7.8 4.45455C7.8 3.75 7.21964 3.18182 6.5 3.18182Z"
      />
    </svg>
  );
}

export function Clock(props) {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.0008 21.9129C17.7008 21.9129 22.3008 17.3129 22.3008 11.6129C22.3008 5.91287 17.7008 1.31287 12.0008 1.31287C6.40078 1.41287 1.80078 6.01287 1.80078 11.6129C1.80078 17.3129 6.40078 21.9129 12.0008 21.9129Z"
        strokeWidth="1.7143"
        strokeMiterlimit="3.4286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.001 10.1129L12.001 12.5129V5.21289"
        strokeWidth="1.7143"
        strokeMiterlimit="3.4286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CircleFull(props) {
  return (
    <svg
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.25 5.49976C4.35457 5.49976 5.25 4.60433 5.25 3.49976C5.25 2.39519 4.35457 1.49976 3.25 1.49976C2.14543 1.49976 1.25 2.39519 1.25 3.49976C1.25 4.60433 2.14543 5.49976 3.25 5.49976Z"
        strokeWidth="1.7143"
        strokeMiterlimit="3.4286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CircleEmpty(props) {
  return (
    <svg
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5498 5.49976C4.65437 5.49976 5.5498 4.60433 5.5498 3.49976C5.5498 2.39519 4.65437 1.49976 3.5498 1.49976C2.44524 1.49976 1.5498 2.39519 1.5498 3.49976C1.5498 4.60433 2.44524 5.49976 3.5498 5.49976Z"
        strokeWidth="1.7143"
        strokeMiterlimit="3.4286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GitHub(props) {
  return (
    <svg
      width="98"
      height="96"
      xmlns="http://www.w3.org/2000/svg"
      fill="#24292f"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      />
    </svg>
  );
}

export function SubstrateLogo(props) {
  return (
    <svg
      className="fill-current substrate-logo"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 419.75 58.11"
      aria-label="Subtrate Logo"
    >
      <path d="M28.33,16.42A16.57,16.57,0,0,1,34.06,26.5H22.54a6.44,6.44,0,0,0-2.27-3.86,6.93,6.93,0,0,0-4.43-1.4,4.85,4.85,0,0,0-3.17.9,3.14,3.14,0,0,0-1.08,2.56,3,3,0,0,0,2,2.8,31.55,31.55,0,0,0,6.23,1.88,62.91,62.91,0,0,1,7.56,2.19,12.52,12.52,0,0,1,5.11,3.64A10,10,0,0,1,34.63,42a10.38,10.38,0,0,1-1.87,6.12,12.4,12.4,0,0,1-5.4,4.17A21.07,21.07,0,0,1,19,53.78q-8.15,0-13-3.6A15.17,15.17,0,0,1,0,39.89H11.88a5.31,5.31,0,0,0,2.2,4A8.26,8.26,0,0,0,19,45.22a4.59,4.59,0,0,0,3.17-1,3.26,3.26,0,0,0,1.08-2.55,3.08,3.08,0,0,0-2-3,36.19,36.19,0,0,0-6.45-1.91,51.23,51.23,0,0,1-7.34-2,12.12,12.12,0,0,1-5-3.5A9.71,9.71,0,0,1,.43,24.7,10.75,10.75,0,0,1,4.54,16q4.09-3.34,11.59-3.35T28.33,16.42Z"></path>
      <path d="M82.37,13.1V53.28H70V46a13.32,13.32,0,0,1-5.15,5.61,14.88,14.88,0,0,1-7.95,2.09q-6.91,0-11-4.61T41.83,36.43V13.1H54.07V34.92a8.93,8.93,0,0,0,2.13,6.37,7.46,7.46,0,0,0,5.72,2.27,7.55,7.55,0,0,0,5.9-2.38C69.26,39.6,70,37.34,70,34.42V13.1Z"></path>
      <path d="M126.39,15.08a17.15,17.15,0,0,1,6.2,7.13,24.82,24.82,0,0,1,2.26,11,24.87,24.87,0,0,1-2.26,11,17.05,17.05,0,0,1-6.2,7.16,16.22,16.22,0,0,1-8.89,2.48,14.57,14.57,0,0,1-7.92-2.08A12.16,12.16,0,0,1,104.76,46v7.27H92.45V0h12.31V20.38a12.11,12.11,0,0,1,4.82-5.69,14.57,14.57,0,0,1,7.92-2.09A16.3,16.3,0,0,1,126.39,15.08ZM107.17,26a10,10,0,0,0-2.48,7.16,10,10,0,0,0,2.48,7.13,9,9,0,0,0,12.74.07,10.16,10.16,0,0,0,2.42-7.2,10.16,10.16,0,0,0-2.42-7.2,8.27,8.27,0,0,0-6.37-2.59A8.39,8.39,0,0,0,107.17,26Z"></path>
      <path d="M168.51,16.42a16.57,16.57,0,0,1,5.73,10.08H162.72a6.39,6.39,0,0,0-2.27-3.86,6.93,6.93,0,0,0-4.43-1.4,4.85,4.85,0,0,0-3.17.9,3.14,3.14,0,0,0-1.08,2.56,3,3,0,0,0,2,2.8A31.55,31.55,0,0,0,160,29.38a62.91,62.91,0,0,1,7.56,2.19,12.52,12.52,0,0,1,5.11,3.64A10,10,0,0,1,174.81,42a10.38,10.38,0,0,1-1.87,6.12,12.4,12.4,0,0,1-5.4,4.17,21,21,0,0,1-8.35,1.51q-8.13,0-13-3.6a15.17,15.17,0,0,1-6-10.29h11.88a5.34,5.34,0,0,0,2.2,4,8.26,8.26,0,0,0,4.93,1.37,4.59,4.59,0,0,0,3.17-1,3.26,3.26,0,0,0,1.08-2.55,3.08,3.08,0,0,0-2-3A36.19,36.19,0,0,0,155,36.79a51.23,51.23,0,0,1-7.34-2,12.12,12.12,0,0,1-5-3.5,9.71,9.71,0,0,1-2.09-6.58A10.75,10.75,0,0,1,144.72,16q4.09-3.34,11.59-3.35T168.51,16.42Z"></path>
      <path d="M205.41,42.7V53.28h-5.54c-4.7,0-8.37-1.16-11-3.49S185,43.61,185,38.23V23.47h-5.39V13.1H185V3.24h12.32V13.1h8.06V23.47h-8.06v15a4.5,4.5,0,0,0,1,3.31,4.67,4.67,0,0,0,3.28.94Z"></path>
      <path d="M232.88,14.83a15.14,15.14,0,0,1,7.88-2.16V25.85h-3.52c-3.27,0-5.8.69-7.6,2.09s-2.7,3.74-2.7,7.05V53.28H214.63V13.1h12.31v7.56A17.61,17.61,0,0,1,232.88,14.83Z"></path>
      <path d="M269.28,14.69a12.55,12.55,0,0,1,4.89,5.69V13.1h12.24V53.28H274.17V46a12.6,12.6,0,0,1-4.89,5.69,14.57,14.57,0,0,1-7.92,2.08,16.25,16.25,0,0,1-8.9-2.48,17,17,0,0,1-6.19-7.16,24.87,24.87,0,0,1-2.27-11,24.82,24.82,0,0,1,2.27-11,17.13,17.13,0,0,1,6.19-7.13,16.34,16.34,0,0,1,8.9-2.48A14.57,14.57,0,0,1,269.28,14.69ZM258.94,26a10.2,10.2,0,0,0-2.41,7.2,10.2,10.2,0,0,0,2.41,7.2,9.05,9.05,0,0,0,12.75-.07,10.06,10.06,0,0,0,2.48-7.13A10,10,0,0,0,271.69,26a8.39,8.39,0,0,0-6.37-2.63A8.31,8.31,0,0,0,258.94,26Z"></path>
      <path d="M318.81,42.7V53.28h-5.54q-7.06,0-11-3.49t-3.93-11.56V23.47H293V13.1h5.4V3.24h12.32V13.1h8.06V23.47h-8.06v15a4.5,4.5,0,0,0,1,3.31,4.66,4.66,0,0,0,3.27.94Z"></path>
      <path d="M364.24,35.42H336.38q.21,4.55,2.3,6.52a7.43,7.43,0,0,0,5.33,2,7.32,7.32,0,0,0,4.54-1.37A6.36,6.36,0,0,0,350.92,39h13a17,17,0,0,1-3.45,7.6,18.54,18.54,0,0,1-6.77,5.26,23.17,23.17,0,0,1-19.62-.58A17.69,17.69,0,0,1,327,44.14a22.22,22.22,0,0,1-2.6-11,22.5,22.5,0,0,1,2.56-11,17.56,17.56,0,0,1,7.16-7.13,23.66,23.66,0,0,1,21,0,17.33,17.33,0,0,1,7,6.87,20.56,20.56,0,0,1,2.48,10.19A17,17,0,0,1,364.24,35.42ZM350,24.3a7.8,7.8,0,0,0-5.43-2,8,8,0,0,0-5.62,2,8.41,8.41,0,0,0-2.52,5.9h15.7C352.19,27.6,351.49,25.62,350,24.3Z"></path>
      <path
        className="fill-current text-substrateGreen"
        d="M419.75,46.09v12H375.19v-12Z"
        fill="#24cc86"
      ></path>
    </svg>
  );
}

export function PolkadotLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="15 15 140 140"
      className="polkadot-logo"
    >
      <style type="text/css"></style>
      <g>
        <circle fill="#FF8C00" cx="85" cy="85" r="70"></circle>
        <g>
          <path
            fill="#FFFFFF"
            d="M85,34.7c-20.8,0-37.8,16.9-37.8,37.8c0,4.2,0.7,8.3,2,12.3c0.9,2.7,3.9,4.2,6.7,3.3c2.7-0.9,4.2-3.9,3.3-6.7 c-1.1-3.1-1.6-6.4-1.5-9.7C58.1,57.6,69.5,46,83.6,45.3c15.7-0.8,28.7,11.7,28.7,27.2c0,14.5-11.4,26.4-25.7,27.2 c0,0-5.3,0.3-7.9,0.7c-1.3,0.2-2.3,0.4-3,0.5c-0.3,0.1-0.6-0.2-0.5-0.5l0.9-4.4L81,73.4c0.6-2.8-1.2-5.6-4-6.2 c-2.8-0.6-5.6,1.2-6.2,4c0,0-11.8,55-11.9,55.6c-0.6,2.8,1.2,5.6,4,6.2c2.8,0.6,5.6-1.2,6.2-4c0.1-0.6,1.7-7.9,1.7-7.9 c1.2-5.6,5.8-9.7,11.2-10.4c1.2-0.2,5.9-0.5,5.9-0.5c19.5-1.5,34.9-17.8,34.9-37.7C122.8,51.6,105.8,34.7,85,34.7z M87.7,121.7 c-3.4-0.7-6.8,1.4-7.5,4.9c-0.7,3.4,1.4,6.8,4.9,7.5c3.4,0.7,6.8-1.4,7.5-4.9C93.3,125.7,91.2,122.4,87.7,121.7z"
          ></path>
        </g>
      </g>
    </svg>
  );
}
