import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pages from './Pages';

const Pagination = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get('https://randomuser.me/api?results=20');
    const data = response.data.results;
    const cleanedData = data?.map((user) => ({
      name: `${user.name.first} ${user.name.last}`,
      age: user.dob.age,
      email: user.email,
    }));

    setUsers(cleanedData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return users.length ? (
    <Pages content={users} itemsPerPage={5} />
  ) : (
    <div className="App">Loading users...</div>
  );
};

export default Pagination;
