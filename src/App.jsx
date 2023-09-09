import "./App.css";
import { Person } from "./components/Person";

function App() {
	return (
		<div className="App">
			<Person
				name="Beck"
				email="beck@gmail.com"
				age={19}
				isMarried={false}
				friends={["Torres", "Pedrinho", "Alemão"]}
			/>
		</div>
	);
}

export default App;
