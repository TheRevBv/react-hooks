import { useState } from "react";

//https://react.dev/reference/react#state-hooks
//https://reactjs.org/docs/hooks-state.html
const StateHook = () => {
  //Declaramos una nueva variable de estado, la cual llamaremos "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Has hecho click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Haz click</button>
    </div>
  );
};

export default StateHook;
