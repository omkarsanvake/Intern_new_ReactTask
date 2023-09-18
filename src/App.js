import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";


const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

function App() {
  const [isPaused, setIsPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  return (
    <div className="App">
      <h1>
        CountdownCircleTimer
        <br />
        React Component
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying={!isPaused}
          key={resetKey}
          duration={10}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div className="btn">
        <button onClick={() => setIsPaused(prev => !prev)}>
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>  
      <div className="btn2">  
      <button onClick={() => setResetKey(prev => prev + 1)}>
        Reset
      </button>
      </div>

      <p className="info">
        Change component properties in the code filed on the right to try
        different functionalities
      </p>
    </div>
  );
}

export default App;

