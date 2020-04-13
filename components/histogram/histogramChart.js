import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

const dataForChart = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Working on Project",
      fill: "start",
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
      steppedLine: true,
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 820,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          display: false,
        },
      },
    ],
  },
};
export default (props) => {
  const [charData, set] = useState(dataForChart);
  const fillDatasetWithRealDate = ({ date } = props) => {
    const { sum, from, till } = date;

    let arr = [];
    for (let index = 1; index <= 12; index++) {
      if (index >= from[0] && index <= till[0]) arr.push(2);
      else {
        arr.push(0);
      }
    }
    const [f_m, f_y] = from;
    const [t_m, t_y] = till;
    const zeroF = f_m <= 9 ? 0 : null;
    const zeroT = t_m <= 9 ? 0 : null;
    const sumUp = `${zeroF}${f_m}.${f_y} - ${zeroT}${t_m}.${t_y} (${sum[0]} ${sum[1]})`;

    return {
      label: `${sumUp}`,
      fill: "start",
      lineTension: 0.1,
      backgroundColor: "rgba(2,0,36,1)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: arr,
      steppedLine: true,
    };
  };
  useEffect(() => {
    const d = fillDatasetWithRealDate();

    // create gradient
    console.log(document.querySelector(`#${props.id}`));
    const canvas = document.querySelector(`#${props.id}`);
    const ctx = canvas.getContext("2d");
    canvas.style.backgroundColor = "rgb(32, 83, 140)";
    var gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, "rgba(150,61,162,1)");
    gradient.addColorStop(1, "rgba(2,0,36,1)");
    // const gradient = ctx.createLinearGradient(0, 0, 0, 450);

    // gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    // gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    // gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    d.backgroundColor = gradient;

    set((oldData) => ({
      ...oldData,
      datasets: [d],
    }));
    console.log(charData);
  }, []);
  return (
    <Line
      data={charData}
      height={100}
      options={options}
      className="myCanvas"
      id={props.id}
    />
  );
};
