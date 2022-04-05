import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import {
    ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  AreaChart,
  BarChart,
} from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
        .then(data=>setChart(data))
    }, [])






    return (
        <div className="chart-container">
            <div className="line-chart">
                    <h1>MONTH WISE SELL</h1>
            <LineChart
          width={500}
          height={300}
          data={chart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
          
            </LineChart>
            </div>
            
            <div className="area-chart">
                <h1>INVESTMENT VS REVENUE</h1>
                <AreaChart
          width={500}
          height={400}
          data={chart}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sell" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
            </div>
            
            <div className="bar-chart">
                <h1>INVESTMENT VS REVENUE</h1>
            <BarChart
          width={500}
          height={300}
          data={chart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
          <Bar dataKey="investment" fill="#82ca9d" />
        </BarChart>
            </div>
            
            <div className="composed-chart">
                <h1>SELL VS REVENUE</h1>
                <ComposedChart
          width={500}
          height={400}
          data={chart}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" label={{ value: 'Month', position: 'insideBottomRight', offset: 0 }} scale="band" />
          <YAxis label={{ value: 'Revenue', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="sell" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
        </ComposedChart>
            </div>

        </div>
    );
};

export default Dashboard;