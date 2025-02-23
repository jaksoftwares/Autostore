"use client";

import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserActivity = () => {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "New Users",
        data: [12, 19, 10, 15, 18, 25, 30],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
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

  return <Bar data={data} options={options} />;
};

export default UserActivity;
