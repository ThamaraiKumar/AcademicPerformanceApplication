// import React from 'react'
// import { PieChart, Pie } from 'recharts';

// function Performance() {
//     const data = [
//         { name: 'Geeksforgeeks', students: 40},
//         { name: 'Technical scripter', students: 10 },
//         { name: 'Geek-i-knack', students: 20 },
//         { name: 'Geek-o-mania', students: 30 }
//     ];
//   return (
//     <div>
//     <PieChart width={700} height={700}>
//             <Pie data={data} dataKey="students" outerRadius={100} fill="blue" />
//         </PieChart>
//     </div>
//   )
// }

// export default Performance

import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar } from "recharts";
import SideBar from "../Components/SideBar";
import '../Components/SideBar.css'
class Performance extends React.Component {
   COLORS = ["#19214D", "#2D862E", "#FFBB28", "#7E862D", "#AF19FF"];
   pieData = [
      {
         name: "Final year",
         value: 54.85
      },
      {
         name: "Third year",
         value: 47.91
      },
      {
         name: "Second year",
         value: 16.85
      },
      {
         name: "First year",
         value: 16.14
      }
   ];

   
   CustomTooltip = ({ active, payload, label }) => {
      if (active) {
         return (
         <div
            className="custom-tooltip"
            style={{
               backgroundColor: "#ffff",
               padding: "5px",
               border: "1px solid #cccc"
            }}
         >
            <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
         </div>
      );
   }
   return null;
};
render() {
   const data = [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];
   return (
    <div>
    <SideBar/><h1 className="performnace-of-year">PERFORMANCE OF THE YEAR</h1>
    <div className="piechart">
      <PieChart width={698} height={300}>
      <Pie
         data={this.pieData}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={100}
         fill="#8884d8"
      >
         {this.pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={this.COLORS[index % this.COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<this.CustomTooltip />} /><Legend/>
      </PieChart>
      </div>


      <div className="barchart">
      <div className="barcharth1">BAR CHART</div>
      <BarChart width={450} height={250} data={data}>
        <Bar dataKey="uv" fill="#00a8ff" />
      </BarChart>
      </div>
      </div>
      );
    }
}
export default Performance;