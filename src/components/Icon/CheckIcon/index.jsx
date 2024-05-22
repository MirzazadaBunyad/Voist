const CheckIcon = ({ color = "#2BB534" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M13.9568 4.54319L13.9565 4.54296C13.769 4.35566 13.5148 4.25049 13.2499 4.25049C12.9848 4.25049 12.7307 4.35567 12.5432 4.54296L12.5431 4.54305L5.99985 11.0863L3.45663 8.54305L3.45674 8.54294L3.45028 8.53692C3.26072 8.36029 3.01 8.26411 2.75092 8.26869C2.49186 8.27326 2.24467 8.3782 2.06145 8.56142C1.87823 8.74464 1.77328 8.99182 1.76871 9.25089L1.76871 9.2509C1.76415 9.50997 1.86031 9.76068 2.03695 9.95026L2.03683 9.95036L2.04307 9.9566L5.29307 13.2066L5.29321 13.2067C5.48069 13.3939 5.73485 13.4991 5.99985 13.4991C6.26486 13.4991 6.519 13.3939 6.70648 13.2067L6.70663 13.2066L13.9566 5.95661L13.9568 5.95646C14.144 5.76897 14.2492 5.51484 14.2492 5.24983C14.2492 4.98483 14.144 4.73067 13.9568 4.54319Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default CheckIcon;