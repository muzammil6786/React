import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pagination from "./component/pagonation";
import Timer from "./component/timer";
import OTPInput from "./component/otp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Pagination /> */}



    {/* <Timer /> */}


    <OTPInput />
    </>
  );
}

export default App;
