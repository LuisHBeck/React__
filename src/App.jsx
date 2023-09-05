import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Error } from './pages/Error';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <div className='App'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/menu' element={<Menu />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='*' element={<Error />}/>
                </Routes>
            </Router>
        </div> 
    )
}

export default App;