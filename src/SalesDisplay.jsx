import React, { useState, useEffect } from 'react';

const SalesDisplay = () => {
  const [displayData, setDisplayData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('salesData'));
    if (data) {
      setDisplayData(data);
    }
  }, []);

  return (
    <textarea value={JSON.stringify(displayData, null, 2)} readOnly />
  );
};

export default SalesDisplay;
