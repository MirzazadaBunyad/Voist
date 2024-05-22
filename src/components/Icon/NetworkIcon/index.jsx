const NetworkIcon = ({ color = "#6C756F" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2505 4.99941C15.2508 2.92834 16.93 1.24967 19.0011 1.25C21.0721 1.25033 22.7508 2.92952 22.7505 5.00059C22.7501 7.07166 21.0709 8.75033 18.9999 8.75L16.75 8.74965V15.2504L18.9999 15.25C21.0709 15.2497 22.7501 16.9283 22.7505 18.9994C22.7508 21.0705 21.0721 22.7497 19.0011 22.75C16.93 22.7503 15.2508 21.0717 15.2505 19.0006L15.2501 16.7495H8.75084L8.75049 19.0006C8.75016 21.0717 7.07097 22.7503 4.9999 22.75C2.92883 22.7497 1.25016 21.0705 1.25049 18.9994C1.25081 16.9283 2.93001 15.2497 5.00108 15.25L7.25 15.2504V8.74965L5.00108 8.75C2.93001 8.75033 1.25081 7.07166 1.25049 5.00059C1.25016 2.92952 2.92883 1.25033 4.9999 1.25C7.07097 1.24967 8.75016 2.92834 8.75049 4.99941L8.75084 7.24951H15.2501L15.2505 4.99941ZM7.25084 7.24951L7.25049 4.99965C7.25029 3.757 6.24277 2.7498 5.00013 2.75C3.75749 2.7502 2.75029 3.75771 2.75049 5.00035C2.75068 6.243 3.7582 7.2502 5.00084 7.25L7.25084 7.24951ZM19.0008 2.75C17.7582 2.7498 16.7507 3.757 16.7505 4.99965L16.7501 7.24965L19.0001 7.25C20.2428 7.2502 21.2503 6.24299 21.2505 5.00035C21.2507 3.75771 20.2435 2.7502 19.0008 2.75ZM8.75 8.74951V15.2495H15.25V8.74951H8.75ZM21.2505 18.9996C21.2503 17.757 20.2428 16.7498 19.0001 16.75L16.7501 16.7504L16.7505 19.0004C16.7507 20.243 17.7582 21.2502 19.0008 21.25C20.2435 21.2498 21.2507 20.2423 21.2505 18.9996ZM2.75049 18.9996C2.75068 17.757 3.7582 16.7498 5.00084 16.75L7.25084 16.7504L7.25049 19.0004C7.25029 20.243 6.24277 21.2502 5.00013 21.25C3.75749 21.2498 2.75029 20.2423 2.75049 18.9996Z"
        fill={color}
      />
    </svg>
  );
};

export default NetworkIcon;