import { useState } from 'react';
const UseStateButton = () => {
  let [clicks, setClicks] = useState(0);
  const hendleClick = () => {
    //clicks = clicks + 1;
    setClicks(clicks + 1);
  };
  return <button onClick={hendleClick}>Current:{clicks}</button>;
};
export default UseStateButton;
