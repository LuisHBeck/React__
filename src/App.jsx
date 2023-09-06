import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState, createContext } from "react";

import { Home } from "./pages/home";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { Error } from "./pages/Error";
import { Navbar } from "./components/Navbar";

export const AppContext = createContext();

function App() {
	const [username, setUsername] = useState('BECK');
	return (
		<div className="App">
			<AppContext.Provider value={{ username, setUsername }}>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</Router>
			</AppContext.Provider>
		</div>
	);
}

export default App;
