import "./App.css";
import { useToogle } from "./useToggle";

function App() {
	// const [isVisible, setIsVisible] = useState(false);
	const [isVisible, toogle] = useToogle();

	return (
		<div className="App">
			<button onClick={toogle}>
				{isVisible ? "Hide" : "Show"}
			</button>
			{isVisible && <h1>Hidden text</h1>}
		</div>
	);
}

export default App;
