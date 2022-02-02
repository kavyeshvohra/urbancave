import React from 'react'
import { Pie, Bar, Doughnut } from 'react-chartjs-2'
import  'chart.js/auto';
import { ChartCont } from '../../styles/dashboard-Style';

const data ={
    labels: ['Appartments & Tenaments', 'Villas', 'Row Houses'],
    datasets: [
        {
            data:[12, 19, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1,
              hoverOffset: 5,
        }
]
};

const data1={
    labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            data:[12, 19, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1,
        }
]
}
const data2 = {
  labels:['Male', 'Female', 'Others'],
  datasets:[
      {
          data:[70,29.9,0.1],
          backgroundColor:[
            'rgba(100, 100, 100,0.32)',
            'rgba(255, 174, 143,0.57)',
            'rgba(227, 199, 255, 1)',
          ],
          borderColor:[
            'rgba(100,100,100, 0.10)',
            'rgba(255, 174, 143, 0.10)',
            'rgba(227,199,255,0.10)',
          ]
      }
  ]
}
const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

const pieoptions = {
  responsive: true,
  layout: {
    padding: {
      top: 1.8,
    },
  },
  plugins: 
  {
    legend: {
      position: "bottom",
      align: "start",
    },
  },
}

const ChartPie = () => {

    return(
        <>
            <ChartCont>
            <Pie data={data} options= {pieoptions} />
            </ChartCont>
        </>
    )
}

export const ChartDoughnut = () =>{
  return(
    <>
      <ChartCont>
        <Doughnut data={data2} options={pieoptions}/>
      </ChartCont>
    </>
  )
}

export const ChartBar = () =>{
    return(
        <>
            <div style={{width: "400px", marginTop: "2em"}}>
                <Bar data={data1} options={options}/>
            </div>
        </>
    )
}

export default ChartPie