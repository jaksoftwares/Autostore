"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserActivity = () => {
  // Chart data
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "New Users",
        data: [12, 19, 10, 15, 18, 25, 30],
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Teal color with transparency
        borderColor: "rgba(75, 192, 192, 1)", // Solid teal border
        borderWidth: 1, // Border width
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow custom sizing
    plugins: {
      legend: {
        position: "top" as const, // Explicitly define the type
      },
      title: {
        display: true,
        text: "Weekly User Activity", // Add a title
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove x-axis grid lines
        },
      },
      y: {
        grid: {
          color: "#e5e7eb", // Light gray grid lines for y-axis
        },
        beginAtZero: true, // Start y-axis from 0
      },
    },
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="h-64"> {/* Set a fixed height for the chart */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default UserActivity;