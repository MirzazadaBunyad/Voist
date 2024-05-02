import { PieChart, Pie, Sector } from "recharts";

const MyPieChart = ({ data }) => {
  return (
    <PieChart width={200} height={220}>
      <Pie
        data={data}
        cx={75}
        cy={100}
        outerRadius={75}
        fill="#8884d8"
        label
        dataKey="value"
      >
        {({ data }) => (
          <Sector
            data={data}
            name="Answered vs Missed Messages"
            label={{
              value: `${data.value}%`,
              position: "inside",
              fill: "white",
            }}
          />
        )}
      </Pie>
    </PieChart>
  );
};

export default MyPieChart;
