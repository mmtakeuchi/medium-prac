import React from 'react';

const UnlockedScreen = ({ setLoggedIn }) => {
  return (
    <div className="unlocked-screen">
      You are logged in
      <div onClick={() => setLoggedIn(false)}>Back</div>
    </div>
  );
};

export default UnlockedScreen;
