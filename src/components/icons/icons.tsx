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
