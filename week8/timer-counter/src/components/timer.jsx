import { useState } from "react";

function Timer() {
  // Timer state
  const [time, setTime] = useState(10);

  // Input state for custom timer
  const [input, setInput] = useState("");

  // Start automatic countdown
  const startCountdown = () => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);
  };

  // Reset timer
  const resetTimer = () => {
    setTime(10);
  };

  // Set custom timer value
  const setCustomTime = () => {
    const value = Number(input);

    if (value > 0) {
      setTime(value);
    }

    setInput("");
  };

  return (
    <div className="timer-container">
      <h2>Time Remaining: {time} seconds</h2>

      <input
        type="number"
        placeholder="Enter seconds"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={setCustomTime}>Set Timer</button>

      <br />
      <br />

      <button onClick={startCountdown}>Start Countdown</button>

      <button onClick={resetTimer}>Reset Timer</button>

      {time === 0 && <p>Countdown finished!</p>}
    </div>
  );
}

export default Timer;
