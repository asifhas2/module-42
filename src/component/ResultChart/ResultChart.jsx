import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "id": 1,
    "name": "Aarif Hossain",
    "physics": 78,
    "chemistry": 72,
    "math": 85
  },
  {
    "id": 2,
    "name": "Nusrat Jahan",
    "physics": 88,
    "chemistry": 91,
    "math": 84
  },
  {
    "id": 3,
    "name": "Rafiul Islam",
    "physics": 67,
    "chemistry": 70,
    "math": 73
  },
  {
    "id": 4,
    "name": "Sadia Akter",
    "physics": 92,
    "chemistry": 89,
    "math": 95
  },
  {
    "id": 5,
    "name": "Tanvir Ahmed",
    "physics": 81,
    "chemistry": 76,
    "math": 88
  },
  {
    "id": 6,
    "name": "Mahi Rahman",
    "physics": 60,
    "chemistry": 65,
    "math": 70
  },
  {
    "id": 7,
    "name": "Tania Sultana",
    "physics": 85,
    "chemistry": 90,
    "math": 80
  },
  {
    "id": 8,
    "name": "Rakib Hasan",
    "physics": 74,
    "chemistry": 68,
    "math": 79
  },
  {
    "id": 9,
    "name": "Faria Noor",
    "physics": 90,
    "chemistry": 95,
    "math": 98
  },
  {
    "id": 10,
    "name": "Imran Kabir",
    "physics": 82,
    "chemistry": 79,
    "math": 85
  }
]


const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis dataKey={`name`}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={`math`} stroke='black'></Line>
                <Line dataKey={`chemistry`} stroke='blue'></Line>
            </LineChart>

        </div>
    );
};

export default ResultChart;