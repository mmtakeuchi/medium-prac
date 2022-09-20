import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <Link to="/protectedPage">
        <button>Protected Page</button>
      </Link>
    </div>
  );
};

export default Home;
