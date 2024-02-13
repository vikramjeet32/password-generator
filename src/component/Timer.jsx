import { React, useState, useEffect } from "react";

function Timer() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Timer;
