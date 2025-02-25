"use client";

import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = () => {
  // Chart data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales ($)",
        data: [5000, 7000, 8000, 6000, 10000, 12000, 15000],
        borderColor: "#3b82f6", // Blue border
        backgroundColor: "rgba(59, 130, 246, 0.2)", // Light blue background
        borderWidth: 2, // Thicker line
        tension: 0.4, // Smooth line
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
        text: "Monthly Sales Data", // Add a title
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
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesChart;