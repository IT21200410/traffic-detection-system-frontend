import React, { useState } from "react";
import Chart from "react-apexcharts";
import '../styles/Chart.css'

function Chartz() {
    const [state] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ['2015 - 11', '2015 - 12', '2016 - 1', '2016 - 2', '2016 - 3', '2016 - 4', '2016 - 5', '2016 - 6', '2016 - 7','2016 - 8','2016 - 9','2016 - 10','2016 - 11','2016 - 12']
          }
        },
        series: [
          {
            name: "Vehicle count",
            data: [14736, 15487, 17940, 20813, 43055, 22241, 25900, 26461,29073,31185,34374,37224,38222,39412]
          }
        ]
      })
      return (
    
        <div className="chart">
        <Chart
        options={state.options}
        series={state.series}
        type="line"
         width="600"
        />
      </div>
      
    );
  }
  
  export default Chartz;
  