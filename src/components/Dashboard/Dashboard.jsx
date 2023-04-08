import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';



const Dashboard = () => {
    const marksArray = [
        {
            id: 1,
            name: "Alice",
            math: 75,
            physics: 82,
            chemistry: 89
        },
        {
            id: 2,
            name: "Bob",
            math: 90,
            physics: 70,
            chemistry: 95
        },
        {
            id: 3,
            name: "Charlie",
            math: 85,
            physics: 76,
            chemistry: 83
        },
        {
            id: 4,
            name: "David",
            math: 80,
            physics: 85,
            chemistry: 78
        },
        {
            id: 5,
            name: "Emily",
            math: 92,
            physics: 79,
            chemistry: 86
        },
        {
            id: 6,
            name: "Frank",
            math: 68,
            physics: 71,
            chemistry: 64
        },
        {
            id: 7,
            name: "Grace",
            math: 77,
            physics: 87,
            chemistry: 92
        },
        {
            id: 8,
            name: "Henry",
            math: 88,
            physics: 83,
            chemistry: 80
        },
        {
            id: 9,
            name: "Isabella",
            math: 91,
            physics: 92,
            chemistry: 94
        },
        {
            id: 10,
            name: "Jacob",
            math: 82,
            physics: 78,
            chemistry: 85
        }
    ];

    return (
        <div>
            <LineChart
                width={800}
                height={300}
                data={marksArray}
            >
                <Line dataKey="physics"></Line>
                <Line stroke='#8884d8' dataKey="math"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey=""></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
            <BarChart
                width={800}
                height={300}
                data={marksArray}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="physics" fill="#8884d8" />
                <Bar dataKey="math" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Dashboard;