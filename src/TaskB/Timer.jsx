import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [countdown, setCountdown] = useState(10);

  // used use effect when the component load successfully then useEffect should run 
  useEffect(() => {
    //countdown logic decrease by every second
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);
    
    if (countdown === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div className='time'>
        {/* here the timer display message  and the completion message after the times up else the counter is being decreased*/}

      <h3>Timer Display</h3>  
      {countdown === 0 ? (
        <p>Time's up</p>
      ) : (
        <p>{countdown}</p>
      )}
    </div>
  );
};

export default Timer;
