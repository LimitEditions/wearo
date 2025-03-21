export const IconSettings = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 14C11.7956 14 12.5587 13.6839 13.1213 13.1213C13.6839 12.5587 14 11.7956 14 11C14 10.2044 13.6839 9.44129 13.1213 8.87868C12.5587 8.31607 11.7956 8 11 8C10.2044 8 9.44129 8.31607 8.87868 8.87868C8.31607 9.44129 8 10.2044 8 11C8 11.7956 8.31607 12.5587 8.87868 13.1213C9.44129 13.6839 10.2044 14 11 14Z"
        stroke={isHovered ? "#3447BC" : "#9095B5"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.622 9.395L17.525 6.745L19 5L17 3L15.265 4.483L12.558 3.37L11.935 1H9.981L9.349 3.401L6.704 4.516L5 3L3 5L4.453 6.789L3.373 9.446L1 10V12L3.401 12.656L4.516 15.3L3 17L5 19L6.791 17.54L9.397 18.612L10 21H12L12.604 18.613L15.255 17.515C15.697 17.832 17 19 17 19L19 17L17.516 15.25L18.614 12.598L21 11.978V10L18.622 9.395Z"
        stroke={isHovered ? "#3447BC" : "#9095B5"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
