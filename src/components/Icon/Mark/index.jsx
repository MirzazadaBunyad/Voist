const MarkIcon = ({ color = "#3D73FF" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="4" fill={color} />
    </svg>
  );
};

export default MarkIcon;
