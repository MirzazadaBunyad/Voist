const HomeIcon = ({ color = "#1A6B1F" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_848_7168)">
        <path
          d="M1.66669 10.1698C1.66669 8.26275 1.66669 7.30923 2.09935 6.51879C2.53202 5.72834 3.32247 5.23777 4.90338 4.25661L6.57005 3.22223C8.24118 2.18508 9.07674 1.6665 10 1.6665C10.9233 1.6665 11.7589 2.18508 13.43 3.22223L15.0967 4.25661C16.6776 5.23776 17.468 5.72834 17.9007 6.51879C18.3334 7.30923 18.3334 8.26275 18.3334 10.1698V11.4373C18.3334 14.688 18.3334 16.3134 17.357 17.3233C16.3807 18.3332 14.8094 18.3332 11.6667 18.3332H8.33335C5.19066 18.3332 3.61931 18.3332 2.643 17.3233C1.66669 16.3134 1.66669 14.688 1.66669 11.4373V10.1698Z"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M12.5 15H7.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_848_7168">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HomeIcon;
