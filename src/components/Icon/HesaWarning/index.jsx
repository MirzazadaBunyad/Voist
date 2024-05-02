const HesaWarningIcon = ({ color = "#FF3D3D" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
    >
      <g clipPath="url(#clip0_1310_13014)">
        <path
          d="M2.33939 20.2997C2.23221 20.114 2.23221 19.8853 2.33938 19.6997L11.1596 4.42254C11.2668 4.2369 11.4649 4.12254 11.6793 4.12254H29.3198C29.5341 4.12254 29.7322 4.2369 29.8394 4.42254L38.6596 19.6997C38.7668 19.8853 38.7668 20.114 38.6596 20.2997L29.8394 35.5768C29.7322 35.7624 29.5341 35.8768 29.3198 35.8768H11.6793C11.4649 35.8768 11.2668 35.7624 11.1596 35.5768L2.33939 20.2997Z"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 13L20 22"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 26.6837L20.0167 26.6651"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1310_13014">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HesaWarningIcon;
