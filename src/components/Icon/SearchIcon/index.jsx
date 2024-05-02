const SearchIcon = ({ color = "#99A09B" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="11.5"
        cy="11.5"
        r="9.5"
        stroke={color}
        strokeWidth="1.5"
        style={{ transition: "all 0.5s linear" }}
      />
      <path
        d="M18.5 18.5L22 22"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{ transition: "all 0.5s linear" }}
      />
    </svg>
  );
};

export default SearchIcon;
