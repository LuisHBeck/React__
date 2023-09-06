import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from "react";

import { Home } from "./pages/home";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { Error } from "./pages/Error";
import { Navbar } from "./components/Navbar";

function App() {
	const [username, setUsername] = useState('BECK');
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home username={username}/>} />
					<Route path="/profile" element={<Profile username={username} setUsername={setUsername}/>} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
