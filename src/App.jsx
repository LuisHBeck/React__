import './App.css'
import { useState, useEffect} from 'react';
import Axios from 'axios';
import { Excuse } from './components/Excuse';

function App() {

    const [excuse, setExcuse] = useState({});

    const fetchExcuse = async (excuseType) => {
        try {
            const response = await Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseType}/`);
            setExcuse(response.data[0]);
        }catch (err) {
            console.log(err)
        } 
    }

    return (
        <div className="App">
            <h1> Generate an Excuse </h1>

            <button onClick={() => {
                fetchExcuse('party');
            }}> Party </button>

            <button onClick={() => {
                fetchExcuse('family')
            }}> Family </button>

            <button onClick={() => {
                fetchExcuse('office')
            }}> Office </button>

            <Excuse 
                category={excuse?.category}
                excuse={excuse?.excuse}    
            />
        </div>
    )
}

export default App;