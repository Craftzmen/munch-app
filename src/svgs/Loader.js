export const  Loader = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={props.className}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9" />
        <path d="M17 12a5 5 0 1 0-5 5" />
      </g>
    </svg>
  );
};
