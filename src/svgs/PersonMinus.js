export const PersonMinus = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      onClick={props.onClick}
      className={props.className}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="5" cy="3.75" r="2.25" />
        <path d="M6.5 13.5h-6V12a4.5 4.5 0 0 1 7.39-3.45m.61 2.95h5" />
      </g>
    </svg>
  );
};
