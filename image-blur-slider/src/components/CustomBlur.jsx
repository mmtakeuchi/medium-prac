import React, { useState, useEffect } from 'react';

const BASE_IMG_URL = 'https://picsum.photos/seed/sameimage/300';

const CustomBlur = () => {
  const [blur, setBlur] = useState(0);
  const [image, setImage] = useState(BASE_IMG_URL);

  const handleBlur = (e) => {
    setBlur(e.target.value);
  };

  useEffect(() => {
    setImage(blur !== 0 ? `${BASE_IMG_URL}/?blur=${blur}` : BASE_IMG_URL);
  }, [blur]);

  return (
    <div className="blur-container">
      <img src={image} alt="random pic" />
      <input
        type="range"
        step="1"
        min="0"
        max="10"
        value={blur}
        onChange={(e) => setBlur(e.target.value)}
      />
    </div>
  );
};

export default CustomBlur;
