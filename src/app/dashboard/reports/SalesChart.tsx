"use client";

import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales ($)",
        data: [5000, 7000, 8000, 6000, 10000, 12000, 15000],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default SalesChart;
