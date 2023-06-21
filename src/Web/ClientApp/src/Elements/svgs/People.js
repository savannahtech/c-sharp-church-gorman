import * as React from "react";

const SvgPeople = (props) => (
  <svg
    width={32}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.028 8.333s-.695 0-.695-.694c0-.695.695-2.778 4.167-2.778s4.167 2.083 4.167 2.778c0 .694-.695.694-.695.694h-6.944ZM27.5 4.167A2.083 2.083 0 1 0 27.5 0a2.083 2.083 0 0 0 0 4.167ZM9.583 15s-1.25 0-1.25-1.25 1.25-5 7.5-5 7.5 3.75 7.5 5-1.25 1.25-1.25 1.25h-12.5Zm6.25-7.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM.694 8.333S0 8.333 0 7.64c0-.696.694-2.78 4.167-2.78 3.472 0 4.166 2.083 4.166 2.778 0 .694-.694.694-.694.694H.694Zm3.473-4.166a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Z"
      fill="currentColor"
      fillOpacity={props.opacity || 0.7}
    />
  </svg>
);

export default SvgPeople;