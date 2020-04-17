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
      fill: "start",
      lineTension: 0.1,
      borderWidth: 1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 0.2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "white",
      pointHoverBorderWidth: 0.1,
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
  legend: {
    labels: {
      fontColor: "#e6e6e6",
    },
  },
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
        gridLines: {
          display: false,
          color: "#FFFFFF",
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          fontColor: "#e6e6e6",
        },
        gridLines: {
          color: "#FFFFFF",
          zeroLineColor: "#FFFFFF",
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
      ...dataForChart.datasets[0],
      data: arr,
    };
  };
  useEffect(() => {
    const d = fillDatasetWithRealDate();

    // create gradient
    const canvas = document.querySelector(`#${props.id}`);
    const ctx = canvas.getContext("2d");
    canvas.style.backgroundColor = "rgb(58, 56, 96)";
    var gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(1, "rgba(39,38,65,1)");
    gradient.addColorStop(0, "rgba(58,56,96,1)");
    d.backgroundColor = gradient;

    set((oldData) => ({
      ...oldData,
      datasets: [d],
    }));
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
