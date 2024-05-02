import {
  HeatMapComponent,
  Inject,
  Tooltip,
} from "@syncfusion/ej2-react-heatmap";

// const data = [
//   { day: "Monday", hour: "12am", value: 10 },
//   { day: "Monday", hour: "1am", value: 20 },
//   { day: "Monday", hour: "2am", value: 30 },
//   // Add more data points...
// ];

function HeatmapChart() {
  let heatmapData = [
    [52, 65, 67, 45, 37, 52],
    [68, 5, 63, 51, 30, 51],
    [7, 16, 47, null, 88, 6],
    [66, 64, null, 40, 47, 41],
    [14, 46, 97, 69, null, 3],
    [54, 46, 61, 46, null, 39],
  ];
  let weekdays = ["Mon", "Thu", "Wed", "Thr", "Fri", "Sat", "Sun"];
  return (
    <div className="App">
      <HeatMapComponent
        dataSource={heatmapData}
        height="280px"
        width="400px"
        xAxis={{
          labels: weekdays,
          valueType: "Category",
        }}
        yAxis={{
          labels: weekdays,
          valueType: "Category",
        }}
        paletteSettings={{
          palette: [
            { color: "#FFC3C3" },
            { color: "#FFECEC" },
            { color: "#FF7D7D" },
            { color: "#8C2222" },
            { color: "#6B1A1A" },
            { color: "#E83838" },
          ],
          type: "Fixed",
        }}
        cellSettings={{
          tileType: "Rect",
          bubbleType: "SizeAndColor",
          isInversedBubbleSize: true,
          showLabel: false,
          border: {
            width: 2,
            color: "white",
          },
          tile: {
            showLabel: false,
            color: "#eeeeee",
          },
        }}
        showTooltip={false}
      >
        <Inject services={[Tooltip]} />
      </HeatMapComponent>
    </div>
  );
}

export default HeatmapChart;
