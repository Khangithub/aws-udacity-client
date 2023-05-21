import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_GET_ALL_USER);
        if (res.data.success) {
          setItems(res.data.data);
        }
      } catch (error) {
        alert(error.message || JSON.stringify(error));
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <p>{item.firstname}</p>
            <p>{item.lastname}</p>
            <p>{item.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
