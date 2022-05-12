import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Chart as ChartJS } from "chart.js/auto";

const Line = ({ data }) => {
  const sessions = data.map((item) => item.startedAt.slice(0, 10));

  const quantitySession = sessions.reduce((acc, rec, index) => {
    return typeof acc[rec] !== "undefined"
      ? { ...acc, [rec]: acc[rec] + 1 }
      : { ...acc, [rec]: 1 };
  }, {});

  console.log(quantitySession);

  const days = new Set(sessions);
  const num = Array.from(days);

  const howLong = data.map((item) => ({
    start: new Date(item.startedAt).getTime(),
    end: new Date(item.finishedAt).getTime(),
  }));

  const dayDuration = sessions.map(
    (item, index) => howLong[index].end - howLong[index].start
  );
  console.log(sessions);

  const [sessionData, setSessionData] = useState({
    labels: num,
    datasets: [
      {
        label: "Number of Sessions",
        data: quantitySession,
        backgroundColor: ["gray"],
      },
    ],
  });

  const [userData, setUserData] = useState({
    labels: num,
    datasets: [
      {
        label: "avarage duration",
        data: dayDuration,
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
        <Bar data={sessionData} />
        <Bar data={userData} />
      </div>
    </div>
  );
};

export default Line;
