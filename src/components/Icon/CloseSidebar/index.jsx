const CloseSidebarIcon = ({ color = "#1D2B21" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.8334 4.16683L5.83337 10.0002L10.8334 15.8335"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "all 0.3s linear" }}
      />
      <path
        d="M14.1666 4.16683L9.16663 10.0002L14.1666 15.8335"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "all 0.3s linear" }}
      />
    </svg>
  );
};

export default CloseSidebarIcon;
