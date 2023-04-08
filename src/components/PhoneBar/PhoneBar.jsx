import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    // useEffect(()=> {
    //     fetch('https://openapi.programming-hero.com/api/phones?search=${searchText}')
    //     .then(res => res.json())
    //     .then(data => setPhones(data));
    // },[])

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
        const loadedData = data.data.data;

        const phonesData = loadedData.map(phone =>{
            const parts = phone.slug.split("-");
            const price = parseInt(parts[1]);
            const phoneInfo = {
                name: phone.phone_name,
                price: price
            }
            return phoneInfo;
        })
        console.log(phonesData)
        setPhones(phonesData)
    })

    return (
        <div>
            <BarChart
            width={500}
            height={300}
            data={phones}
            >
            <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="name" fill="#8884d8" />
          <Bar dataKey="price" fill="#82ca9d" />
      
            </BarChart>
        </div>
    );
};

export default PhoneBar;