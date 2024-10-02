import React, { useState, useEffect } from 'react';

const LegalDisplay = () => {
  const [displayData, setDisplayData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('legalData'));
    if (data) {
      setDisplayData(data);
    }
  }, []);

  return (
    <textarea value={JSON.stringify(displayData, null, 2)} readOnly />
  );
};

export default LegalDisplay;
