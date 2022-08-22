import React, { useEffect, useState, useCallback } from 'react';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
      <GrowingButton />
    </div>
  );
}

const GrowingButton = () => {
  const [size, setSize] = useState({ height: 40, width: 60 });
  const [isGrowing, setIsGrowing] = useState(true);

  const adjustSize = useCallback(
    (height, width) => {
      if (isGrowing && height < 200) {
        setSize({ height: height + 10, width: width + 10 });
      }
      if (!isGrowing && height > 20) {
        setSize({ height: height - 10, width: width - 10 });
      }
    },
    [isGrowing]
  );

  useEffect(() => {
    const timer = setInterval(() => adjustSize(size.height, size.width), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [size, adjustSize]);

  return (
    <button
      style={{ height: size.height, width: size.width, textAlign: 'center' }}
      onClick={() => setIsGrowing(!isGrowing)}
    >
      {isGrowing ? 'Shrink' : 'Grow'}
    </button>
  );
};

export default App;
