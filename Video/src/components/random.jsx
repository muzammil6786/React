import { useEffect, useState } from "react";

const RandomStateLogger = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("State updated:", value);
  }, [value]); // 👈 runs only when `value` changes

  const updateValue = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setValue(randomNumber);
  };

  return (
    <div>
      <h2>Current Value: {value}</h2>
      <button onClick={updateValue}>Generate Random Number</button>
    </div>
  );
};

export default RandomStateLogger;
