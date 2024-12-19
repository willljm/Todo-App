import React, { useState, useEffect } from 'react';

export const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-gray-900 dark:text-white text-2xl font-bold">
      {time}
    </div>
  );
};
