import styles from '../App.module.css';
import { useState, useEffect } from 'react';
import { Text } from '../components/Text';

export default function App() {
    const [showText, setShowTask] = useState(false);

    return (
        <div className='App'>
            <button onClick={() => {
                setShowTask(!showText)
            }}>Show Text</button>

            {showText && <Text/>}
        </div>
    )
}