import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { Joke } from "../components/Joke";

export default function TellJoke() {

    const [joke, setJoke] = useState("");
    const [punch, setPunch] = useState("");

    useEffect(() => {
        const getJoke = async () => {
            try {
                const data = await axios.get("https://official-joke-api.appspot.com/random_joke");
    
                setJoke(data.data.setup);
                setPunch(data.data.punchline);
            }catch (err) {
                console.log(err);
            }
        }
    }, []);
    

    return (
        <div className="App">
            Cat Facts
            <button onClick={getJoke}>Get a Cat Fact</button>
            <Joke joke={joke} punch={punch}/>
        </div>
    )
}