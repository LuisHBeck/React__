import { useState } from "react";

export const useCounter = () => {
	const [number, setNumber] = useState(0);

	const increment = () => {
		setNumber(number + 1);
	};

	const decrement = () => {
		setNumber(number - 1);
	};

	const restart = () => {
		setNumber(0);
	};

  return { number, increment, decrement, restart };
};
