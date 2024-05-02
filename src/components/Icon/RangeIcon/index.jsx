const RangeIcon = ({ color = "#FF3D3D", width = "22", fill = "#FFECEC" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="71"
      height="13"
      viewBox="0 0 71 13"
      fill="none"
      style={{
        overflow: "hidden",
      }}
    >
      <rect
        x="1"
        y="1"
        width="69"
        height="11"
        rx="5.5"
        fill={fill}
        stroke={color}
      />
      <rect
        x="1"
        y="1"
        width={width}
        height="11"
        rx="5.5"
        fill={color}
        stroke={color}
      />
    </svg>
  );
};

export default RangeIcon;
