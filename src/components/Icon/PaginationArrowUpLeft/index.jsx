const PaginationArrowUpLeft = ({ color = "#855FCC" }) => {
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
        d="M7.02546 9.5931C6.82485 9.82716 6.82485 10.1725 7.02546 10.4066L12.0255 16.2399C12.2501 16.502 12.6447 16.5324 12.9067 16.3077C13.1688 16.0831 13.1992 15.6885 12.9745 15.4264L8.32317 9.99985L12.9745 4.57326C13.1992 4.31118 13.1688 3.91662 12.9067 3.69198C12.6447 3.46734 12.2501 3.49769 12.0255 3.75977L7.02546 9.5931Z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PaginationArrowUpLeft;
