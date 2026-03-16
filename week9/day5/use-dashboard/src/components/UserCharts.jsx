import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function UserCharts({ users }) {
  // Count users per city
  const cityCounts = users.reduce((acc, user) => {
    acc[user.address.city] = (acc[user.address.city] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(cityCounts),
    datasets: [
      {
        label: "Users per City",
        data: Object.values(cityCounts),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Users by City" },
    },
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default UserCharts;
