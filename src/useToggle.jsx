import { useState } from "react";

export const useToogle = (initialValue = false) => {
	const [state, setState] = useState(initialValue);

	const toogle = () => {
		setState((prev) => !prev);
	};

	return [state, toogle];
};
