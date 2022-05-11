import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Chart as ChartJS } from "chart.js/auto";

const Line = ({ data }) => {
  const sessions = data.map((item) => item.startedAt.slice(0, 10));
  console.log(sessions);
  const days = new Set(sessions);
  const num = Array.from(days);

  const howLong = data.map((item) => ({
    start: new Date(item.startedAt).getTime(),
    end: new Date(item.finishedAt).getTime(),
  }));

  const dayDuration = sessions.map((item)=>console.log('pause');)
  console.log(howLong);
  console.log(sessions);

  const [userData, setUserData] = useState({
    labels: num,
    datasets: [
      {
        label: "Number of Sessions",
        data: [3, 5, 9],
        backgroundColor: ["gray"],
      },
    ],
  });

  return (
    <div>
      <Link to="/">
        <button style={{ margin: "20px", padding: "10px" }}>To 1st page</button>
      </Link>
      <div>
        <Bar data={userData} />
      </div>
    </div>
  );
};

export default Line;
