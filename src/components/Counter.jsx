import { useCounter } from "../useCounter";

export const Counter = () => {
  const { number, increment, decrement, restart } = useCounter();

  return (
    <div>
      <h1>Counter: {number}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={restart}>Restart</button>
    </div>
  );
}