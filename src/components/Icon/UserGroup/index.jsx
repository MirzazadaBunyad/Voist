const UserGroupIcon = ({ color = "#1D2B21" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle
        cx="7.49984"
        cy="4.99984"
        r="3.33333"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M12.5 7.5C13.8807 7.5 15 6.38071 15 5C15 3.61929 13.8807 2.5 12.5 2.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <ellipse
        cx="7.49984"
        cy="14.1668"
        rx="5.83333"
        ry="3.33333"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M15 11.6665C16.4619 11.9871 17.5 12.7989 17.5 13.7498C17.5 14.6076 16.6552 15.3523 15.4167 15.7252"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default UserGroupIcon;
