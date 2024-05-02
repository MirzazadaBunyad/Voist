const PaginationArrowUpRight = ({ color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9745 9.5931C13.1752 9.82716 13.1752 10.1725 12.9745 10.4066L7.97453 16.2399C7.7499 16.502 7.35533 16.5324 7.09325 16.3077C6.83118 16.0831 6.80083 15.6885 7.02546 15.4264L11.6768 9.99985L7.02546 4.57326C6.80083 4.31118 6.83118 3.91662 7.09326 3.69198C7.35533 3.46734 7.7499 3.49769 7.97454 3.75977L12.9745 9.5931Z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PaginationArrowUpRight;
