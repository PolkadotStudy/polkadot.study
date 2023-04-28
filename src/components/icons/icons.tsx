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
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5498 5.49976C4.65437 5.49976 5.5498 4.60433 5.5498 3.49976C5.5498 2.39519 4.65437 1.49976 3.5498 1.49976C2.44524 1.49976 1.5498 2.39519 1.5498 3.49976C1.5498 4.60433 2.44524 5.49976 3.5498 5.49976Z"
        stroke="black"
        stroke-width="1.7143"
        stroke-miterlimit="3.4286"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
