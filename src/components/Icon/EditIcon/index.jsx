const EditIcon = ({ color = "#99A09B" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M2.5 17.5L10 17.5H17.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "all 0.3s linear" }}
      />
      <path
        d="M10.1849 4.85723L12.542 2.50021L16.6667 6.625L14.3097 8.98202M10.1849 4.85723L5.56158 9.48058C5.37405 9.66812 5.26869 9.92248 5.26869 10.1877L5.26869 13.8983L8.97927 13.8983C9.24448 13.8983 9.49884 13.7929 9.68637 13.6054L14.3097 8.98202M10.1849 4.85723L14.3097 8.98202"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "all 0.3s linear" }}
      />
    </svg>
  );
};

export default EditIcon;
