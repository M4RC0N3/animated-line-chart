import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './index.css';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const NumberRandomGenerator = () =>{
  let operation:any = Math.floor(260* Math.random());
  return operation;
}

export const LineOptions = {
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    },  
  },

  scales: {
    x: {
      offset: false,
      grid: {
        drawBorder: false,
        display: false,
      },
      title:{
        display: true,
        text: 'Senconds in ( s )'
      },
    },
    y: {
      max: 300,
      min: 0,
      title: {
        display: true,
        text: 'potency in ( W )'
      }
    }
  },
    elements: {
      point:{
        radius: 0
      }
    },
  legend: {
    display: false
  },
  tooltips: {
    enabled: false
  }
};

const ChartLine = () =>{
  const chartValue = useRef();
  const dataLine = {
    labels: ["1", "2", "3","4" ,"5", "6", "7", "8", "9", "10"],
    datasets: [{
      label: "Dataset 1",
      data: [0, 2, 3, 5, 6, 7, 8, 9, 10],
      borderColor: "#F97F2A",
      backgroundColor: (context:any) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "#F97F2A");
        gradient.addColorStop(1, "rgba(253, 179, 30, .1)");
        return gradient;
      },
      tension: .4,
      fill: true,
      spanGaps: false,
      animation:{
        duration: 0,
      },
    }],
  };
  useEffect(()=>{
    let values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let currentValue:any = chartValue.current;
    setInterval(()=>{
      values.splice(0, 1);
      values.push(NumberRandomGenerator());
      currentValue.data.datasets[0].data=values;
      console.log(values);
      currentValue.update();
    }, 900);
  }, [])
  return (
    <div className="line-chart-container">
      <h1>Line Chart</h1>
      <div className="chart-container">
        <div className="consumed-energy-container inner-chart">
          <p className="title">Consumed energy</p>
          <Line data={dataLine} options={LineOptions} ref={chartValue}></Line>
        </div>
      </div>
    </div>
  );
}

export default ChartLine;
