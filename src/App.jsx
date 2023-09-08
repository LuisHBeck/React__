import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Home } from "./pages/home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Error } from "./pages/Error";
import { Navbar } from "./components/Navbar";

function App() {
	const client = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: true,
			},
		},
	});

	return (
		<div className="App">
			<QueryClientProvider client={client}>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/menu" element={<Menu />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</Router>
			</QueryClientProvider>
		</div>
	);
}

export default App;
