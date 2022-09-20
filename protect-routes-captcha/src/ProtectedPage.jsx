import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Captcha from './Captcha';

const ProtectedPage = () => {
  const [unlocked, setUnlocked] = useState(false);

  return unlocked ? (
    <div className="protected">
      <div>Found my secret page.</div>
      <Link to="/">
        <button>Back Home</button>
      </Link>
    </div>
  ) : (
    <Captcha setUnlocked={setUnlocked} />
  );
};

export default ProtectedPage;
