import { useRef, useState } from "react";

const Timer = () => {
  const [TimeLeft, setTimeLeft] = useState(10);
  const IntervalRef = useRef(null);

  const startTimer = () => {
    IntervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(IntervalRef.current);
          IntervalRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(IntervalRef.current);
    IntervalRef.current = null;
  };
  const resetTimer = () => {
    stopTimer();
    setTimeLeft(10);
  };

  return (
    <div>
      <h2>Timer {TimeLeft}</h2>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <button onClick={resetTimer}>reset</button>
    </div>
  );
};
export default Timer;
